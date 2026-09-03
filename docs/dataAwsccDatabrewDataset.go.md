# `dataAwsccDatabrewDataset` Submodule <a name="`dataAwsccDatabrewDataset` Submodule" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatabrewDataset <a name="DataAwsccDatabrewDataset" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/databrew_dataset awscc_databrew_dataset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

dataawsccdatabrewdataset.NewDataAwsccDatabrewDataset(scope Construct, id *string, config DataAwsccDatabrewDatasetConfig) DataAwsccDatabrewDataset
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetConfig">DataAwsccDatabrewDatasetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetConfig">DataAwsccDatabrewDatasetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDatabrewDataset resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

dataawsccdatabrewdataset.DataAwsccDatabrewDataset_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

dataawsccdatabrewdataset.DataAwsccDatabrewDataset_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

dataawsccdatabrewdataset.DataAwsccDatabrewDataset_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

dataawsccdatabrewdataset.DataAwsccDatabrewDataset_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccDatabrewDataset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccDatabrewDataset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccDatabrewDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/databrew_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatabrewDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.formatOptions">FormatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference">DataAwsccDatabrewDatasetFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.input">Input</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference">DataAwsccDatabrewDatasetInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.pathOptions">PathOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference">DataAwsccDatabrewDatasetPathOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsList">DataAwsccDatabrewDatasetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `FormatOptions`<sup>Required</sup> <a name="FormatOptions" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.formatOptions"></a>

```go
func FormatOptions() DataAwsccDatabrewDatasetFormatOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference">DataAwsccDatabrewDatasetFormatOptionsOutputReference</a>

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.input"></a>

```go
func Input() DataAwsccDatabrewDatasetInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference">DataAwsccDatabrewDatasetInputOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PathOptions`<sup>Required</sup> <a name="PathOptions" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.pathOptions"></a>

```go
func PathOptions() DataAwsccDatabrewDatasetPathOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference">DataAwsccDatabrewDatasetPathOptionsOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.tags"></a>

```go
func Tags() DataAwsccDatabrewDatasetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsList">DataAwsccDatabrewDatasetTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDataset.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatabrewDatasetConfig <a name="DataAwsccDatabrewDatasetConfig" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

&dataawsccdatabrewdataset.DataAwsccDatabrewDatasetConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/databrew_dataset#id DataAwsccDatabrewDataset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatabrewDatasetFormatOptions <a name="DataAwsccDatabrewDatasetFormatOptions" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

&dataawsccdatabrewdataset.DataAwsccDatabrewDatasetFormatOptions {

}
```


### DataAwsccDatabrewDatasetFormatOptionsCsv <a name="DataAwsccDatabrewDatasetFormatOptionsCsv" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsv.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

&dataawsccdatabrewdataset.DataAwsccDatabrewDatasetFormatOptionsCsv {

}
```


### DataAwsccDatabrewDatasetFormatOptionsExcel <a name="DataAwsccDatabrewDatasetFormatOptionsExcel" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

&dataawsccdatabrewdataset.DataAwsccDatabrewDatasetFormatOptionsExcel {

}
```


### DataAwsccDatabrewDatasetFormatOptionsJson <a name="DataAwsccDatabrewDatasetFormatOptionsJson" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJson.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

&dataawsccdatabrewdataset.DataAwsccDatabrewDatasetFormatOptionsJson {

}
```


### DataAwsccDatabrewDatasetInput <a name="DataAwsccDatabrewDatasetInput" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

&dataawsccdatabrewdataset.DataAwsccDatabrewDatasetInput {

}
```


### DataAwsccDatabrewDatasetInputDatabaseInputDefinition <a name="DataAwsccDatabrewDatasetInputDatabaseInputDefinition" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

&dataawsccdatabrewdataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinition {

}
```


### DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectory <a name="DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectory" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectory.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

&dataawsccdatabrewdataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectory {

}
```


### DataAwsccDatabrewDatasetInputDataCatalogInputDefinition <a name="DataAwsccDatabrewDatasetInputDataCatalogInputDefinition" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

&dataawsccdatabrewdataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinition {

}
```


### DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectory <a name="DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectory" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectory.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

&dataawsccdatabrewdataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectory {

}
```


### DataAwsccDatabrewDatasetInputMetadata <a name="DataAwsccDatabrewDatasetInputMetadata" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

&dataawsccdatabrewdataset.DataAwsccDatabrewDatasetInputMetadata {

}
```


### DataAwsccDatabrewDatasetInputS3InputDefinition <a name="DataAwsccDatabrewDatasetInputS3InputDefinition" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

&dataawsccdatabrewdataset.DataAwsccDatabrewDatasetInputS3InputDefinition {

}
```


### DataAwsccDatabrewDatasetPathOptions <a name="DataAwsccDatabrewDatasetPathOptions" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

&dataawsccdatabrewdataset.DataAwsccDatabrewDatasetPathOptions {

}
```


### DataAwsccDatabrewDatasetPathOptionsFilesLimit <a name="DataAwsccDatabrewDatasetPathOptionsFilesLimit" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimit.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

&dataawsccdatabrewdataset.DataAwsccDatabrewDatasetPathOptionsFilesLimit {

}
```


### DataAwsccDatabrewDatasetPathOptionsLastModifiedDateCondition <a name="DataAwsccDatabrewDatasetPathOptionsLastModifiedDateCondition" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

&dataawsccdatabrewdataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateCondition {

}
```


### DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap <a name="DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

&dataawsccdatabrewdataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap {

}
```


### DataAwsccDatabrewDatasetPathOptionsParameters <a name="DataAwsccDatabrewDatasetPathOptionsParameters" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

&dataawsccdatabrewdataset.DataAwsccDatabrewDatasetPathOptionsParameters {

}
```


### DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameter <a name="DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameter" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

&dataawsccdatabrewdataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameter {

}
```


### DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions <a name="DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

&dataawsccdatabrewdataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions {

}
```


### DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilter <a name="DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilter" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

&dataawsccdatabrewdataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilter {

}
```


### DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap <a name="DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

&dataawsccdatabrewdataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap {

}
```


### DataAwsccDatabrewDatasetTags <a name="DataAwsccDatabrewDatasetTags" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

&dataawsccdatabrewdataset.DataAwsccDatabrewDatasetTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference <a name="DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

dataawsccdatabrewdataset.NewDataAwsccDatabrewDatasetFormatOptionsCsvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.property.delimiter">Delimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.property.headerRow">HeaderRow</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsv">DataAwsccDatabrewDatasetFormatOptionsCsv</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.property.delimiter"></a>

```go
func Delimiter() *string
```

- *Type:* *string

---

##### `HeaderRow`<sup>Required</sup> <a name="HeaderRow" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.property.headerRow"></a>

```go
func HeaderRow() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewDatasetFormatOptionsCsv
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsv">DataAwsccDatabrewDatasetFormatOptionsCsv</a>

---


### DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference <a name="DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

dataawsccdatabrewdataset.NewDataAwsccDatabrewDatasetFormatOptionsExcelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.property.headerRow">HeaderRow</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.property.sheetIndexes">SheetIndexes</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.property.sheetNames">SheetNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcel">DataAwsccDatabrewDatasetFormatOptionsExcel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderRow`<sup>Required</sup> <a name="HeaderRow" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.property.headerRow"></a>

```go
func HeaderRow() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SheetIndexes`<sup>Required</sup> <a name="SheetIndexes" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.property.sheetIndexes"></a>

```go
func SheetIndexes() *[]*f64
```

- *Type:* *[]*f64

---

##### `SheetNames`<sup>Required</sup> <a name="SheetNames" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.property.sheetNames"></a>

```go
func SheetNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewDatasetFormatOptionsExcel
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcel">DataAwsccDatabrewDatasetFormatOptionsExcel</a>

---


### DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference <a name="DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

dataawsccdatabrewdataset.NewDataAwsccDatabrewDatasetFormatOptionsJsonOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.property.multiLine">MultiLine</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJson">DataAwsccDatabrewDatasetFormatOptionsJson</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MultiLine`<sup>Required</sup> <a name="MultiLine" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.property.multiLine"></a>

