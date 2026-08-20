# `iotwirelessWirelessDevice` Submodule <a name="`iotwirelessWirelessDevice` Submodule" id="@cdktn/provider-awscc.iotwirelessWirelessDevice"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessWirelessDevice <a name="IotwirelessWirelessDevice" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device awscc_iotwireless_wireless_device}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdevice"

iotwirelesswirelessdevice.NewIotwirelessWirelessDevice(scope Construct, id *string, config IotwirelessWirelessDeviceConfig) IotwirelessWirelessDevice
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig">IotwirelessWirelessDeviceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig">IotwirelessWirelessDeviceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putLoRaWan">PutLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetLastUplinkReceivedAt">ResetLastUplinkReceivedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetLoRaWan">ResetLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetPositioning">ResetPositioning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetThingArn">ResetThingArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLoRaWan` <a name="PutLoRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putLoRaWan"></a>

```go
func PutLoRaWan(value IotwirelessWirelessDeviceLoRaWan)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putLoRaWan.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetLastUplinkReceivedAt` <a name="ResetLastUplinkReceivedAt" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetLastUplinkReceivedAt"></a>

```go
func ResetLastUplinkReceivedAt()
```

##### `ResetLoRaWan` <a name="ResetLoRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetLoRaWan"></a>

```go
func ResetLoRaWan()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetName"></a>

```go
func ResetName()
```

##### `ResetPositioning` <a name="ResetPositioning" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetPositioning"></a>

```go
func ResetPositioning()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetTags"></a>

```go
func ResetTags()
```

##### `ResetThingArn` <a name="ResetThingArn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetThingArn"></a>

```go
func ResetThingArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotwirelessWirelessDevice resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdevice"

iotwirelesswirelessdevice.IotwirelessWirelessDevice_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdevice"

iotwirelesswirelessdevice.IotwirelessWirelessDevice_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdevice"

iotwirelesswirelessdevice.IotwirelessWirelessDevice_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdevice"

iotwirelesswirelessdevice.IotwirelessWirelessDevice_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IotwirelessWirelessDevice resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IotwirelessWirelessDevice to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IotwirelessWirelessDevice that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessWirelessDevice to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.loRaWan">LoRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference">IotwirelessWirelessDeviceLoRaWanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList">IotwirelessWirelessDeviceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.thingName">ThingName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.wirelessDeviceId">WirelessDeviceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.destinationNameInput">DestinationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.lastUplinkReceivedAtInput">LastUplinkReceivedAtInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.loRaWanInput">LoRaWanInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.positioningInput">PositioningInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.thingArnInput">ThingArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.destinationName">DestinationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.lastUplinkReceivedAt">LastUplinkReceivedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.positioning">Positioning</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.thingArn">ThingArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LoRaWan`<sup>Required</sup> <a name="LoRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.loRaWan"></a>

```go
func LoRaWan() IotwirelessWirelessDeviceLoRaWanOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference">IotwirelessWirelessDeviceLoRaWanOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.tags"></a>

```go
func Tags() IotwirelessWirelessDeviceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList">IotwirelessWirelessDeviceTagsList</a>

---

##### `ThingName`<sup>Required</sup> <a name="ThingName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.thingName"></a>

```go
func ThingName() *string
```

- *Type:* *string

---

##### `WirelessDeviceId`<sup>Required</sup> <a name="WirelessDeviceId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.wirelessDeviceId"></a>

```go
func WirelessDeviceId() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DestinationNameInput`<sup>Optional</sup> <a name="DestinationNameInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.destinationNameInput"></a>

```go
func DestinationNameInput() *string
```

- *Type:* *string

---

##### `LastUplinkReceivedAtInput`<sup>Optional</sup> <a name="LastUplinkReceivedAtInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.lastUplinkReceivedAtInput"></a>

```go
func LastUplinkReceivedAtInput() *string
```

- *Type:* *string

---

##### `LoRaWanInput`<sup>Optional</sup> <a name="LoRaWanInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.loRaWanInput"></a>

```go
func LoRaWanInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PositioningInput`<sup>Optional</sup> <a name="PositioningInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.positioningInput"></a>

```go
func PositioningInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ThingArnInput`<sup>Optional</sup> <a name="ThingArnInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.thingArnInput"></a>

```go
func ThingArnInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DestinationName`<sup>Required</sup> <a name="DestinationName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.destinationName"></a>

```go
func DestinationName() *string
```

- *Type:* *string

---

##### `LastUplinkReceivedAt`<sup>Required</sup> <a name="LastUplinkReceivedAt" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.lastUplinkReceivedAt"></a>

```go
func LastUplinkReceivedAt() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Positioning`<sup>Required</sup> <a name="Positioning" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.positioning"></a>

```go
func Positioning() *string
```

- *Type:* *string

---

##### `ThingArn`<sup>Required</sup> <a name="ThingArn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.thingArn"></a>

