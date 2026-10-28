# `dataAwsccStoragegatewaySmbFileShare` Submodule <a name="`dataAwsccStoragegatewaySmbFileShare` Submodule" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccStoragegatewaySmbFileShare <a name="DataAwsccStoragegatewaySmbFileShare" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/storagegateway_smb_file_share awscc_storagegateway_smb_file_share}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccstoragegatewaysmbfileshare"

dataawsccstoragegatewaysmbfileshare.NewDataAwsccStoragegatewaySmbFileShare(scope Construct, id *string, config DataAwsccStoragegatewaySmbFileShareConfig) DataAwsccStoragegatewaySmbFileShare
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig">DataAwsccStoragegatewaySmbFileShareConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig">DataAwsccStoragegatewaySmbFileShareConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccStoragegatewaySmbFileShare resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccstoragegatewaysmbfileshare"

dataawsccstoragegatewaysmbfileshare.DataAwsccStoragegatewaySmbFileShare_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccstoragegatewaysmbfileshare"

dataawsccstoragegatewaysmbfileshare.DataAwsccStoragegatewaySmbFileShare_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccstoragegatewaysmbfileshare"

dataawsccstoragegatewaysmbfileshare.DataAwsccStoragegatewaySmbFileShare_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccstoragegatewaysmbfileshare"

dataawsccstoragegatewaysmbfileshare.DataAwsccStoragegatewaySmbFileShare_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccStoragegatewaySmbFileShare resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccStoragegatewaySmbFileShare to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccStoragegatewaySmbFileShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/storagegateway_smb_file_share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccStoragegatewaySmbFileShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.accessBasedEnumeration">AccessBasedEnumeration</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.adminUserList">AdminUserList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.auditDestinationArn">AuditDestinationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.authentication">Authentication</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.bucketRegion">BucketRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.cacheAttributes">CacheAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference">DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.caseSensitivity">CaseSensitivity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.defaultStorageClass">DefaultStorageClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.fileShareArn">FileShareArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.fileShareId">FileShareId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.fileShareName">FileShareName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.fileShareStatus">FileShareStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.gatewayArn">GatewayArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.guessMimeTypeEnabled">GuessMimeTypeEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.invalidUserList">InvalidUserList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.kmsEncrypted">KmsEncrypted</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.locationArn">LocationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.notificationPolicy">NotificationPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.objectAcl">ObjectAcl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.oplocksEnabled">OplocksEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.readOnly">ReadOnly</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.requesterPays">RequesterPays</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.smbaclEnabled">SmbaclEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList">DataAwsccStoragegatewaySmbFileShareTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.validUserList">ValidUserList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.vpcEndpointDnsName">VpcEndpointDnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AccessBasedEnumeration`<sup>Required</sup> <a name="AccessBasedEnumeration" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.accessBasedEnumeration"></a>

```go
func AccessBasedEnumeration() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `AdminUserList`<sup>Required</sup> <a name="AdminUserList" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.adminUserList"></a>

```go
func AdminUserList() *[]*string
```

- *Type:* *[]*string

---

##### `AuditDestinationArn`<sup>Required</sup> <a name="AuditDestinationArn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.auditDestinationArn"></a>

```go
func AuditDestinationArn() *string
```

- *Type:* *string

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.authentication"></a>

```go
func Authentication() *string
```

- *Type:* *string

---

##### `BucketRegion`<sup>Required</sup> <a name="BucketRegion" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.bucketRegion"></a>

```go
func BucketRegion() *string
```

- *Type:* *string

---

##### `CacheAttributes`<sup>Required</sup> <a name="CacheAttributes" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.cacheAttributes"></a>

```go
func CacheAttributes() DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference">DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference</a>

---

##### `CaseSensitivity`<sup>Required</sup> <a name="CaseSensitivity" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.caseSensitivity"></a>

```go
func CaseSensitivity() *string
```

- *Type:* *string

---

##### `DefaultStorageClass`<sup>Required</sup> <a name="DefaultStorageClass" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.defaultStorageClass"></a>

```go
func DefaultStorageClass() *string
```

- *Type:* *string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `FileShareArn`<sup>Required</sup> <a name="FileShareArn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.fileShareArn"></a>

```go
func FileShareArn() *string
```

- *Type:* *string

---

##### `FileShareId`<sup>Required</sup> <a name="FileShareId" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.fileShareId"></a>

```go
func FileShareId() *string
```

- *Type:* *string

---

##### `FileShareName`<sup>Required</sup> <a name="FileShareName" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.fileShareName"></a>

```go
func FileShareName() *string
```

- *Type:* *string

---

##### `FileShareStatus`<sup>Required</sup> <a name="FileShareStatus" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.fileShareStatus"></a>

