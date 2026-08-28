# `dataAwsccDatasyncLocationAzureBlob` Submodule <a name="`dataAwsccDatasyncLocationAzureBlob` Submodule" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatasyncLocationAzureBlob <a name="DataAwsccDatasyncLocationAzureBlob" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/datasync_location_azure_blob awscc_datasync_location_azure_blob}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationazureblob"

dataawsccdatasynclocationazureblob.NewDataAwsccDatasyncLocationAzureBlob(scope Construct, id *string, config DataAwsccDatasyncLocationAzureBlobConfig) DataAwsccDatasyncLocationAzureBlob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig">DataAwsccDatasyncLocationAzureBlobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig">DataAwsccDatasyncLocationAzureBlobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDatasyncLocationAzureBlob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationazureblob"

dataawsccdatasynclocationazureblob.DataAwsccDatasyncLocationAzureBlob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationazureblob"

dataawsccdatasynclocationazureblob.DataAwsccDatasyncLocationAzureBlob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationazureblob"

dataawsccdatasynclocationazureblob.DataAwsccDatasyncLocationAzureBlob_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationazureblob"

dataawsccdatasynclocationazureblob.DataAwsccDatasyncLocationAzureBlob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccDatasyncLocationAzureBlob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccDatasyncLocationAzureBlob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccDatasyncLocationAzureBlob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/datasync_location_azure_blob#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatasyncLocationAzureBlob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.agentArns">AgentArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.azureAccessTier">AzureAccessTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.azureBlobAuthenticationType">AzureBlobAuthenticationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.azureBlobContainerUrl">AzureBlobContainerUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.azureBlobSasConfiguration">AzureBlobSasConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference">DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.azureBlobType">AzureBlobType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.cmkSecretConfig">CmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference">DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.customSecretConfig">CustomSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference">DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.locationArn">LocationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.locationUri">LocationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.managedSecretConfig">ManagedSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference">DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.subdirectory">Subdirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList">DataAwsccDatasyncLocationAzureBlobTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AgentArns`<sup>Required</sup> <a name="AgentArns" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.agentArns"></a>

```go
func AgentArns() *[]*string
```

- *Type:* *[]*string

---

##### `AzureAccessTier`<sup>Required</sup> <a name="AzureAccessTier" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.azureAccessTier"></a>

```go
func AzureAccessTier() *string
```

- *Type:* *string

---

##### `AzureBlobAuthenticationType`<sup>Required</sup> <a name="AzureBlobAuthenticationType" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.azureBlobAuthenticationType"></a>

```go
func AzureBlobAuthenticationType() *string
```

- *Type:* *string

---

##### `AzureBlobContainerUrl`<sup>Required</sup> <a name="AzureBlobContainerUrl" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.azureBlobContainerUrl"></a>

```go
func AzureBlobContainerUrl() *string
```

- *Type:* *string

---

##### `AzureBlobSasConfiguration`<sup>Required</sup> <a name="AzureBlobSasConfiguration" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.azureBlobSasConfiguration"></a>

```go
func AzureBlobSasConfiguration() DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference">DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference</a>

---

##### `AzureBlobType`<sup>Required</sup> <a name="AzureBlobType" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.azureBlobType"></a>

```go
func AzureBlobType() *string
```

- *Type:* *string

---

##### `CmkSecretConfig`<sup>Required</sup> <a name="CmkSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.cmkSecretConfig"></a>

```go
func CmkSecretConfig() DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference">DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference</a>

---

##### `CustomSecretConfig`<sup>Required</sup> <a name="CustomSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.customSecretConfig"></a>

```go
func CustomSecretConfig() DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference">DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference</a>

---

##### `LocationArn`<sup>Required</sup> <a name="LocationArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.locationArn"></a>

```go
func LocationArn() *string
```

- *Type:* *string

---

##### `LocationUri`<sup>Required</sup> <a name="LocationUri" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.locationUri"></a>

```go
func LocationUri() *string
```

- *Type:* *string

---

##### `ManagedSecretConfig`<sup>Required</sup> <a name="ManagedSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.managedSecretConfig"></a>

```go
func ManagedSecretConfig() DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference">DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference</a>