```go
func ThingArn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessWirelessDeviceConfig <a name="IotwirelessWirelessDeviceConfig" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdevice"

&iotwirelesswirelessdevice.IotwirelessWirelessDeviceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DestinationName: *string,
	Type: *string,
	Description: *string,
	LastUplinkReceivedAt: *string,
	LoRaWan: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan,
	Name: *string,
	Positioning: *string,
	Tags: interface{},
	ThingArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.destinationName">DestinationName</a></code> | <code>*string</code> | Wireless device destination name. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.type">Type</a></code> | <code>*string</code> | Wireless device type, currently only Sidewalk and LoRa. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.description">Description</a></code> | <code>*string</code> | Wireless device description. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.lastUplinkReceivedAt">LastUplinkReceivedAt</a></code> | <code>*string</code> | The date and time when the most recent uplink was received. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.loRaWan">LoRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a></code> | The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Device. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.name">Name</a></code> | <code>*string</code> | Wireless device name. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.positioning">Positioning</a></code> | <code>*string</code> | FPort values for the GNSS, stream, and ClockSync functions of the positioning information. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A list of key-value pairs that contain metadata for the device. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.thingArn">ThingArn</a></code> | <code>*string</code> | Thing arn. Passed into update to associate Thing with Wireless device. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DestinationName`<sup>Required</sup> <a name="DestinationName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.destinationName"></a>

```go
DestinationName *string
```

- *Type:* *string

Wireless device destination name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#destination_name IotwirelessWirelessDevice#destination_name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Wireless device type, currently only Sidewalk and LoRa.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#type IotwirelessWirelessDevice#type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Wireless device description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#description IotwirelessWirelessDevice#description}

---

##### `LastUplinkReceivedAt`<sup>Optional</sup> <a name="LastUplinkReceivedAt" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.lastUplinkReceivedAt"></a>

```go
LastUplinkReceivedAt *string
```

- *Type:* *string

The date and time when the most recent uplink was received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#last_uplink_received_at IotwirelessWirelessDevice#last_uplink_received_at}

---

##### `LoRaWan`<sup>Optional</sup> <a name="LoRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.loRaWan"></a>

```go
LoRaWan IotwirelessWirelessDeviceLoRaWan
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a>

The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#lo_ra_wan IotwirelessWirelessDevice#lo_ra_wan}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Wireless device name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#name IotwirelessWirelessDevice#name}

---

##### `Positioning`<sup>Optional</sup> <a name="Positioning" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.positioning"></a>

```go
Positioning *string
```

- *Type:* *string

FPort values for the GNSS, stream, and ClockSync functions of the positioning information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#positioning IotwirelessWirelessDevice#positioning}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A list of key-value pairs that contain metadata for the device.

Currently not supported, will not create if tags are passed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#tags IotwirelessWirelessDevice#tags}

---

##### `ThingArn`<sup>Optional</sup> <a name="ThingArn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.thingArn"></a>

```go
ThingArn *string
```

- *Type:* *string

Thing arn. Passed into update to associate Thing with Wireless device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#thing_arn IotwirelessWirelessDevice#thing_arn}

---

### IotwirelessWirelessDeviceLoRaWan <a name="IotwirelessWirelessDeviceLoRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdevice"

&iotwirelesswirelessdevice.IotwirelessWirelessDeviceLoRaWan {
	AbpV10X: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X,
	AbpV11: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11,
	DevEui: *string,
	DeviceProfileId: *string,
	FPorts: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts,
	OtaaV10X: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X,
	OtaaV11: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11,
	ServiceProfileId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.abpV10X">AbpV10X</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#abp_v10_x IotwirelessWirelessDevice#abp_v10_x}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.abpV11">AbpV11</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#abp_v11 IotwirelessWirelessDevice#abp_v11}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.devEui">DevEui</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#dev_eui IotwirelessWirelessDevice#dev_eui}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.deviceProfileId">DeviceProfileId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#device_profile_id IotwirelessWirelessDevice#device_profile_id}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.fPorts">FPorts</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#f_ports IotwirelessWirelessDevice#f_ports}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.otaaV10X">OtaaV10X</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#otaa_v10_x IotwirelessWirelessDevice#otaa_v10_x}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.otaaV11">OtaaV11</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#otaa_v11 IotwirelessWirelessDevice#otaa_v11}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.serviceProfileId">ServiceProfileId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#service_profile_id IotwirelessWirelessDevice#service_profile_id}. |

---

##### `AbpV10X`<sup>Optional</sup> <a name="AbpV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.abpV10X"></a>

```go
AbpV10X IotwirelessWirelessDeviceLoRaWanAbpV10X
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#abp_v10_x IotwirelessWirelessDevice#abp_v10_x}.

---

##### `AbpV11`<sup>Optional</sup> <a name="AbpV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.abpV11"></a>