```go
func FileShareStatus() *string
```

- *Type:* *string

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.gatewayArn"></a>

```go
func GatewayArn() *string
```

- *Type:* *string

---

##### `GuessMimeTypeEnabled`<sup>Required</sup> <a name="GuessMimeTypeEnabled" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.guessMimeTypeEnabled"></a>

```go
func GuessMimeTypeEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InvalidUserList`<sup>Required</sup> <a name="InvalidUserList" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.invalidUserList"></a>

```go
func InvalidUserList() *[]*string
```

- *Type:* *[]*string

---

##### `KmsEncrypted`<sup>Required</sup> <a name="KmsEncrypted" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.kmsEncrypted"></a>

```go
func KmsEncrypted() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `LocationArn`<sup>Required</sup> <a name="LocationArn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.locationArn"></a>

```go
func LocationArn() *string
```

- *Type:* *string

---

##### `NotificationPolicy`<sup>Required</sup> <a name="NotificationPolicy" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.notificationPolicy"></a>

```go
func NotificationPolicy() *string
```

- *Type:* *string

---

##### `ObjectAcl`<sup>Required</sup> <a name="ObjectAcl" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.objectAcl"></a>

```go
func ObjectAcl() *string
```

- *Type:* *string

---

##### `OplocksEnabled`<sup>Required</sup> <a name="OplocksEnabled" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.oplocksEnabled"></a>

```go
func OplocksEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.readOnly"></a>

```go
func ReadOnly() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RequesterPays`<sup>Required</sup> <a name="RequesterPays" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.requesterPays"></a>

```go
func RequesterPays() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `SmbaclEnabled`<sup>Required</sup> <a name="SmbaclEnabled" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.smbaclEnabled"></a>

```go
func SmbaclEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.tags"></a>

```go
func Tags() DataAwsccStoragegatewaySmbFileShareTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList">DataAwsccStoragegatewaySmbFileShareTagsList</a>

---

##### `ValidUserList`<sup>Required</sup> <a name="ValidUserList" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.validUserList"></a>

```go
func ValidUserList() *[]*string
```

- *Type:* *[]*string

---

##### `VpcEndpointDnsName`<sup>Required</sup> <a name="VpcEndpointDnsName" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.vpcEndpointDnsName"></a>

```go
func VpcEndpointDnsName() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccStoragegatewaySmbFileShareCacheAttributes <a name="DataAwsccStoragegatewaySmbFileShareCacheAttributes" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccstoragegatewaysmbfileshare"

&dataawsccstoragegatewaysmbfileshare.DataAwsccStoragegatewaySmbFileShareCacheAttributes {

}
```


### DataAwsccStoragegatewaySmbFileShareConfig <a name="DataAwsccStoragegatewaySmbFileShareConfig" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccstoragegatewaysmbfileshare"

&dataawsccstoragegatewaysmbfileshare.DataAwsccStoragegatewaySmbFileShareConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/storagegateway_smb_file_share#id DataAwsccStoragegatewaySmbFileShare#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccStoragegatewaySmbFileShareTags <a name="DataAwsccStoragegatewaySmbFileShareTags" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccstoragegatewaysmbfileshare"

&dataawsccstoragegatewaysmbfileshare.DataAwsccStoragegatewaySmbFileShareTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference <a name="DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccstoragegatewaysmbfileshare"

dataawsccstoragegatewaysmbfileshare.NewDataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds">CacheStaleTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributes">DataAwsccStoragegatewaySmbFileShareCacheAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CacheStaleTimeoutInSeconds`<sup>Required</sup> <a name="CacheStaleTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds"></a>

```go
func CacheStaleTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccStoragegatewaySmbFileShareCacheAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributes">DataAwsccStoragegatewaySmbFileShareCacheAttributes</a>

---


### DataAwsccStoragegatewaySmbFileShareTagsList <a name="DataAwsccStoragegatewaySmbFileShareTagsList" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccstoragegatewaysmbfileshare"

dataawsccstoragegatewaysmbfileshare.NewDataAwsccStoragegatewaySmbFileShareTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccStoragegatewaySmbFileShareTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.get"></a>

```go
func Get(index *f64) DataAwsccStoragegatewaySmbFileShareTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccStoragegatewaySmbFileShareTagsOutputReference <a name="DataAwsccStoragegatewaySmbFileShareTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccstoragegatewaysmbfileshare"

dataawsccstoragegatewaysmbfileshare.NewDataAwsccStoragegatewaySmbFileShareTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccStoragegatewaySmbFileShareTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTags">DataAwsccStoragegatewaySmbFileShareTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccStoragegatewaySmbFileShareTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTags">DataAwsccStoragegatewaySmbFileShareTags</a>

---



