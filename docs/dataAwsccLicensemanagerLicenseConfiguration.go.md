# `dataAwsccLicensemanagerLicenseConfiguration` Submodule <a name="`dataAwsccLicensemanagerLicenseConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLicensemanagerLicenseConfiguration <a name="DataAwsccLicensemanagerLicenseConfiguration" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/licensemanager_license_configuration awscc_licensemanager_license_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclicensemanagerlicenseconfiguration"

dataawscclicensemanagerlicenseconfiguration.NewDataAwsccLicensemanagerLicenseConfiguration(scope Construct, id *string, config DataAwsccLicensemanagerLicenseConfigurationConfig) DataAwsccLicensemanagerLicenseConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig">DataAwsccLicensemanagerLicenseConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig">DataAwsccLicensemanagerLicenseConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLicensemanagerLicenseConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclicensemanagerlicenseconfiguration"

dataawscclicensemanagerlicenseconfiguration.DataAwsccLicensemanagerLicenseConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclicensemanagerlicenseconfiguration"

dataawscclicensemanagerlicenseconfiguration.DataAwsccLicensemanagerLicenseConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclicensemanagerlicenseconfiguration"

dataawscclicensemanagerlicenseconfiguration.DataAwsccLicensemanagerLicenseConfiguration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclicensemanagerlicenseconfiguration"

dataawscclicensemanagerlicenseconfiguration.DataAwsccLicensemanagerLicenseConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccLicensemanagerLicenseConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccLicensemanagerLicenseConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccLicensemanagerLicenseConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/licensemanager_license_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLicensemanagerLicenseConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.disassociateWhenNotFound">DisassociateWhenNotFound</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.licenseConfigurationArn">LicenseConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.licenseConfigurationId">LicenseConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.licenseCount">LicenseCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.licenseCountHardLimit">LicenseCountHardLimit</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.licenseCountingType">LicenseCountingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.licenseExpiry">LicenseExpiry</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.licenseRules">LicenseRules</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.ownerAccountId">OwnerAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.productInformationList">ProductInformationList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList">DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList">DataAwsccLicensemanagerLicenseConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisassociateWhenNotFound`<sup>Required</sup> <a name="DisassociateWhenNotFound" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.disassociateWhenNotFound"></a>

```go
func DisassociateWhenNotFound() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LicenseConfigurationArn`<sup>Required</sup> <a name="LicenseConfigurationArn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.licenseConfigurationArn"></a>

```go
func LicenseConfigurationArn() *string
```

- *Type:* *string

---

##### `LicenseConfigurationId`<sup>Required</sup> <a name="LicenseConfigurationId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.licenseConfigurationId"></a>

```go
func LicenseConfigurationId() *string
```

- *Type:* *string

---

##### `LicenseCount`<sup>Required</sup> <a name="LicenseCount" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.licenseCount"></a>

```go
func LicenseCount() *f64
```

- *Type:* *f64

---

##### `LicenseCountHardLimit`<sup>Required</sup> <a name="LicenseCountHardLimit" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.licenseCountHardLimit"></a>

```go
func LicenseCountHardLimit() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LicenseCountingType`<sup>Required</sup> <a name="LicenseCountingType" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.licenseCountingType"></a>

```go
func LicenseCountingType() *string
```

- *Type:* *string

---

##### `LicenseExpiry`<sup>Required</sup> <a name="LicenseExpiry" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.licenseExpiry"></a>

```go
func LicenseExpiry() *f64
```

- *Type:* *f64

---

##### `LicenseRules`<sup>Required</sup> <a name="LicenseRules" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.licenseRules"></a>

```go
func LicenseRules() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OwnerAccountId`<sup>Required</sup> <a name="OwnerAccountId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.ownerAccountId"></a>

```go
func OwnerAccountId() *string
```

- *Type:* *string

---

##### `ProductInformationList`<sup>Required</sup> <a name="ProductInformationList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.productInformationList"></a>

```go
func ProductInformationList() DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList">DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.tags"></a>