```go
AbpV11 IotwirelessWirelessDeviceLoRaWanAbpV11
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#abp_v11 IotwirelessWirelessDevice#abp_v11}.

---

##### `DevEui`<sup>Optional</sup> <a name="DevEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.devEui"></a>

```go
DevEui *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#dev_eui IotwirelessWirelessDevice#dev_eui}.

---

##### `DeviceProfileId`<sup>Optional</sup> <a name="DeviceProfileId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.deviceProfileId"></a>

```go
DeviceProfileId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#device_profile_id IotwirelessWirelessDevice#device_profile_id}.

---

##### `FPorts`<sup>Optional</sup> <a name="FPorts" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.fPorts"></a>

```go
FPorts IotwirelessWirelessDeviceLoRaWanFPorts
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#f_ports IotwirelessWirelessDevice#f_ports}.

---

##### `OtaaV10X`<sup>Optional</sup> <a name="OtaaV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.otaaV10X"></a>

```go
OtaaV10X IotwirelessWirelessDeviceLoRaWanOtaaV10X
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#otaa_v10_x IotwirelessWirelessDevice#otaa_v10_x}.

---

##### `OtaaV11`<sup>Optional</sup> <a name="OtaaV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.otaaV11"></a>

```go
OtaaV11 IotwirelessWirelessDeviceLoRaWanOtaaV11
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#otaa_v11 IotwirelessWirelessDevice#otaa_v11}.

---

##### `ServiceProfileId`<sup>Optional</sup> <a name="ServiceProfileId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.serviceProfileId"></a>

```go
ServiceProfileId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#service_profile_id IotwirelessWirelessDevice#service_profile_id}.

---

### IotwirelessWirelessDeviceLoRaWanAbpV10X <a name="IotwirelessWirelessDeviceLoRaWanAbpV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdevice"

&iotwirelesswirelessdevice.IotwirelessWirelessDeviceLoRaWanAbpV10X {
	DevAddr: *string,
	SessionKeys: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X.property.devAddr">DevAddr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#dev_addr IotwirelessWirelessDevice#dev_addr}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X.property.sessionKeys">SessionKeys</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#session_keys IotwirelessWirelessDevice#session_keys}. |

---

##### `DevAddr`<sup>Optional</sup> <a name="DevAddr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X.property.devAddr"></a>

```go
DevAddr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#dev_addr IotwirelessWirelessDevice#dev_addr}.

---

##### `SessionKeys`<sup>Optional</sup> <a name="SessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X.property.sessionKeys"></a>

```go
SessionKeys IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#session_keys IotwirelessWirelessDevice#session_keys}.

---

### IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys <a name="IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdevice"

&iotwirelesswirelessdevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys {
	AppSKey: *string,
	NwkSKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys.property.appSKey">AppSKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_s_key IotwirelessWirelessDevice#app_s_key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys.property.nwkSKey">NwkSKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#nwk_s_key IotwirelessWirelessDevice#nwk_s_key}. |

---

##### `AppSKey`<sup>Optional</sup> <a name="AppSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys.property.appSKey"></a>

```go
AppSKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_s_key IotwirelessWirelessDevice#app_s_key}.

---

##### `NwkSKey`<sup>Optional</sup> <a name="NwkSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys.property.nwkSKey"></a>

```go
NwkSKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#nwk_s_key IotwirelessWirelessDevice#nwk_s_key}.

---

### IotwirelessWirelessDeviceLoRaWanAbpV11 <a name="IotwirelessWirelessDeviceLoRaWanAbpV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdevice"

&iotwirelesswirelessdevice.IotwirelessWirelessDeviceLoRaWanAbpV11 {
	DevAddr: *string,
	SessionKeys: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11.property.devAddr">DevAddr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#dev_addr IotwirelessWirelessDevice#dev_addr}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11.property.sessionKeys">SessionKeys</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#session_keys IotwirelessWirelessDevice#session_keys}. |

---

##### `DevAddr`<sup>Optional</sup> <a name="DevAddr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11.property.devAddr"></a>

```go
DevAddr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#dev_addr IotwirelessWirelessDevice#dev_addr}.

---

##### `SessionKeys`<sup>Optional</sup> <a name="SessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11.property.sessionKeys"></a>

```go
SessionKeys IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#session_keys IotwirelessWirelessDevice#session_keys}.

---

### IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys <a name="IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdevice"

&iotwirelesswirelessdevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys {
	AppSKey: *string,
	FNwkSIntKey: *string,
	NwkSEncKey: *string,
	SNwkSIntKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.appSKey">AppSKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_s_key IotwirelessWirelessDevice#app_s_key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.fNwkSIntKey">FNwkSIntKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#f_nwk_s_int_key IotwirelessWirelessDevice#f_nwk_s_int_key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.nwkSEncKey">NwkSEncKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#nwk_s_enc_key IotwirelessWirelessDevice#nwk_s_enc_key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.sNwkSIntKey">SNwkSIntKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#s_nwk_s_int_key IotwirelessWirelessDevice#s_nwk_s_int_key}. |

---

##### `AppSKey`<sup>Optional</sup> <a name="AppSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.appSKey"></a>

```go
AppSKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_s_key IotwirelessWirelessDevice#app_s_key}.

