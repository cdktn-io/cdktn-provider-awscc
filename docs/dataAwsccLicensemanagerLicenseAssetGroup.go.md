# `dataAwsccLicensemanagerLicenseAssetGroup` Submodule <a name="`dataAwsccLicensemanagerLicenseAssetGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLicensemanagerLicenseAssetGroup <a name="DataAwsccLicensemanagerLicenseAssetGroup" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/licensemanager_license_asset_group awscc_licensemanager_license_asset_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetgroup"

dataawscclicensemanagerlicenseassetgroup.NewDataAwsccLicensemanagerLicenseAssetGroup(scope Construct, id *string, config DataAwsccLicensemanagerLicenseAssetGroupConfig) DataAwsccLicensemanagerLicenseAssetGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig">DataAwsccLicensemanagerLicenseAssetGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig">DataAwsccLicensemanagerLicenseAssetGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLicensemanagerLicenseAssetGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetgroup"

dataawscclicensemanagerlicenseassetgroup.DataAwsccLicensemanagerLicenseAssetGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetgroup"

dataawscclicensemanagerlicenseassetgroup.DataAwsccLicensemanagerLicenseAssetGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetgroup"

dataawscclicensemanagerlicenseassetgroup.DataAwsccLicensemanagerLicenseAssetGroup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetgroup"

dataawscclicensemanagerlicenseassetgroup.DataAwsccLicensemanagerLicenseAssetGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccLicensemanagerLicenseAssetGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccLicensemanagerLicenseAssetGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccLicensemanagerLicenseAssetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/licensemanager_license_asset_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLicensemanagerLicenseAssetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.associatedLicenseAssetRulesetArNs">AssociatedLicenseAssetRulesetArNs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.licenseAssetGroupArn">LicenseAssetGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.licenseAssetGroupConfigurations">LicenseAssetGroupConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList">DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList">DataAwsccLicensemanagerLicenseAssetGroupPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList">DataAwsccLicensemanagerLicenseAssetGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AssociatedLicenseAssetRulesetArNs`<sup>Required</sup> <a name="AssociatedLicenseAssetRulesetArNs" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.associatedLicenseAssetRulesetArNs"></a>

```go
func AssociatedLicenseAssetRulesetArNs() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `LicenseAssetGroupArn`<sup>Required</sup> <a name="LicenseAssetGroupArn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.licenseAssetGroupArn"></a>

```go
func LicenseAssetGroupArn() *string
```

- *Type:* *string

---

##### `LicenseAssetGroupConfigurations`<sup>Required</sup> <a name="LicenseAssetGroupConfigurations" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.licenseAssetGroupConfigurations"></a>

```go
func LicenseAssetGroupConfigurations() DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList">DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.properties"></a>

```go
func Properties() DataAwsccLicensemanagerLicenseAssetGroupPropertiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList">DataAwsccLicensemanagerLicenseAssetGroupPropertiesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.tags"></a>

```go
func Tags() DataAwsccLicensemanagerLicenseAssetGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList">DataAwsccLicensemanagerLicenseAssetGroupTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLicensemanagerLicenseAssetGroupConfig <a name="DataAwsccLicensemanagerLicenseAssetGroupConfig" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetgroup"

&dataawscclicensemanagerlicenseassetgroup.DataAwsccLicensemanagerLicenseAssetGroupConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/licensemanager_license_asset_group#id DataAwsccLicensemanagerLicenseAssetGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations <a name="DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetgroup"

&dataawscclicensemanagerlicenseassetgroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations {

}
```


### DataAwsccLicensemanagerLicenseAssetGroupProperties <a name="DataAwsccLicensemanagerLicenseAssetGroupProperties" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetgroup"

&dataawscclicensemanagerlicenseassetgroup.DataAwsccLicensemanagerLicenseAssetGroupProperties {

}
```


### DataAwsccLicensemanagerLicenseAssetGroupTags <a name="DataAwsccLicensemanagerLicenseAssetGroupTags" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetgroup"

&dataawscclicensemanagerlicenseassetgroup.DataAwsccLicensemanagerLicenseAssetGroupTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList <a name="DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetgroup"

dataawscclicensemanagerlicenseassetgroup.NewDataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.get"></a>

```go
func Get(index *f64) DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference <a name="DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetgroup"

dataawscclicensemanagerlicenseassetgroup.NewDataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.usageDimension">UsageDimension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UsageDimension`<sup>Required</sup> <a name="UsageDimension" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.usageDimension"></a>

```go
func UsageDimension() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>

---


### DataAwsccLicensemanagerLicenseAssetGroupPropertiesList <a name="DataAwsccLicensemanagerLicenseAssetGroupPropertiesList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetgroup"

dataawscclicensemanagerlicenseassetgroup.NewDataAwsccLicensemanagerLicenseAssetGroupPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLicensemanagerLicenseAssetGroupPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.get"></a>

```go
func Get(index *f64) DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference <a name="DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetgroup"

dataawscclicensemanagerlicenseassetgroup.NewDataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupProperties">DataAwsccLicensemanagerLicenseAssetGroupProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLicensemanagerLicenseAssetGroupProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupProperties">DataAwsccLicensemanagerLicenseAssetGroupProperties</a>

---


### DataAwsccLicensemanagerLicenseAssetGroupTagsList <a name="DataAwsccLicensemanagerLicenseAssetGroupTagsList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetgroup"

dataawscclicensemanagerlicenseassetgroup.NewDataAwsccLicensemanagerLicenseAssetGroupTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLicensemanagerLicenseAssetGroupTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.get"></a>

```go
func Get(index *f64) DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference <a name="DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetgroup"

dataawscclicensemanagerlicenseassetgroup.NewDataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTags">DataAwsccLicensemanagerLicenseAssetGroupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLicensemanagerLicenseAssetGroupTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTags">DataAwsccLicensemanagerLicenseAssetGroupTags</a>

---