```go
func Tags() DataAwsccLicensemanagerLicenseConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList">DataAwsccLicensemanagerLicenseConfigurationTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLicensemanagerLicenseConfigurationConfig <a name="DataAwsccLicensemanagerLicenseConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclicensemanagerlicenseconfiguration"

&dataawscclicensemanagerlicenseconfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/licensemanager_license_configuration#id DataAwsccLicensemanagerLicenseConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct <a name="DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclicensemanagerlicenseconfiguration"

&dataawscclicensemanagerlicenseconfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct {

}
```


### DataAwsccLicensemanagerLicenseConfigurationProductInformationListStruct <a name="DataAwsccLicensemanagerLicenseConfigurationProductInformationListStruct" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclicensemanagerlicenseconfiguration"

&dataawscclicensemanagerlicenseconfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStruct {

}
```


### DataAwsccLicensemanagerLicenseConfigurationTags <a name="DataAwsccLicensemanagerLicenseConfigurationTags" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclicensemanagerlicenseconfiguration"

&dataawscclicensemanagerlicenseconfiguration.DataAwsccLicensemanagerLicenseConfigurationTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList <a name="DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclicensemanagerlicenseconfiguration"

dataawscclicensemanagerlicenseconfiguration.NewDataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.get"></a>

```go
func Get(index *f64) DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference <a name="DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclicensemanagerlicenseconfiguration"

dataawscclicensemanagerlicenseconfiguration.NewDataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterComparator">ProductInformationFilterComparator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterName">ProductInformationFilterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterValue">ProductInformationFilterValue</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct">DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProductInformationFilterComparator`<sup>Required</sup> <a name="ProductInformationFilterComparator" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterComparator"></a>

```go
func ProductInformationFilterComparator() *string
```

- *Type:* *string

---

##### `ProductInformationFilterName`<sup>Required</sup> <a name="ProductInformationFilterName" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterName"></a>

```go
func ProductInformationFilterName() *string
```

- *Type:* *string

---

##### `ProductInformationFilterValue`<sup>Required</sup> <a name="ProductInformationFilterValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterValue"></a>

```go
func ProductInformationFilterValue() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct">DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct</a>

---


### DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList <a name="DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclicensemanagerlicenseconfiguration"

dataawscclicensemanagerlicenseconfiguration.NewDataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.get"></a>

```go
func Get(index *f64) DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference <a name="DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclicensemanagerlicenseconfiguration"

dataawscclicensemanagerlicenseconfiguration.NewDataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.productInformationFilterList">ProductInformationFilterList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList">DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStruct">DataAwsccLicensemanagerLicenseConfigurationProductInformationListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProductInformationFilterList`<sup>Required</sup> <a name="ProductInformationFilterList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.productInformationFilterList"></a>

```go
func ProductInformationFilterList() DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList">DataAwsccLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList</a>

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLicensemanagerLicenseConfigurationProductInformationListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationProductInformationListStruct">DataAwsccLicensemanagerLicenseConfigurationProductInformationListStruct</a>

---


### DataAwsccLicensemanagerLicenseConfigurationTagsList <a name="DataAwsccLicensemanagerLicenseConfigurationTagsList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclicensemanagerlicenseconfiguration"

dataawscclicensemanagerlicenseconfiguration.NewDataAwsccLicensemanagerLicenseConfigurationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLicensemanagerLicenseConfigurationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.get"></a>

```go
func Get(index *f64) DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference <a name="DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclicensemanagerlicenseconfiguration"

dataawscclicensemanagerlicenseconfiguration.NewDataAwsccLicensemanagerLicenseConfigurationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTags">DataAwsccLicensemanagerLicenseConfigurationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLicensemanagerLicenseConfigurationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseConfiguration.DataAwsccLicensemanagerLicenseConfigurationTags">DataAwsccLicensemanagerLicenseConfigurationTags</a>

---