---

##### `FNwkSIntKey`<sup>Optional</sup> <a name="FNwkSIntKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.fNwkSIntKey"></a>

```go
FNwkSIntKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#f_nwk_s_int_key IotwirelessWirelessDevice#f_nwk_s_int_key}.

---

##### `NwkSEncKey`<sup>Optional</sup> <a name="NwkSEncKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.nwkSEncKey"></a>

```go
NwkSEncKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#nwk_s_enc_key IotwirelessWirelessDevice#nwk_s_enc_key}.

---

##### `SNwkSIntKey`<sup>Optional</sup> <a name="SNwkSIntKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.sNwkSIntKey"></a>

```go
SNwkSIntKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#s_nwk_s_int_key IotwirelessWirelessDevice#s_nwk_s_int_key}.

---

### IotwirelessWirelessDeviceLoRaWanFPorts <a name="IotwirelessWirelessDeviceLoRaWanFPorts" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdevice"

&iotwirelesswirelessdevice.IotwirelessWirelessDeviceLoRaWanFPorts {
	Applications: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts.property.applications">Applications</a></code> | <code>interface{}</code> | A list of optional LoRaWAN application information, which can be used for geolocation. |

---

##### `Applications`<sup>Optional</sup> <a name="Applications" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts.property.applications"></a>

```go
Applications interface{}
```

- *Type:* interface{}

A list of optional LoRaWAN application information, which can be used for geolocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#applications IotwirelessWirelessDevice#applications}

---

### IotwirelessWirelessDeviceLoRaWanFPortsApplications <a name="IotwirelessWirelessDeviceLoRaWanFPortsApplications" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdevice"

&iotwirelesswirelessdevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications {
	DestinationName: *string,
	FPort: *f64,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.property.destinationName">DestinationName</a></code> | <code>*string</code> | The name of the position data destination that describes the AWS IoT rule that processes the device's position data for use by AWS IoT Core for LoRaWAN. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.property.fPort">FPort</a></code> | <code>*f64</code> | The Fport value. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.property.type">Type</a></code> | <code>*string</code> | Application type, which can be specified to obtain real-time position information of your LoRaWAN device. |

---

##### `DestinationName`<sup>Optional</sup> <a name="DestinationName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.property.destinationName"></a>

```go
DestinationName *string
```

- *Type:* *string

The name of the position data destination that describes the AWS IoT rule that processes the device's position data for use by AWS IoT Core for LoRaWAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#destination_name IotwirelessWirelessDevice#destination_name}

---

##### `FPort`<sup>Optional</sup> <a name="FPort" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.property.fPort"></a>

```go
FPort *f64
```

- *Type:* *f64

The Fport value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#f_port IotwirelessWirelessDevice#f_port}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.property.type"></a>

```go
Type *string
```

- *Type:* *string

Application type, which can be specified to obtain real-time position information of your LoRaWAN device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#type IotwirelessWirelessDevice#type}

---

### IotwirelessWirelessDeviceLoRaWanOtaaV10X <a name="IotwirelessWirelessDeviceLoRaWanOtaaV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdevice"

&iotwirelesswirelessdevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X {
	AppEui: *string,
	AppKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X.property.appEui">AppEui</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_eui IotwirelessWirelessDevice#app_eui}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X.property.appKey">AppKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_key IotwirelessWirelessDevice#app_key}. |

---

##### `AppEui`<sup>Optional</sup> <a name="AppEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X.property.appEui"></a>

```go
AppEui *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_eui IotwirelessWirelessDevice#app_eui}.

---

##### `AppKey`<sup>Optional</sup> <a name="AppKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X.property.appKey"></a>

```go
AppKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_key IotwirelessWirelessDevice#app_key}.

---

### IotwirelessWirelessDeviceLoRaWanOtaaV11 <a name="IotwirelessWirelessDeviceLoRaWanOtaaV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdevice"

&iotwirelesswirelessdevice.IotwirelessWirelessDeviceLoRaWanOtaaV11 {
	AppKey: *string,
	JoinEui: *string,
	NwkKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.property.appKey">AppKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_key IotwirelessWirelessDevice#app_key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.property.joinEui">JoinEui</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#join_eui IotwirelessWirelessDevice#join_eui}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.property.nwkKey">NwkKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#nwk_key IotwirelessWirelessDevice#nwk_key}. |

---

##### `AppKey`<sup>Optional</sup> <a name="AppKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.property.appKey"></a>

```go
AppKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_key IotwirelessWirelessDevice#app_key}.

---

##### `JoinEui`<sup>Optional</sup> <a name="JoinEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.property.joinEui"></a>

