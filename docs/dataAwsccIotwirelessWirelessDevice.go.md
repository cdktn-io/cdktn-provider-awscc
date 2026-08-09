# `dataAwsccIotwirelessWirelessDevice` Submodule <a name="`dataAwsccIotwirelessWirelessDevice` Submodule" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotwirelessWirelessDevice <a name="DataAwsccIotwirelessWirelessDevice" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iotwireless_wireless_device awscc_iotwireless_wireless_device}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdevice"

dataawscciotwirelesswirelessdevice.NewDataAwsccIotwirelessWirelessDevice(scope Construct, id *string, config DataAwsccIotwirelessWirelessDeviceConfig) DataAwsccIotwirelessWirelessDevice
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig">DataAwsccIotwirelessWirelessDeviceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig">DataAwsccIotwirelessWirelessDeviceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotwirelessWirelessDevice resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdevice"

dataawscciotwirelesswirelessdevice.DataAwsccIotwirelessWirelessDevice_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdevice"

dataawscciotwirelesswirelessdevice.DataAwsccIotwirelessWirelessDevice_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdevice"

dataawscciotwirelesswirelessdevice.DataAwsccIotwirelessWirelessDevice_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdevice"

dataawscciotwirelesswirelessdevice.DataAwsccIotwirelessWirelessDevice_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccIotwirelessWirelessDevice resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccIotwirelessWirelessDevice to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccIotwirelessWirelessDevice that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iotwireless_wireless_device#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotwirelessWirelessDevice to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.destinationName">DestinationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.lastUplinkReceivedAt">LastUplinkReceivedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.loRaWan">LoRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.positioning">Positioning</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList">DataAwsccIotwirelessWirelessDeviceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.thingArn">ThingArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.thingName">ThingName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.wirelessDeviceId">WirelessDeviceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DestinationName`<sup>Required</sup> <a name="DestinationName" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.destinationName"></a>

```go
func DestinationName() *string
```

- *Type:* *string

---

##### `LastUplinkReceivedAt`<sup>Required</sup> <a name="LastUplinkReceivedAt" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.lastUplinkReceivedAt"></a>

```go
func LastUplinkReceivedAt() *string
```

- *Type:* *string

---

##### `LoRaWan`<sup>Required</sup> <a name="LoRaWan" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.loRaWan"></a>

```go
func LoRaWan() DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Positioning`<sup>Required</sup> <a name="Positioning" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.positioning"></a>

```go
func Positioning() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.tags"></a>

```go
func Tags() DataAwsccIotwirelessWirelessDeviceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList">DataAwsccIotwirelessWirelessDeviceTagsList</a>

---

##### `ThingArn`<sup>Required</sup> <a name="ThingArn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.thingArn"></a>

```go
func ThingArn() *string
```

- *Type:* *string

---

##### `ThingName`<sup>Required</sup> <a name="ThingName" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.thingName"></a>

```go
func ThingName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `WirelessDeviceId`<sup>Required</sup> <a name="WirelessDeviceId" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.wirelessDeviceId"></a>

```go
func WirelessDeviceId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotwirelessWirelessDeviceConfig <a name="DataAwsccIotwirelessWirelessDeviceConfig" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdevice"

&dataawscciotwirelesswirelessdevice.DataAwsccIotwirelessWirelessDeviceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iotwireless_wireless_device#id DataAwsccIotwirelessWirelessDevice#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotwirelessWirelessDeviceLoRaWan <a name="DataAwsccIotwirelessWirelessDeviceLoRaWan" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWan.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdevice"

&dataawscciotwirelesswirelessdevice.DataAwsccIotwirelessWirelessDeviceLoRaWan {

}
```


### DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10X <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10X" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10X"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10X.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdevice"

&dataawscciotwirelesswirelessdevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10X {

}
```


### DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdevice"

&dataawscciotwirelesswirelessdevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys {

}
```


### DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11 <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdevice"

&dataawscciotwirelesswirelessdevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11 {

}
```


### DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdevice"

&dataawscciotwirelesswirelessdevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys {

}
```


### DataAwsccIotwirelessWirelessDeviceLoRaWanFPorts <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanFPorts" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPorts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdevice"

&dataawscciotwirelesswirelessdevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPorts {

}
```


### DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplications <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplications" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdevice"

&dataawscciotwirelesswirelessdevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplications {

}
```


### DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10X <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10X" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10X"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10X.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdevice"

&dataawscciotwirelesswirelessdevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10X {

}
```


### DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11 <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdevice"

&dataawscciotwirelesswirelessdevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11 {

}
```


### DataAwsccIotwirelessWirelessDeviceTags <a name="DataAwsccIotwirelessWirelessDeviceTags" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdevice"

&dataawscciotwirelesswirelessdevice.DataAwsccIotwirelessWirelessDeviceTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdevice"

dataawscciotwirelesswirelessdevice.NewDataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.devAddr">DevAddr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.sessionKeys">SessionKeys</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10X">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10X</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DevAddr`<sup>Required</sup> <a name="DevAddr" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.devAddr"></a>

```go
func DevAddr() *string
```

- *Type:* *string

---

##### `SessionKeys`<sup>Required</sup> <a name="SessionKeys" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.sessionKeys"></a>

```go
func SessionKeys() DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10X
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10X">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10X</a>

---


### DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdevice"

dataawscciotwirelesswirelessdevice.NewDataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.appSKey">AppSKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.nwkSKey">NwkSKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppSKey`<sup>Required</sup> <a name="AppSKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.appSKey"></a>

```go
func AppSKey() *string
```

- *Type:* *string

---

##### `NwkSKey`<sup>Required</sup> <a name="NwkSKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.nwkSKey"></a>

```go
func NwkSKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a>

---


### DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdevice"

dataawscciotwirelesswirelessdevice.NewDataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.devAddr">DevAddr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.sessionKeys">SessionKeys</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DevAddr`<sup>Required</sup> <a name="DevAddr" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.devAddr"></a>

```go
func DevAddr() *string
```

- *Type:* *string

---

##### `SessionKeys`<sup>Required</sup> <a name="SessionKeys" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.sessionKeys"></a>

```go
func SessionKeys() DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11</a>

---


### DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdevice"

dataawscciotwirelesswirelessdevice.NewDataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.appSKey">AppSKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fNwkSIntKey">FNwkSIntKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.nwkSEncKey">NwkSEncKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.sNwkSIntKey">SNwkSIntKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppSKey`<sup>Required</sup> <a name="AppSKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.appSKey"></a>

```go
func AppSKey() *string
```

- *Type:* *string

---

##### `FNwkSIntKey`<sup>Required</sup> <a name="FNwkSIntKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fNwkSIntKey"></a>

```go
func FNwkSIntKey() *string
```

- *Type:* *string

---

##### `NwkSEncKey`<sup>Required</sup> <a name="NwkSEncKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.nwkSEncKey"></a>

```go
func NwkSEncKey() *string
```

- *Type:* *string

---

##### `SNwkSIntKey`<sup>Required</sup> <a name="SNwkSIntKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.sNwkSIntKey"></a>

```go
func SNwkSIntKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a>

---


### DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdevice"

dataawscciotwirelesswirelessdevice.NewDataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.get"></a>

```go
func Get(index *f64) DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdevice"

dataawscciotwirelesswirelessdevice.NewDataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.destinationName">DestinationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fPort">FPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplications">DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationName`<sup>Required</sup> <a name="DestinationName" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.destinationName"></a>

```go
func DestinationName() *string
```

- *Type:* *string

---

##### `FPort`<sup>Required</sup> <a name="FPort" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fPort"></a>

```go
func FPort() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplications
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplications">DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplications</a>

---


### DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdevice"

dataawscciotwirelesswirelessdevice.NewDataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.applications">Applications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList">DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPorts">DataAwsccIotwirelessWirelessDeviceLoRaWanFPorts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Applications`<sup>Required</sup> <a name="Applications" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.applications"></a>

