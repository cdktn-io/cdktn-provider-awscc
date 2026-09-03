# `dataAwsccIotwirelessWirelessDeviceImportTask` Submodule <a name="`dataAwsccIotwirelessWirelessDeviceImportTask` Submodule" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotwirelessWirelessDeviceImportTask <a name="DataAwsccIotwirelessWirelessDeviceImportTask" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/iotwireless_wireless_device_import_task awscc_iotwireless_wireless_device_import_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdeviceimporttask"

dataawscciotwirelesswirelessdeviceimporttask.NewDataAwsccIotwirelessWirelessDeviceImportTask(scope Construct, id *string, config DataAwsccIotwirelessWirelessDeviceImportTaskConfig) DataAwsccIotwirelessWirelessDeviceImportTask
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig">DataAwsccIotwirelessWirelessDeviceImportTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig">DataAwsccIotwirelessWirelessDeviceImportTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotwirelessWirelessDeviceImportTask resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdeviceimporttask"

dataawscciotwirelesswirelessdeviceimporttask.DataAwsccIotwirelessWirelessDeviceImportTask_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdeviceimporttask"

dataawscciotwirelesswirelessdeviceimporttask.DataAwsccIotwirelessWirelessDeviceImportTask_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdeviceimporttask"

dataawscciotwirelesswirelessdeviceimporttask.DataAwsccIotwirelessWirelessDeviceImportTask_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdeviceimporttask"

dataawscciotwirelesswirelessdeviceimporttask.DataAwsccIotwirelessWirelessDeviceImportTask_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccIotwirelessWirelessDeviceImportTask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccIotwirelessWirelessDeviceImportTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccIotwirelessWirelessDeviceImportTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/iotwireless_wireless_device_import_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotwirelessWirelessDeviceImportTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.destinationName">DestinationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.failedImportedDevicesCount">FailedImportedDevicesCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.initializedImportedDevicesCount">InitializedImportedDevicesCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.onboardedImportedDevicesCount">OnboardedImportedDevicesCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.pendingImportedDevicesCount">PendingImportedDevicesCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.sidewalk">Sidewalk</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference">DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.statusReason">StatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList">DataAwsccIotwirelessWirelessDeviceImportTaskTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.wirelessDeviceImportTaskId">WirelessDeviceImportTaskId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `DestinationName`<sup>Required</sup> <a name="DestinationName" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.destinationName"></a>

```go
func DestinationName() *string
```

- *Type:* *string

---

##### `FailedImportedDevicesCount`<sup>Required</sup> <a name="FailedImportedDevicesCount" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.failedImportedDevicesCount"></a>

```go
func FailedImportedDevicesCount() *f64
```

- *Type:* *f64

---

##### `InitializedImportedDevicesCount`<sup>Required</sup> <a name="InitializedImportedDevicesCount" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.initializedImportedDevicesCount"></a>

```go
func InitializedImportedDevicesCount() *f64
```

- *Type:* *f64

---

##### `OnboardedImportedDevicesCount`<sup>Required</sup> <a name="OnboardedImportedDevicesCount" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.onboardedImportedDevicesCount"></a>

```go
func OnboardedImportedDevicesCount() *f64
```

- *Type:* *f64

---

##### `PendingImportedDevicesCount`<sup>Required</sup> <a name="PendingImportedDevicesCount" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.pendingImportedDevicesCount"></a>

```go
func PendingImportedDevicesCount() *f64
```

- *Type:* *f64

---

##### `Sidewalk`<sup>Required</sup> <a name="Sidewalk" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.sidewalk"></a>

```go
func Sidewalk() DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference">DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.statusReason"></a>

```go
func StatusReason() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.tags"></a>

```go
func Tags() DataAwsccIotwirelessWirelessDeviceImportTaskTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList">DataAwsccIotwirelessWirelessDeviceImportTaskTagsList</a>

---

##### `WirelessDeviceImportTaskId`<sup>Required</sup> <a name="WirelessDeviceImportTaskId" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.wirelessDeviceImportTaskId"></a>

```go
func WirelessDeviceImportTaskId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotwirelessWirelessDeviceImportTaskConfig <a name="DataAwsccIotwirelessWirelessDeviceImportTaskConfig" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdeviceimporttask"

&dataawscciotwirelesswirelessdeviceimporttask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/iotwireless_wireless_device_import_task#id DataAwsccIotwirelessWirelessDeviceImportTask#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotwirelessWirelessDeviceImportTaskSidewalk <a name="DataAwsccIotwirelessWirelessDeviceImportTaskSidewalk" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalk.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdeviceimporttask"

&dataawscciotwirelesswirelessdeviceimporttask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalk {

}
```


### DataAwsccIotwirelessWirelessDeviceImportTaskTags <a name="DataAwsccIotwirelessWirelessDeviceImportTaskTags" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdeviceimporttask"

&dataawscciotwirelesswirelessdeviceimporttask.DataAwsccIotwirelessWirelessDeviceImportTaskTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference <a name="DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdeviceimporttask"

dataawscciotwirelesswirelessdeviceimporttask.NewDataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFile">DeviceCreationFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFileList">DeviceCreationFileList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.sidewalkManufacturingSn">SidewalkManufacturingSn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalk">DataAwsccIotwirelessWirelessDeviceImportTaskSidewalk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeviceCreationFile`<sup>Required</sup> <a name="DeviceCreationFile" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFile"></a>

```go
func DeviceCreationFile() *string
```

- *Type:* *string

---

##### `DeviceCreationFileList`<sup>Required</sup> <a name="DeviceCreationFileList" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFileList"></a>

```go
func DeviceCreationFileList() *[]*string
```

- *Type:* *[]*string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `SidewalkManufacturingSn`<sup>Required</sup> <a name="SidewalkManufacturingSn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.sidewalkManufacturingSn"></a>

```go
func SidewalkManufacturingSn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotwirelessWirelessDeviceImportTaskSidewalk
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalk">DataAwsccIotwirelessWirelessDeviceImportTaskSidewalk</a>

---


### DataAwsccIotwirelessWirelessDeviceImportTaskTagsList <a name="DataAwsccIotwirelessWirelessDeviceImportTaskTagsList" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdeviceimporttask"

dataawscciotwirelesswirelessdeviceimporttask.NewDataAwsccIotwirelessWirelessDeviceImportTaskTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccIotwirelessWirelessDeviceImportTaskTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.get"></a>

```go
func Get(index *f64) DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference <a name="DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelesswirelessdeviceimporttask"

dataawscciotwirelesswirelessdeviceimporttask.NewDataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTags">DataAwsccIotwirelessWirelessDeviceImportTaskTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotwirelessWirelessDeviceImportTaskTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTags">DataAwsccIotwirelessWirelessDeviceImportTaskTags</a>

---