```go
JoinEui *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#join_eui IotwirelessWirelessDevice#join_eui}.

---

##### `NwkKey`<sup>Optional</sup> <a name="NwkKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.property.nwkKey"></a>

```go
NwkKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#nwk_key IotwirelessWirelessDevice#nwk_key}.

---

### IotwirelessWirelessDeviceTags <a name="IotwirelessWirelessDeviceTags" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdevice"

&iotwirelesswirelessdevice.IotwirelessWirelessDeviceTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#key IotwirelessWirelessDevice#key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#value IotwirelessWirelessDevice#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#key IotwirelessWirelessDevice#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#value IotwirelessWirelessDevice#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference <a name="IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdevice"

iotwirelesswirelessdevice.NewIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.putSessionKeys">PutSessionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resetDevAddr">ResetDevAddr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resetSessionKeys">ResetSessionKeys</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSessionKeys` <a name="PutSessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.putSessionKeys"></a>

```go
func PutSessionKeys(value IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.putSessionKeys.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a>

---

##### `ResetDevAddr` <a name="ResetDevAddr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resetDevAddr"></a>

```go
func ResetDevAddr()
```

##### `ResetSessionKeys` <a name="ResetSessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resetSessionKeys"></a>

```go
func ResetSessionKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.sessionKeys">SessionKeys</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.devAddrInput">DevAddrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.sessionKeysInput">SessionKeysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.devAddr">DevAddr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SessionKeys`<sup>Required</sup> <a name="SessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.sessionKeys"></a>

```go
func SessionKeys() IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference</a>

---

##### `DevAddrInput`<sup>Optional</sup> <a name="DevAddrInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.devAddrInput"></a>

```go
func DevAddrInput() *string
```

- *Type:* *string

---

##### `SessionKeysInput`<sup>Optional</sup> <a name="SessionKeysInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.sessionKeysInput"></a>

```go
func SessionKeysInput() interface{}
```

- *Type:* interface{}

---

##### `DevAddr`<sup>Required</sup> <a name="DevAddr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.devAddr"></a>

```go
func DevAddr() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference <a name="IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdevice"

iotwirelesswirelessdevice.NewIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resetAppSKey">ResetAppSKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resetNwkSKey">ResetNwkSKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppSKey` <a name="ResetAppSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resetAppSKey"></a>

```go
func ResetAppSKey()
```

##### `ResetNwkSKey` <a name="ResetNwkSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resetNwkSKey"></a>

```go
func ResetNwkSKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.appSKeyInput">AppSKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.nwkSKeyInput">NwkSKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.appSKey">AppSKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.nwkSKey">NwkSKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppSKeyInput`<sup>Optional</sup> <a name="AppSKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.appSKeyInput"></a>

```go
func AppSKeyInput() *string
```

- *Type:* *string

---

##### `NwkSKeyInput`<sup>Optional</sup> <a name="NwkSKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.nwkSKeyInput"></a>

```go
func NwkSKeyInput() *string
```

- *Type:* *string

---

##### `AppSKey`<sup>Required</sup> <a name="AppSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.appSKey"></a>

```go
func AppSKey() *string
```

- *Type:* *string

---

##### `NwkSKey`<sup>Required</sup> <a name="NwkSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.nwkSKey"></a>

```go
func NwkSKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference <a name="IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdevice"

iotwirelesswirelessdevice.NewIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.putSessionKeys">PutSessionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resetDevAddr">ResetDevAddr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resetSessionKeys">ResetSessionKeys</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSessionKeys` <a name="PutSessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.putSessionKeys"></a>

```go
func PutSessionKeys(value IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.putSessionKeys.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a>

---

##### `ResetDevAddr` <a name="ResetDevAddr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resetDevAddr"></a>

```go
func ResetDevAddr()
```

##### `ResetSessionKeys` <a name="ResetSessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resetSessionKeys"></a>

```go
func ResetSessionKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.sessionKeys">SessionKeys</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.devAddrInput">DevAddrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.sessionKeysInput">SessionKeysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.devAddr">DevAddr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SessionKeys`<sup>Required</sup> <a name="SessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.sessionKeys"></a>

```go
func SessionKeys() IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference</a>

---

##### `DevAddrInput`<sup>Optional</sup> <a name="DevAddrInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.devAddrInput"></a>

```go
func DevAddrInput() *string
```

- *Type:* *string

---

##### `SessionKeysInput`<sup>Optional</sup> <a name="SessionKeysInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.sessionKeysInput"></a>

```go
func SessionKeysInput() interface{}
```

- *Type:* interface{}

---

##### `DevAddr`<sup>Required</sup> <a name="DevAddr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.devAddr"></a>

```go
func DevAddr() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference <a name="IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdevice"

iotwirelesswirelessdevice.NewIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetAppSKey">ResetAppSKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetFNwkSIntKey">ResetFNwkSIntKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetNwkSEncKey">ResetNwkSEncKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetSNwkSIntKey">ResetSNwkSIntKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppSKey` <a name="ResetAppSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetAppSKey"></a>

