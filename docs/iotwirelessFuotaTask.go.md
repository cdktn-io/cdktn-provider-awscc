# `iotwirelessFuotaTask` Submodule <a name="`iotwirelessFuotaTask` Submodule" id="@cdktn/provider-awscc.iotwirelessFuotaTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessFuotaTask <a name="IotwirelessFuotaTask" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_fuota_task awscc_iotwireless_fuota_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelessfuotatask"

iotwirelessfuotatask.NewIotwirelessFuotaTask(scope Construct, id *string, config IotwirelessFuotaTaskConfig) IotwirelessFuotaTask
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig">IotwirelessFuotaTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig">IotwirelessFuotaTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.putLoRaWan">PutLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetAssociateMulticastGroup">ResetAssociateMulticastGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetAssociateWirelessDevice">ResetAssociateWirelessDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetDisassociateMulticastGroup">ResetDisassociateMulticastGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetDisassociateWirelessDevice">ResetDisassociateWirelessDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLoRaWan` <a name="PutLoRaWan" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.putLoRaWan"></a>

```go
func PutLoRaWan(value IotwirelessFuotaTaskLoRaWan)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.putLoRaWan.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan">IotwirelessFuotaTaskLoRaWan</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAssociateMulticastGroup` <a name="ResetAssociateMulticastGroup" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetAssociateMulticastGroup"></a>

```go
func ResetAssociateMulticastGroup()
```

##### `ResetAssociateWirelessDevice` <a name="ResetAssociateWirelessDevice" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetAssociateWirelessDevice"></a>

```go
func ResetAssociateWirelessDevice()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisassociateMulticastGroup` <a name="ResetDisassociateMulticastGroup" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetDisassociateMulticastGroup"></a>

```go
func ResetDisassociateMulticastGroup()
```

##### `ResetDisassociateWirelessDevice` <a name="ResetDisassociateWirelessDevice" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetDisassociateWirelessDevice"></a>

```go
func ResetDisassociateWirelessDevice()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetName"></a>

```go
func ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotwirelessFuotaTask resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelessfuotatask"

iotwirelessfuotatask.IotwirelessFuotaTask_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelessfuotatask"

iotwirelessfuotatask.IotwirelessFuotaTask_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelessfuotatask"

iotwirelessfuotatask.IotwirelessFuotaTask_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelessfuotatask"

iotwirelessfuotatask.IotwirelessFuotaTask_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IotwirelessFuotaTask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IotwirelessFuotaTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IotwirelessFuotaTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_fuota_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessFuotaTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.fuotaTaskId">FuotaTaskId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.fuotaTaskStatus">FuotaTaskStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.loRaWan">LoRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference">IotwirelessFuotaTaskLoRaWanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList">IotwirelessFuotaTaskTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateMulticastGroupInput">AssociateMulticastGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateWirelessDeviceInput">AssociateWirelessDeviceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateMulticastGroupInput">DisassociateMulticastGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateWirelessDeviceInput">DisassociateWirelessDeviceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateImageInput">FirmwareUpdateImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateRoleInput">FirmwareUpdateRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.loRaWanInput">LoRaWanInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateMulticastGroup">AssociateMulticastGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateWirelessDevice">AssociateWirelessDevice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateMulticastGroup">DisassociateMulticastGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateWirelessDevice">DisassociateWirelessDevice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateImage">FirmwareUpdateImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateRole">FirmwareUpdateRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `FuotaTaskId`<sup>Required</sup> <a name="FuotaTaskId" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.fuotaTaskId"></a>

```go
func FuotaTaskId() *string
```

- *Type:* *string

---

##### `FuotaTaskStatus`<sup>Required</sup> <a name="FuotaTaskStatus" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.fuotaTaskStatus"></a>

```go
func FuotaTaskStatus() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LoRaWan`<sup>Required</sup> <a name="LoRaWan" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.loRaWan"></a>

```go
func LoRaWan() IotwirelessFuotaTaskLoRaWanOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference">IotwirelessFuotaTaskLoRaWanOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.tags"></a>

```go
func Tags() IotwirelessFuotaTaskTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList">IotwirelessFuotaTaskTagsList</a>

---

##### `AssociateMulticastGroupInput`<sup>Optional</sup> <a name="AssociateMulticastGroupInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateMulticastGroupInput"></a>

```go
func AssociateMulticastGroupInput() *string
```

- *Type:* *string

---

##### `AssociateWirelessDeviceInput`<sup>Optional</sup> <a name="AssociateWirelessDeviceInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateWirelessDeviceInput"></a>