```go
func Applications() DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList">DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotwirelessWirelessDeviceLoRaWanFPorts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPorts">DataAwsccIotwirelessWirelessDeviceLoRaWanFPorts</a>

---


### DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdevice"

dataawscciotwirelesswirelessdevice.NewDataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appEui">AppEui</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appKey">AppKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10X">DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10X</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppEui`<sup>Required</sup> <a name="AppEui" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appEui"></a>

```go
func AppEui() *string
```

- *Type:* *string

---

##### `AppKey`<sup>Required</sup> <a name="AppKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appKey"></a>

```go
func AppKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10X
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10X">DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10X</a>

---


### DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdevice"

dataawscciotwirelesswirelessdevice.NewDataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.appKey">AppKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.joinEui">JoinEui</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.nwkKey">NwkKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11">DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppKey`<sup>Required</sup> <a name="AppKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.appKey"></a>

```go
func AppKey() *string
```

- *Type:* *string

---

##### `JoinEui`<sup>Required</sup> <a name="JoinEui" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.joinEui"></a>

```go
func JoinEui() *string
```

- *Type:* *string

---

##### `NwkKey`<sup>Required</sup> <a name="NwkKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.nwkKey"></a>

```go
func NwkKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11">DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11</a>

---


### DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdevice"

dataawscciotwirelesswirelessdevice.NewDataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV10X">AbpV10X</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV11">AbpV11</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.devEui">DevEui</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.deviceProfileId">DeviceProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.fPorts">FPorts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV10X">OtaaV10X</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV11">OtaaV11</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.serviceProfileId">ServiceProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWan">DataAwsccIotwirelessWirelessDeviceLoRaWan</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AbpV10X`<sup>Required</sup> <a name="AbpV10X" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV10X"></a>

```go
func AbpV10X() DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference</a>

---

##### `AbpV11`<sup>Required</sup> <a name="AbpV11" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV11"></a>

```go
func AbpV11() DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference</a>

---

##### `DevEui`<sup>Required</sup> <a name="DevEui" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.devEui"></a>

```go
func DevEui() *string
```

- *Type:* *string

---

##### `DeviceProfileId`<sup>Required</sup> <a name="DeviceProfileId" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.deviceProfileId"></a>

```go
func DeviceProfileId() *string
```

- *Type:* *string

---

##### `FPorts`<sup>Required</sup> <a name="FPorts" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.fPorts"></a>

```go
func FPorts() DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference</a>

---

##### `OtaaV10X`<sup>Required</sup> <a name="OtaaV10X" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV10X"></a>

```go
func OtaaV10X() DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference</a>

---

##### `OtaaV11`<sup>Required</sup> <a name="OtaaV11" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV11"></a>

```go
func OtaaV11() DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference</a>

---

##### `ServiceProfileId`<sup>Required</sup> <a name="ServiceProfileId" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.serviceProfileId"></a>

```go
func ServiceProfileId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotwirelessWirelessDeviceLoRaWan
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWan">DataAwsccIotwirelessWirelessDeviceLoRaWan</a>

---


### DataAwsccIotwirelessWirelessDeviceTagsList <a name="DataAwsccIotwirelessWirelessDeviceTagsList" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdevice"

dataawscciotwirelesswirelessdevice.NewDataAwsccIotwirelessWirelessDeviceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccIotwirelessWirelessDeviceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.get"></a>

```go
func Get(index *f64) DataAwsccIotwirelessWirelessDeviceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccIotwirelessWirelessDeviceTagsOutputReference <a name="DataAwsccIotwirelessWirelessDeviceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdevice"

dataawscciotwirelesswirelessdevice.NewDataAwsccIotwirelessWirelessDeviceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccIotwirelessWirelessDeviceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTags">DataAwsccIotwirelessWirelessDeviceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotwirelessWirelessDeviceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTags">DataAwsccIotwirelessWirelessDeviceTags</a>

---