```go
func ResetAppSKey()
```

##### `ResetFNwkSIntKey` <a name="ResetFNwkSIntKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetFNwkSIntKey"></a>

```go
func ResetFNwkSIntKey()
```

##### `ResetNwkSEncKey` <a name="ResetNwkSEncKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetNwkSEncKey"></a>

```go
func ResetNwkSEncKey()
```

##### `ResetSNwkSIntKey` <a name="ResetSNwkSIntKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetSNwkSIntKey"></a>

```go
func ResetSNwkSIntKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.appSKeyInput">AppSKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fNwkSIntKeyInput">FNwkSIntKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.nwkSEncKeyInput">NwkSEncKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.sNwkSIntKeyInput">SNwkSIntKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.appSKey">AppSKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fNwkSIntKey">FNwkSIntKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.nwkSEncKey">NwkSEncKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.sNwkSIntKey">SNwkSIntKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppSKeyInput`<sup>Optional</sup> <a name="AppSKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.appSKeyInput"></a>

```go
func AppSKeyInput() *string
```

- *Type:* *string

---

##### `FNwkSIntKeyInput`<sup>Optional</sup> <a name="FNwkSIntKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fNwkSIntKeyInput"></a>

```go
func FNwkSIntKeyInput() *string
```

- *Type:* *string

---

##### `NwkSEncKeyInput`<sup>Optional</sup> <a name="NwkSEncKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.nwkSEncKeyInput"></a>

```go
func NwkSEncKeyInput() *string
```

- *Type:* *string

---

##### `SNwkSIntKeyInput`<sup>Optional</sup> <a name="SNwkSIntKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.sNwkSIntKeyInput"></a>

```go
func SNwkSIntKeyInput() *string
```

- *Type:* *string

---

##### `AppSKey`<sup>Required</sup> <a name="AppSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.appSKey"></a>

```go
func AppSKey() *string
```

- *Type:* *string

---

##### `FNwkSIntKey`<sup>Required</sup> <a name="FNwkSIntKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fNwkSIntKey"></a>

```go
func FNwkSIntKey() *string
```

- *Type:* *string

---

##### `NwkSEncKey`<sup>Required</sup> <a name="NwkSEncKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.nwkSEncKey"></a>

```go
func NwkSEncKey() *string
```

- *Type:* *string

---

##### `SNwkSIntKey`<sup>Required</sup> <a name="SNwkSIntKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.sNwkSIntKey"></a>

```go
func SNwkSIntKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList <a name="IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdevice"

iotwirelesswirelessdevice.NewIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.get"></a>

```go
func Get(index *f64) IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference <a name="IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdevice"

iotwirelesswirelessdevice.NewIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resetDestinationName">ResetDestinationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resetFPort">ResetFPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationName` <a name="ResetDestinationName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resetDestinationName"></a>

```go
func ResetDestinationName()
```

##### `ResetFPort` <a name="ResetFPort" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resetFPort"></a>

```go
func ResetFPort()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.destinationNameInput">DestinationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fPortInput">FPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.destinationName">DestinationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fPort">FPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationNameInput`<sup>Optional</sup> <a name="DestinationNameInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.destinationNameInput"></a>

```go
func DestinationNameInput() *string
```

- *Type:* *string

---

##### `FPortInput`<sup>Optional</sup> <a name="FPortInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fPortInput"></a>

```go
func FPortInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `DestinationName`<sup>Required</sup> <a name="DestinationName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.destinationName"></a>

```go
func DestinationName() *string
```

- *Type:* *string

---

##### `FPort`<sup>Required</sup> <a name="FPort" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fPort"></a>

```go
func FPort() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotwirelessWirelessDeviceLoRaWanFPortsOutputReference <a name="IotwirelessWirelessDeviceLoRaWanFPortsOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdevice"

iotwirelesswirelessdevice.NewIotwirelessWirelessDeviceLoRaWanFPortsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotwirelessWirelessDeviceLoRaWanFPortsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.putApplications">PutApplications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resetApplications">ResetApplications</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApplications` <a name="PutApplications" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.putApplications"></a>

```go
func PutApplications(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.putApplications.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApplications` <a name="ResetApplications" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resetApplications"></a>

```go
func ResetApplications()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.applications">Applications</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList">IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.applicationsInput">ApplicationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Applications`<sup>Required</sup> <a name="Applications" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.applications"></a>

```go
func Applications() IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList">IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList</a>

---

##### `ApplicationsInput`<sup>Optional</sup> <a name="ApplicationsInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.applicationsInput"></a>

```go
func ApplicationsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference <a name="IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdevice"