```go
func AssociateWirelessDeviceInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisassociateMulticastGroupInput`<sup>Optional</sup> <a name="DisassociateMulticastGroupInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateMulticastGroupInput"></a>

```go
func DisassociateMulticastGroupInput() *string
```

- *Type:* *string

---

##### `DisassociateWirelessDeviceInput`<sup>Optional</sup> <a name="DisassociateWirelessDeviceInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateWirelessDeviceInput"></a>

```go
func DisassociateWirelessDeviceInput() *string
```

- *Type:* *string

---

##### `FirmwareUpdateImageInput`<sup>Optional</sup> <a name="FirmwareUpdateImageInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateImageInput"></a>

```go
func FirmwareUpdateImageInput() *string
```

- *Type:* *string

---

##### `FirmwareUpdateRoleInput`<sup>Optional</sup> <a name="FirmwareUpdateRoleInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateRoleInput"></a>

```go
func FirmwareUpdateRoleInput() *string
```

- *Type:* *string

---

##### `LoRaWanInput`<sup>Optional</sup> <a name="LoRaWanInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.loRaWanInput"></a>

```go
func LoRaWanInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AssociateMulticastGroup`<sup>Required</sup> <a name="AssociateMulticastGroup" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateMulticastGroup"></a>

```go
func AssociateMulticastGroup() *string
```

- *Type:* *string

---

##### `AssociateWirelessDevice`<sup>Required</sup> <a name="AssociateWirelessDevice" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateWirelessDevice"></a>

```go
func AssociateWirelessDevice() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisassociateMulticastGroup`<sup>Required</sup> <a name="DisassociateMulticastGroup" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateMulticastGroup"></a>

```go
func DisassociateMulticastGroup() *string
```

- *Type:* *string

---

##### `DisassociateWirelessDevice`<sup>Required</sup> <a name="DisassociateWirelessDevice" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateWirelessDevice"></a>

```go
func DisassociateWirelessDevice() *string
```

- *Type:* *string

---

##### `FirmwareUpdateImage`<sup>Required</sup> <a name="FirmwareUpdateImage" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateImage"></a>

```go
func FirmwareUpdateImage() *string
```

- *Type:* *string

---

##### `FirmwareUpdateRole`<sup>Required</sup> <a name="FirmwareUpdateRole" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateRole"></a>

```go
func FirmwareUpdateRole() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessFuotaTaskConfig <a name="IotwirelessFuotaTaskConfig" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelessfuotatask"

&iotwirelessfuotatask.IotwirelessFuotaTaskConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	FirmwareUpdateImage: *string,
	FirmwareUpdateRole: *string,
	LoRaWan: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan,
	AssociateMulticastGroup: *string,
	AssociateWirelessDevice: *string,
	Description: *string,
	DisassociateMulticastGroup: *string,
	DisassociateWirelessDevice: *string,
	Name: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.firmwareUpdateImage">FirmwareUpdateImage</a></code> | <code>*string</code> | FUOTA task firmware update image binary S3 link. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.firmwareUpdateRole">FirmwareUpdateRole</a></code> | <code>*string</code> | FUOTA task firmware IAM role for reading S3. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.loRaWan">LoRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan">IotwirelessFuotaTaskLoRaWan</a></code> | FUOTA task LoRaWAN. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.associateMulticastGroup">AssociateMulticastGroup</a></code> | <code>*string</code> | Multicast group to associate. Only for update request. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.associateWirelessDevice">AssociateWirelessDevice</a></code> | <code>*string</code> | Wireless device to associate. Only for update request. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.description">Description</a></code> | <code>*string</code> | FUOTA task description. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.disassociateMulticastGroup">DisassociateMulticastGroup</a></code> | <code>*string</code> | Multicast group to disassociate. Only for update request. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.disassociateWirelessDevice">DisassociateWirelessDevice</a></code> | <code>*string</code> | Wireless device to disassociate. Only for update request. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.name">Name</a></code> | <code>*string</code> | Name of FUOTA task. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A list of key-value pairs that contain metadata for the FUOTA task. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FirmwareUpdateImage`<sup>Required</sup> <a name="FirmwareUpdateImage" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.firmwareUpdateImage"></a>

```go
FirmwareUpdateImage *string
```

- *Type:* *string

FUOTA task firmware update image binary S3 link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_fuota_task#firmware_update_image IotwirelessFuotaTask#firmware_update_image}

---

##### `FirmwareUpdateRole`<sup>Required</sup> <a name="FirmwareUpdateRole" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.firmwareUpdateRole"></a>