```go
func MultiLine() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewDatasetFormatOptionsJson
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJson">DataAwsccDatabrewDatasetFormatOptionsJson</a>

---


### DataAwsccDatabrewDatasetFormatOptionsOutputReference <a name="DataAwsccDatabrewDatasetFormatOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

dataawsccdatabrewdataset.NewDataAwsccDatabrewDatasetFormatOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewDatasetFormatOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.property.csv">Csv</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference">DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.property.excel">Excel</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference">DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.property.json">Json</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference">DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptions">DataAwsccDatabrewDatasetFormatOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Csv`<sup>Required</sup> <a name="Csv" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.property.csv"></a>

```go
func Csv() DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference">DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference</a>

---

##### `Excel`<sup>Required</sup> <a name="Excel" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.property.excel"></a>

```go
func Excel() DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference">DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference</a>

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.property.json"></a>

```go
func Json() DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference">DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewDatasetFormatOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetFormatOptions">DataAwsccDatabrewDatasetFormatOptions</a>

---


### DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference <a name="DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

dataawsccdatabrewdataset.NewDataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.databaseTableName">DatabaseTableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.glueConnectionName">GlueConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.queryString">QueryString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.tempDirectory">TempDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference">DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinition">DataAwsccDatabrewDatasetInputDatabaseInputDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseTableName`<sup>Required</sup> <a name="DatabaseTableName" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.databaseTableName"></a>

```go
func DatabaseTableName() *string
```

- *Type:* *string

---

##### `GlueConnectionName`<sup>Required</sup> <a name="GlueConnectionName" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.glueConnectionName"></a>

```go
func GlueConnectionName() *string
```

- *Type:* *string

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.queryString"></a>

```go
func QueryString() *string
```

- *Type:* *string

---

##### `TempDirectory`<sup>Required</sup> <a name="TempDirectory" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.tempDirectory"></a>

```go
func TempDirectory() DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference">DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewDatasetInputDatabaseInputDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinition">DataAwsccDatabrewDatasetInputDatabaseInputDefinition</a>

---


### DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference <a name="DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

dataawsccdatabrewdataset.NewDataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucketOwner">BucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectory">DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `BucketOwner`<sup>Required</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucketOwner"></a>

```go
func BucketOwner() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectory
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectory">DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectory</a>

---


### DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference <a name="DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

dataawsccdatabrewdataset.NewDataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tempDirectory">TempDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference">DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinition">DataAwsccDatabrewDatasetInputDataCatalogInputDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `TempDirectory`<sup>Required</sup> <a name="TempDirectory" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tempDirectory"></a>

```go
func TempDirectory() DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference">DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewDatasetInputDataCatalogInputDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinition">DataAwsccDatabrewDatasetInputDataCatalogInputDefinition</a>

---


### DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference <a name="DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

dataawsccdatabrewdataset.NewDataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucketOwner">BucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectory">DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `BucketOwner`<sup>Required</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucketOwner"></a>

```go
func BucketOwner() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectory
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectory">DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectory</a>

---


### DataAwsccDatabrewDatasetInputMetadataOutputReference <a name="DataAwsccDatabrewDatasetInputMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

dataawsccdatabrewdataset.NewDataAwsccDatabrewDatasetInputMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewDatasetInputMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.property.sourceArn">SourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadata">DataAwsccDatabrewDatasetInputMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceArn`<sup>Required</sup> <a name="SourceArn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.property.sourceArn"></a>

```go
func SourceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewDatasetInputMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadata">DataAwsccDatabrewDatasetInputMetadata</a>

---


### DataAwsccDatabrewDatasetInputOutputReference <a name="DataAwsccDatabrewDatasetInputOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