iotwirelesswirelessdevice.NewIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resetAppEui">ResetAppEui</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resetAppKey">ResetAppKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppEui` <a name="ResetAppEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resetAppEui"></a>

```go
func ResetAppEui()
```

##### `ResetAppKey` <a name="ResetAppKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resetAppKey"></a>

```go
func ResetAppKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appEuiInput">AppEuiInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appKeyInput">AppKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appEui">AppEui</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appKey">AppKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppEuiInput`<sup>Optional</sup> <a name="AppEuiInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appEuiInput"></a>

```go
func AppEuiInput() *string
```

- *Type:* *string

---

##### `AppKeyInput`<sup>Optional</sup> <a name="AppKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appKeyInput"></a>

```go
func AppKeyInput() *string
```

- *Type:* *string

---

##### `AppEui`<sup>Required</sup> <a name="AppEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appEui"></a>

```go
func AppEui() *string
```

- *Type:* *string

---

##### `AppKey`<sup>Required</sup> <a name="AppKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appKey"></a>

```go
func AppKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference <a name="IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdevice"

iotwirelesswirelessdevice.NewIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resetAppKey">ResetAppKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resetJoinEui">ResetJoinEui</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resetNwkKey">ResetNwkKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppKey` <a name="ResetAppKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resetAppKey"></a>

```go
func ResetAppKey()
```

##### `ResetJoinEui` <a name="ResetJoinEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resetJoinEui"></a>

```go
func ResetJoinEui()
```

##### `ResetNwkKey` <a name="ResetNwkKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resetNwkKey"></a>

```go
func ResetNwkKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.appKeyInput">AppKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.joinEuiInput">JoinEuiInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.nwkKeyInput">NwkKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.appKey">AppKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.joinEui">JoinEui</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.nwkKey">NwkKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppKeyInput`<sup>Optional</sup> <a name="AppKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.appKeyInput"></a>

```go
func AppKeyInput() *string
```

- *Type:* *string

---

##### `JoinEuiInput`<sup>Optional</sup> <a name="JoinEuiInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.joinEuiInput"></a>

```go
func JoinEuiInput() *string
```

- *Type:* *string

---

##### `NwkKeyInput`<sup>Optional</sup> <a name="NwkKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.nwkKeyInput"></a>

```go
func NwkKeyInput() *string
```

- *Type:* *string

---

##### `AppKey`<sup>Required</sup> <a name="AppKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.appKey"></a>

```go
func AppKey() *string
```

- *Type:* *string

---

##### `JoinEui`<sup>Required</sup> <a name="JoinEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.joinEui"></a>

```go
func JoinEui() *string
```

- *Type:* *string

---

##### `NwkKey`<sup>Required</sup> <a name="NwkKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.nwkKey"></a>

```go
func NwkKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotwirelessWirelessDeviceLoRaWanOutputReference <a name="IotwirelessWirelessDeviceLoRaWanOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdevice"

iotwirelesswirelessdevice.NewIotwirelessWirelessDeviceLoRaWanOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotwirelessWirelessDeviceLoRaWanOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV10X">PutAbpV10X</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV11">PutAbpV11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putFPorts">PutFPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV10X">PutOtaaV10X</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV11">PutOtaaV11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetAbpV10X">ResetAbpV10X</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetAbpV11">ResetAbpV11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetDevEui">ResetDevEui</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetDeviceProfileId">ResetDeviceProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetFPorts">ResetFPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetOtaaV10X">ResetOtaaV10X</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetOtaaV11">ResetOtaaV11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetServiceProfileId">ResetServiceProfileId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAbpV10X` <a name="PutAbpV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV10X"></a>

```go
func PutAbpV10X(value IotwirelessWirelessDeviceLoRaWanAbpV10X)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV10X.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a>

---

##### `PutAbpV11` <a name="PutAbpV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV11"></a>

```go
func PutAbpV11(value IotwirelessWirelessDeviceLoRaWanAbpV11)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV11.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a>

---

##### `PutFPorts` <a name="PutFPorts" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putFPorts"></a>

```go
func PutFPorts(value IotwirelessWirelessDeviceLoRaWanFPorts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putFPorts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a>

---

##### `PutOtaaV10X` <a name="PutOtaaV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV10X"></a>

```go
func PutOtaaV10X(value IotwirelessWirelessDeviceLoRaWanOtaaV10X)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV10X.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a>

---

##### `PutOtaaV11` <a name="PutOtaaV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV11"></a>