```go
FirmwareUpdateRole *string
```

- *Type:* *string

FUOTA task firmware IAM role for reading S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_fuota_task#firmware_update_role IotwirelessFuotaTask#firmware_update_role}

---

##### `LoRaWan`<sup>Required</sup> <a name="LoRaWan" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.loRaWan"></a>

```go
LoRaWan IotwirelessFuotaTaskLoRaWan
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan">IotwirelessFuotaTaskLoRaWan</a>

FUOTA task LoRaWAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_fuota_task#lo_ra_wan IotwirelessFuotaTask#lo_ra_wan}

---

##### `AssociateMulticastGroup`<sup>Optional</sup> <a name="AssociateMulticastGroup" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.associateMulticastGroup"></a>

```go
AssociateMulticastGroup *string
```

- *Type:* *string

Multicast group to associate. Only for update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_fuota_task#associate_multicast_group IotwirelessFuotaTask#associate_multicast_group}

---

##### `AssociateWirelessDevice`<sup>Optional</sup> <a name="AssociateWirelessDevice" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.associateWirelessDevice"></a>

```go
AssociateWirelessDevice *string
```

- *Type:* *string

Wireless device to associate. Only for update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_fuota_task#associate_wireless_device IotwirelessFuotaTask#associate_wireless_device}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

FUOTA task description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_fuota_task#description IotwirelessFuotaTask#description}

---

##### `DisassociateMulticastGroup`<sup>Optional</sup> <a name="DisassociateMulticastGroup" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.disassociateMulticastGroup"></a>

```go
DisassociateMulticastGroup *string
```

- *Type:* *string

Multicast group to disassociate. Only for update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_fuota_task#disassociate_multicast_group IotwirelessFuotaTask#disassociate_multicast_group}

---

##### `DisassociateWirelessDevice`<sup>Optional</sup> <a name="DisassociateWirelessDevice" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.disassociateWirelessDevice"></a>

```go
DisassociateWirelessDevice *string
```

- *Type:* *string

Wireless device to disassociate. Only for update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_fuota_task#disassociate_wireless_device IotwirelessFuotaTask#disassociate_wireless_device}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of FUOTA task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_fuota_task#name IotwirelessFuotaTask#name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A list of key-value pairs that contain metadata for the FUOTA task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_fuota_task#tags IotwirelessFuotaTask#tags}

---

### IotwirelessFuotaTaskLoRaWan <a name="IotwirelessFuotaTaskLoRaWan" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelessfuotatask"

&iotwirelessfuotatask.IotwirelessFuotaTaskLoRaWan {
	RfRegion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan.property.rfRegion">RfRegion</a></code> | <code>*string</code> | FUOTA task LoRaWAN RF region. |

---

##### `RfRegion`<sup>Required</sup> <a name="RfRegion" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan.property.rfRegion"></a>

```go
RfRegion *string
```

- *Type:* *string

FUOTA task LoRaWAN RF region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_fuota_task#rf_region IotwirelessFuotaTask#rf_region}

---

### IotwirelessFuotaTaskTags <a name="IotwirelessFuotaTaskTags" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelessfuotatask"

&iotwirelessfuotatask.IotwirelessFuotaTaskTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_fuota_task#key IotwirelessFuotaTask#key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_fuota_task#value IotwirelessFuotaTask#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_fuota_task#key IotwirelessFuotaTask#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_fuota_task#value IotwirelessFuotaTask#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessFuotaTaskLoRaWanOutputReference <a name="IotwirelessFuotaTaskLoRaWanOutputReference" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelessfuotatask"

iotwirelessfuotatask.NewIotwirelessFuotaTaskLoRaWanOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotwirelessFuotaTaskLoRaWanOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.rfRegionInput">RfRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.rfRegion">RfRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `RfRegionInput`<sup>Optional</sup> <a name="RfRegionInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.rfRegionInput"></a>

```go
func RfRegionInput() *string
```

- *Type:* *string

---

##### `RfRegion`<sup>Required</sup> <a name="RfRegion" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.rfRegion"></a>

```go
func RfRegion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotwirelessFuotaTaskTagsList <a name="IotwirelessFuotaTaskTagsList" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelessfuotatask"

iotwirelessfuotatask.NewIotwirelessFuotaTaskTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotwirelessFuotaTaskTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.get"></a>

```go
func Get(index *f64) IotwirelessFuotaTaskTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotwirelessFuotaTaskTagsOutputReference <a name="IotwirelessFuotaTaskTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelessfuotatask"

iotwirelessfuotatask.NewIotwirelessFuotaTaskTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotwirelessFuotaTaskTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