---

##### `Subdirectory`<sup>Required</sup> <a name="Subdirectory" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.subdirectory"></a>

```go
func Subdirectory() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.tags"></a>

```go
func Tags() DataAwsccDatasyncLocationAzureBlobTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList">DataAwsccDatasyncLocationAzureBlobTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration <a name="DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationazureblob"

&dataawsccdatasynclocationazureblob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration {

}
```


### DataAwsccDatasyncLocationAzureBlobCmkSecretConfig <a name="DataAwsccDatasyncLocationAzureBlobCmkSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationazureblob"

&dataawsccdatasynclocationazureblob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfig {

}
```


### DataAwsccDatasyncLocationAzureBlobConfig <a name="DataAwsccDatasyncLocationAzureBlobConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationazureblob"

&dataawsccdatasynclocationazureblob.DataAwsccDatasyncLocationAzureBlobConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/datasync_location_azure_blob#id DataAwsccDatasyncLocationAzureBlob#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatasyncLocationAzureBlobCustomSecretConfig <a name="DataAwsccDatasyncLocationAzureBlobCustomSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationazureblob"

&dataawsccdatasynclocationazureblob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfig {

}
```


### DataAwsccDatasyncLocationAzureBlobManagedSecretConfig <a name="DataAwsccDatasyncLocationAzureBlobManagedSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationazureblob"

&dataawsccdatasynclocationazureblob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfig {

}
```


### DataAwsccDatasyncLocationAzureBlobTags <a name="DataAwsccDatasyncLocationAzureBlobTags" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationazureblob"

&dataawsccdatasynclocationazureblob.DataAwsccDatasyncLocationAzureBlobTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference <a name="DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationazureblob"

dataawsccdatasynclocationazureblob.NewDataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.azureBlobSasToken">AzureBlobSasToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration">DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AzureBlobSasToken`<sup>Required</sup> <a name="AzureBlobSasToken" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.azureBlobSasToken"></a>

```go
func AzureBlobSasToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration">DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration</a>

---


### DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference <a name="DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationazureblob"

dataawsccdatasynclocationazureblob.NewDataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfig">DataAwsccDatasyncLocationAzureBlobCmkSecretConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatasyncLocationAzureBlobCmkSecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfig">DataAwsccDatasyncLocationAzureBlobCmkSecretConfig</a>

---


### DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference <a name="DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationazureblob"

dataawsccdatasynclocationazureblob.NewDataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.secretAccessRoleArn">SecretAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfig">DataAwsccDatasyncLocationAzureBlobCustomSecretConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretAccessRoleArn`<sup>Required</sup> <a name="SecretAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.secretAccessRoleArn"></a>

```go
func SecretAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatasyncLocationAzureBlobCustomSecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfig">DataAwsccDatasyncLocationAzureBlobCustomSecretConfig</a>

---


### DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference <a name="DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationazureblob"

dataawsccdatasynclocationazureblob.NewDataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfig">DataAwsccDatasyncLocationAzureBlobManagedSecretConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatasyncLocationAzureBlobManagedSecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfig">DataAwsccDatasyncLocationAzureBlobManagedSecretConfig</a>

---


### DataAwsccDatasyncLocationAzureBlobTagsList <a name="DataAwsccDatasyncLocationAzureBlobTagsList" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationazureblob"

dataawsccdatasynclocationazureblob.NewDataAwsccDatasyncLocationAzureBlobTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatasyncLocationAzureBlobTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.get"></a>

```go
func Get(index *f64) DataAwsccDatasyncLocationAzureBlobTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatasyncLocationAzureBlobTagsOutputReference <a name="DataAwsccDatasyncLocationAzureBlobTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatasynclocationazureblob"

dataawsccdatasynclocationazureblob.NewDataAwsccDatasyncLocationAzureBlobTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatasyncLocationAzureBlobTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTags">DataAwsccDatasyncLocationAzureBlobTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatasyncLocationAzureBlobTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTags">DataAwsccDatasyncLocationAzureBlobTags</a>

---