```go
func PutOtaaV11(value IotwirelessWirelessDeviceLoRaWanOtaaV11)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV11.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a>

---

##### `ResetAbpV10X` <a name="ResetAbpV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetAbpV10X"></a>

```go
func ResetAbpV10X()
```

##### `ResetAbpV11` <a name="ResetAbpV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetAbpV11"></a>

```go
func ResetAbpV11()
```

##### `ResetDevEui` <a name="ResetDevEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetDevEui"></a>

```go
func ResetDevEui()
```

##### `ResetDeviceProfileId` <a name="ResetDeviceProfileId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetDeviceProfileId"></a>

```go
func ResetDeviceProfileId()
```

##### `ResetFPorts` <a name="ResetFPorts" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetFPorts"></a>

```go
func ResetFPorts()
```

##### `ResetOtaaV10X` <a name="ResetOtaaV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetOtaaV10X"></a>

```go
func ResetOtaaV10X()
```

##### `ResetOtaaV11` <a name="ResetOtaaV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetOtaaV11"></a>

```go
func ResetOtaaV11()
```

##### `ResetServiceProfileId` <a name="ResetServiceProfileId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetServiceProfileId"></a>

```go
func ResetServiceProfileId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV10X">AbpV10X</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference">IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV11">AbpV11</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference">IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.fPorts">FPorts</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference">IotwirelessWirelessDeviceLoRaWanFPortsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV10X">OtaaV10X</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference">IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV11">OtaaV11</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference">IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV10XInput">AbpV10XInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV11Input">AbpV11Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.devEuiInput">DevEuiInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.deviceProfileIdInput">DeviceProfileIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.fPortsInput">FPortsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV10XInput">OtaaV10XInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV11Input">OtaaV11Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.serviceProfileIdInput">ServiceProfileIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.devEui">DevEui</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.deviceProfileId">DeviceProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.serviceProfileId">ServiceProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AbpV10X`<sup>Required</sup> <a name="AbpV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV10X"></a>

```go
func AbpV10X() IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference">IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference</a>

---

##### `AbpV11`<sup>Required</sup> <a name="AbpV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV11"></a>

```go
func AbpV11() IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference">IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference</a>

---

##### `FPorts`<sup>Required</sup> <a name="FPorts" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.fPorts"></a>

```go
func FPorts() IotwirelessWirelessDeviceLoRaWanFPortsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference">IotwirelessWirelessDeviceLoRaWanFPortsOutputReference</a>

---

##### `OtaaV10X`<sup>Required</sup> <a name="OtaaV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV10X"></a>

```go
func OtaaV10X() IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference">IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference</a>

---

##### `OtaaV11`<sup>Required</sup> <a name="OtaaV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV11"></a>

```go
func OtaaV11() IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference">IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference</a>

---

##### `AbpV10XInput`<sup>Optional</sup> <a name="AbpV10XInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV10XInput"></a>

```go
func AbpV10XInput() interface{}
```

- *Type:* interface{}

---

##### `AbpV11Input`<sup>Optional</sup> <a name="AbpV11Input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV11Input"></a>

```go
func AbpV11Input() interface{}
```

- *Type:* interface{}

---

##### `DevEuiInput`<sup>Optional</sup> <a name="DevEuiInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.devEuiInput"></a>

```go
func DevEuiInput() *string
```

- *Type:* *string

---

##### `DeviceProfileIdInput`<sup>Optional</sup> <a name="DeviceProfileIdInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.deviceProfileIdInput"></a>

```go
func DeviceProfileIdInput() *string
```

- *Type:* *string

---

##### `FPortsInput`<sup>Optional</sup> <a name="FPortsInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.fPortsInput"></a>

```go
func FPortsInput() interface{}
```

- *Type:* interface{}

---

##### `OtaaV10XInput`<sup>Optional</sup> <a name="OtaaV10XInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV10XInput"></a>

```go
func OtaaV10XInput() interface{}
```

- *Type:* interface{}

---

##### `OtaaV11Input`<sup>Optional</sup> <a name="OtaaV11Input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV11Input"></a>

```go
func OtaaV11Input() interface{}
```

- *Type:* interface{}

---

##### `ServiceProfileIdInput`<sup>Optional</sup> <a name="ServiceProfileIdInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.serviceProfileIdInput"></a>

```go
func ServiceProfileIdInput() *string
```

- *Type:* *string

---

##### `DevEui`<sup>Required</sup> <a name="DevEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.devEui"></a>

```go
func DevEui() *string
```

- *Type:* *string

---

##### `DeviceProfileId`<sup>Required</sup> <a name="DeviceProfileId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.deviceProfileId"></a>

```go
func DeviceProfileId() *string
```

- *Type:* *string

---

##### `ServiceProfileId`<sup>Required</sup> <a name="ServiceProfileId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.serviceProfileId"></a>

```go
func ServiceProfileId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotwirelessWirelessDeviceTagsList <a name="IotwirelessWirelessDeviceTagsList" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdevice"

iotwirelesswirelessdevice.NewIotwirelessWirelessDeviceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotwirelessWirelessDeviceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.get"></a>

```go
func Get(index *f64) IotwirelessWirelessDeviceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotwirelessWirelessDeviceTagsOutputReference <a name="IotwirelessWirelessDeviceTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdevice"

iotwirelesswirelessdevice.NewIotwirelessWirelessDeviceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotwirelessWirelessDeviceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