dataawsccdatabrewdataset.NewDataAwsccDatabrewDatasetInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewDatasetInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.property.databaseInputDefinition">DatabaseInputDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference">DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.property.dataCatalogInputDefinition">DataCatalogInputDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference">DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference">DataAwsccDatabrewDatasetInputMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.property.s3InputDefinition">S3InputDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference">DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInput">DataAwsccDatabrewDatasetInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseInputDefinition`<sup>Required</sup> <a name="DatabaseInputDefinition" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.property.databaseInputDefinition"></a>

```go
func DatabaseInputDefinition() DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference">DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference</a>

---

##### `DataCatalogInputDefinition`<sup>Required</sup> <a name="DataCatalogInputDefinition" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.property.dataCatalogInputDefinition"></a>

```go
func DataCatalogInputDefinition() DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference">DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.property.metadata"></a>

```go
func Metadata() DataAwsccDatabrewDatasetInputMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputMetadataOutputReference">DataAwsccDatabrewDatasetInputMetadataOutputReference</a>

---

##### `S3InputDefinition`<sup>Required</sup> <a name="S3InputDefinition" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.property.s3InputDefinition"></a>

```go
func S3InputDefinition() DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference">DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewDatasetInput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInput">DataAwsccDatabrewDatasetInput</a>

---


### DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference <a name="DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

dataawsccdatabrewdataset.NewDataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.property.bucketOwner">BucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinition">DataAwsccDatabrewDatasetInputS3InputDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `BucketOwner`<sup>Required</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.property.bucketOwner"></a>

```go
func BucketOwner() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewDatasetInputS3InputDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetInputS3InputDefinition">DataAwsccDatabrewDatasetInputS3InputDefinition</a>

---


### DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference <a name="DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

dataawsccdatabrewdataset.NewDataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.property.maxFiles">MaxFiles</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.property.orderedBy">OrderedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimit">DataAwsccDatabrewDatasetPathOptionsFilesLimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxFiles`<sup>Required</sup> <a name="MaxFiles" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.property.maxFiles"></a>

```go
func MaxFiles() *f64
```

- *Type:* *f64

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `OrderedBy`<sup>Required</sup> <a name="OrderedBy" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.property.orderedBy"></a>

```go
func OrderedBy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewDatasetPathOptionsFilesLimit
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimit">DataAwsccDatabrewDatasetPathOptionsFilesLimit</a>

---


### DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference <a name="DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

dataawsccdatabrewdataset.NewDataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.valuesMap">ValuesMap</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList">DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateCondition">DataAwsccDatabrewDatasetPathOptionsLastModifiedDateCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `ValuesMap`<sup>Required</sup> <a name="ValuesMap" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.valuesMap"></a>

```go
func ValuesMap() DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList">DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewDatasetPathOptionsLastModifiedDateCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateCondition">DataAwsccDatabrewDatasetPathOptionsLastModifiedDateCondition</a>

---


### DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList <a name="DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

dataawsccdatabrewdataset.NewDataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.get"></a>

```go
func Get(index *f64) DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference <a name="DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

dataawsccdatabrewdataset.NewDataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.valueReference">ValueReference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `ValueReference`<sup>Required</sup> <a name="ValueReference" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.valueReference"></a>

```go
func ValueReference() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>

---


### DataAwsccDatabrewDatasetPathOptionsOutputReference <a name="DataAwsccDatabrewDatasetPathOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

dataawsccdatabrewdataset.NewDataAwsccDatabrewDatasetPathOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewDatasetPathOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.property.filesLimit">FilesLimit</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference">DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.property.lastModifiedDateCondition">LastModifiedDateCondition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference">DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersList">DataAwsccDatabrewDatasetPathOptionsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptions">DataAwsccDatabrewDatasetPathOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilesLimit`<sup>Required</sup> <a name="FilesLimit" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.property.filesLimit"></a>

```go
func FilesLimit() DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference">DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference</a>

---

##### `LastModifiedDateCondition`<sup>Required</sup> <a name="LastModifiedDateCondition" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.property.lastModifiedDateCondition"></a>

```go
func LastModifiedDateCondition() DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference">DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference</a>

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.property.parameters"></a>

```go
func Parameters() DataAwsccDatabrewDatasetPathOptionsParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersList">DataAwsccDatabrewDatasetPathOptionsParametersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewDatasetPathOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptions">DataAwsccDatabrewDatasetPathOptions</a>

---


### DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference <a name="DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

dataawsccdatabrewdataset.NewDataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.localeCode">LocaleCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.timezoneOffset">TimezoneOffset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions">DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `LocaleCode`<sup>Required</sup> <a name="LocaleCode" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.localeCode"></a>

```go
func LocaleCode() *string
```

- *Type:* *string

---

##### `TimezoneOffset`<sup>Required</sup> <a name="TimezoneOffset" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.timezoneOffset"></a>

```go
func TimezoneOffset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions">DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions</a>

---


### DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference <a name="DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

dataawsccdatabrewdataset.NewDataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.valuesMap">ValuesMap</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList">DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilter">DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `ValuesMap`<sup>Required</sup> <a name="ValuesMap" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.valuesMap"></a>

```go
func ValuesMap() DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList">DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilter">DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilter</a>

---


### DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList <a name="DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

dataawsccdatabrewdataset.NewDataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.get"></a>

```go
func Get(index *f64) DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference <a name="DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

dataawsccdatabrewdataset.NewDataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.valueReference">ValueReference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `ValueReference`<sup>Required</sup> <a name="ValueReference" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.valueReference"></a>

```go
func ValueReference() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>

---


### DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference <a name="DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

dataawsccdatabrewdataset.NewDataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.createColumn">CreateColumn</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.datetimeOptions">DatetimeOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference">DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference">DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameter">DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateColumn`<sup>Required</sup> <a name="CreateColumn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.createColumn"></a>

```go
func CreateColumn() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `DatetimeOptions`<sup>Required</sup> <a name="DatetimeOptions" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.datetimeOptions"></a>

```go
func DatetimeOptions() DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference">DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.filter"></a>

```go
func Filter() DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference">DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameter
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameter">DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameter</a>

---


### DataAwsccDatabrewDatasetPathOptionsParametersList <a name="DataAwsccDatabrewDatasetPathOptionsParametersList" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

dataawsccdatabrewdataset.NewDataAwsccDatabrewDatasetPathOptionsParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatabrewDatasetPathOptionsParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersList.get"></a>

```go
func Get(index *f64) DataAwsccDatabrewDatasetPathOptionsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatabrewDatasetPathOptionsParametersOutputReference <a name="DataAwsccDatabrewDatasetPathOptionsParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

dataawsccdatabrewdataset.NewDataAwsccDatabrewDatasetPathOptionsParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatabrewDatasetPathOptionsParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.property.datasetParameter">DatasetParameter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference">DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.property.pathParameterName">PathParameterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParameters">DataAwsccDatabrewDatasetPathOptionsParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetParameter`<sup>Required</sup> <a name="DatasetParameter" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.property.datasetParameter"></a>

```go
func DatasetParameter() DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference">DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference</a>

---

##### `PathParameterName`<sup>Required</sup> <a name="PathParameterName" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.property.pathParameterName"></a>

```go
func PathParameterName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewDatasetPathOptionsParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetPathOptionsParameters">DataAwsccDatabrewDatasetPathOptionsParameters</a>

---


### DataAwsccDatabrewDatasetTagsList <a name="DataAwsccDatabrewDatasetTagsList" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

dataawsccdatabrewdataset.NewDataAwsccDatabrewDatasetTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatabrewDatasetTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsList.get"></a>

```go
func Get(index *f64) DataAwsccDatabrewDatasetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatabrewDatasetTagsOutputReference <a name="DataAwsccDatabrewDatasetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewdataset"

dataawsccdatabrewdataset.NewDataAwsccDatabrewDatasetTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatabrewDatasetTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTags">DataAwsccDatabrewDatasetTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewDatasetTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewDataset.DataAwsccDatabrewDatasetTags">DataAwsccDatabrewDatasetTags</a>

---



