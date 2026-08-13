# `iotwirelessDeviceProfile` Submodule <a name="`iotwirelessDeviceProfile` Submodule" id="@cdktn/provider-awscc.iotwirelessDeviceProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessDeviceProfile <a name="IotwirelessDeviceProfile" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile awscc_iotwireless_device_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelessdeviceprofile"

iotwirelessdeviceprofile.NewIotwirelessDeviceProfile(scope Construct, id *string, config IotwirelessDeviceProfileConfig) IotwirelessDeviceProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig">IotwirelessDeviceProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig">IotwirelessDeviceProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.putLoRaWan">PutLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetLoRaWan">ResetLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLoRaWan` <a name="PutLoRaWan" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.putLoRaWan"></a>

```go
func PutLoRaWan(value IotwirelessDeviceProfileLoRaWan)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.putLoRaWan.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan">IotwirelessDeviceProfileLoRaWan</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetLoRaWan` <a name="ResetLoRaWan" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetLoRaWan"></a>

```go
func ResetLoRaWan()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetName"></a>

```go
func ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotwirelessDeviceProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelessdeviceprofile"

iotwirelessdeviceprofile.IotwirelessDeviceProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelessdeviceprofile"

iotwirelessdeviceprofile.IotwirelessDeviceProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelessdeviceprofile"

iotwirelessdeviceprofile.IotwirelessDeviceProfile_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelessdeviceprofile"

iotwirelessdeviceprofile.IotwirelessDeviceProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IotwirelessDeviceProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IotwirelessDeviceProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IotwirelessDeviceProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessDeviceProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.deviceProfileId">DeviceProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.loRaWan">LoRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference">IotwirelessDeviceProfileLoRaWanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList">IotwirelessDeviceProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.loRaWanInput">LoRaWanInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DeviceProfileId`<sup>Required</sup> <a name="DeviceProfileId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.deviceProfileId"></a>

```go
func DeviceProfileId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LoRaWan`<sup>Required</sup> <a name="LoRaWan" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.loRaWan"></a>

```go
func LoRaWan() IotwirelessDeviceProfileLoRaWanOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference">IotwirelessDeviceProfileLoRaWanOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.tags"></a>

```go
func Tags() IotwirelessDeviceProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList">IotwirelessDeviceProfileTagsList</a>

---

##### `LoRaWanInput`<sup>Optional</sup> <a name="LoRaWanInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.loRaWanInput"></a>

```go
func LoRaWanInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessDeviceProfileConfig <a name="IotwirelessDeviceProfileConfig" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelessdeviceprofile"

&iotwirelessdeviceprofile.IotwirelessDeviceProfileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	LoRaWan: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan,
	Name: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.loRaWan">LoRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan">IotwirelessDeviceProfileLoRaWan</a></code> | LoRaWANDeviceProfile supports all LoRa specific attributes for service profile for CreateDeviceProfile operation. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.name">Name</a></code> | <code>*string</code> | Name of service profile. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A list of key-value pairs that contain metadata for the device profile. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LoRaWan`<sup>Optional</sup> <a name="LoRaWan" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.loRaWan"></a>

```go
LoRaWan IotwirelessDeviceProfileLoRaWan
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan">IotwirelessDeviceProfileLoRaWan</a>

LoRaWANDeviceProfile supports all LoRa specific attributes for service profile for CreateDeviceProfile operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#lo_ra_wan IotwirelessDeviceProfile#lo_ra_wan}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of service profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#name IotwirelessDeviceProfile#name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A list of key-value pairs that contain metadata for the device profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#tags IotwirelessDeviceProfile#tags}

---

### IotwirelessDeviceProfileLoRaWan <a name="IotwirelessDeviceProfileLoRaWan" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelessdeviceprofile"

&iotwirelessdeviceprofile.IotwirelessDeviceProfileLoRaWan {
	ClassBTimeout: *f64,
	ClassCTimeout: *f64,
	FactoryPresetFreqsList: *[]*f64,
	MacVersion: *string,
	MaxDutyCycle: *f64,
	MaxEirp: *f64,
	PingSlotDr: *f64,
	PingSlotFreq: *f64,
	PingSlotPeriod: *f64,
	RegParamsRevision: *string,
	RfRegion: *string,
	RxDataRate2: *f64,
	RxDelay1: *f64,
	RxDrOffset1: *f64,
	RxFreq2: *f64,
	Supports32BitFCnt: interface{},
	SupportsClassB: interface{},
	SupportsClassC: interface{},
	SupportsJoin: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.classBTimeout">ClassBTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#class_b_timeout IotwirelessDeviceProfile#class_b_timeout}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.classCTimeout">ClassCTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#class_c_timeout IotwirelessDeviceProfile#class_c_timeout}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.factoryPresetFreqsList">FactoryPresetFreqsList</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#factory_preset_freqs_list IotwirelessDeviceProfile#factory_preset_freqs_list}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.macVersion">MacVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#mac_version IotwirelessDeviceProfile#mac_version}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.maxDutyCycle">MaxDutyCycle</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#max_duty_cycle IotwirelessDeviceProfile#max_duty_cycle}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.maxEirp">MaxEirp</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#max_eirp IotwirelessDeviceProfile#max_eirp}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.pingSlotDr">PingSlotDr</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#ping_slot_dr IotwirelessDeviceProfile#ping_slot_dr}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.pingSlotFreq">PingSlotFreq</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#ping_slot_freq IotwirelessDeviceProfile#ping_slot_freq}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.pingSlotPeriod">PingSlotPeriod</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#ping_slot_period IotwirelessDeviceProfile#ping_slot_period}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.regParamsRevision">RegParamsRevision</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#reg_params_revision IotwirelessDeviceProfile#reg_params_revision}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rfRegion">RfRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#rf_region IotwirelessDeviceProfile#rf_region}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxDataRate2">RxDataRate2</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#rx_data_rate_2 IotwirelessDeviceProfile#rx_data_rate_2}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxDelay1">RxDelay1</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#rx_delay_1 IotwirelessDeviceProfile#rx_delay_1}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxDrOffset1">RxDrOffset1</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#rx_dr_offset_1 IotwirelessDeviceProfile#rx_dr_offset_1}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxFreq2">RxFreq2</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#rx_freq_2 IotwirelessDeviceProfile#rx_freq_2}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supports32BitFCnt">Supports32BitFCnt</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#supports_32_bit_f_cnt IotwirelessDeviceProfile#supports_32_bit_f_cnt}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supportsClassB">SupportsClassB</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#supports_class_b IotwirelessDeviceProfile#supports_class_b}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supportsClassC">SupportsClassC</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#supports_class_c IotwirelessDeviceProfile#supports_class_c}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supportsJoin">SupportsJoin</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#supports_join IotwirelessDeviceProfile#supports_join}. |

---

##### `ClassBTimeout`<sup>Optional</sup> <a name="ClassBTimeout" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.classBTimeout"></a>

```go
ClassBTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#class_b_timeout IotwirelessDeviceProfile#class_b_timeout}.

---

##### `ClassCTimeout`<sup>Optional</sup> <a name="ClassCTimeout" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.classCTimeout"></a>

```go
ClassCTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#class_c_timeout IotwirelessDeviceProfile#class_c_timeout}.

---

##### `FactoryPresetFreqsList`<sup>Optional</sup> <a name="FactoryPresetFreqsList" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.factoryPresetFreqsList"></a>

```go
FactoryPresetFreqsList *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#factory_preset_freqs_list IotwirelessDeviceProfile#factory_preset_freqs_list}.

---

##### `MacVersion`<sup>Optional</sup> <a name="MacVersion" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.macVersion"></a>

```go
MacVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#mac_version IotwirelessDeviceProfile#mac_version}.

---

##### `MaxDutyCycle`<sup>Optional</sup> <a name="MaxDutyCycle" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.maxDutyCycle"></a>

```go
MaxDutyCycle *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#max_duty_cycle IotwirelessDeviceProfile#max_duty_cycle}.

---

##### `MaxEirp`<sup>Optional</sup> <a name="MaxEirp" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.maxEirp"></a>

```go
MaxEirp *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#max_eirp IotwirelessDeviceProfile#max_eirp}.

---

##### `PingSlotDr`<sup>Optional</sup> <a name="PingSlotDr" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.pingSlotDr"></a>

```go
PingSlotDr *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#ping_slot_dr IotwirelessDeviceProfile#ping_slot_dr}.

---

##### `PingSlotFreq`<sup>Optional</sup> <a name="PingSlotFreq" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.pingSlotFreq"></a>

```go
PingSlotFreq *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#ping_slot_freq IotwirelessDeviceProfile#ping_slot_freq}.

---

##### `PingSlotPeriod`<sup>Optional</sup> <a name="PingSlotPeriod" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.pingSlotPeriod"></a>

```go
PingSlotPeriod *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#ping_slot_period IotwirelessDeviceProfile#ping_slot_period}.

---

##### `RegParamsRevision`<sup>Optional</sup> <a name="RegParamsRevision" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.regParamsRevision"></a>

```go
RegParamsRevision *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#reg_params_revision IotwirelessDeviceProfile#reg_params_revision}.

---

##### `RfRegion`<sup>Optional</sup> <a name="RfRegion" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rfRegion"></a>

```go
RfRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#rf_region IotwirelessDeviceProfile#rf_region}.

---

##### `RxDataRate2`<sup>Optional</sup> <a name="RxDataRate2" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxDataRate2"></a>

```go
RxDataRate2 *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#rx_data_rate_2 IotwirelessDeviceProfile#rx_data_rate_2}.

---

##### `RxDelay1`<sup>Optional</sup> <a name="RxDelay1" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxDelay1"></a>

```go
RxDelay1 *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#rx_delay_1 IotwirelessDeviceProfile#rx_delay_1}.

---

##### `RxDrOffset1`<sup>Optional</sup> <a name="RxDrOffset1" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxDrOffset1"></a>

```go
RxDrOffset1 *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#rx_dr_offset_1 IotwirelessDeviceProfile#rx_dr_offset_1}.

---

##### `RxFreq2`<sup>Optional</sup> <a name="RxFreq2" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxFreq2"></a>

```go
RxFreq2 *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#rx_freq_2 IotwirelessDeviceProfile#rx_freq_2}.

---

##### `Supports32BitFCnt`<sup>Optional</sup> <a name="Supports32BitFCnt" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supports32BitFCnt"></a>

```go
Supports32BitFCnt interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#supports_32_bit_f_cnt IotwirelessDeviceProfile#supports_32_bit_f_cnt}.

---

##### `SupportsClassB`<sup>Optional</sup> <a name="SupportsClassB" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supportsClassB"></a>

```go
SupportsClassB interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#supports_class_b IotwirelessDeviceProfile#supports_class_b}.

---

##### `SupportsClassC`<sup>Optional</sup> <a name="SupportsClassC" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supportsClassC"></a>

```go
SupportsClassC interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#supports_class_c IotwirelessDeviceProfile#supports_class_c}.

---

##### `SupportsJoin`<sup>Optional</sup> <a name="SupportsJoin" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supportsJoin"></a>

```go
SupportsJoin interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#supports_join IotwirelessDeviceProfile#supports_join}.

---

### IotwirelessDeviceProfileTags <a name="IotwirelessDeviceProfileTags" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelessdeviceprofile"

&iotwirelessdeviceprofile.IotwirelessDeviceProfileTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#key IotwirelessDeviceProfile#key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#value IotwirelessDeviceProfile#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#key IotwirelessDeviceProfile#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_device_profile#value IotwirelessDeviceProfile#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessDeviceProfileLoRaWanOutputReference <a name="IotwirelessDeviceProfileLoRaWanOutputReference" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelessdeviceprofile"

iotwirelessdeviceprofile.NewIotwirelessDeviceProfileLoRaWanOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotwirelessDeviceProfileLoRaWanOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetClassBTimeout">ResetClassBTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetClassCTimeout">ResetClassCTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetFactoryPresetFreqsList">ResetFactoryPresetFreqsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetMacVersion">ResetMacVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetMaxDutyCycle">ResetMaxDutyCycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetMaxEirp">ResetMaxEirp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetPingSlotDr">ResetPingSlotDr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetPingSlotFreq">ResetPingSlotFreq</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetPingSlotPeriod">ResetPingSlotPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRegParamsRevision">ResetRegParamsRevision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRfRegion">ResetRfRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxDataRate2">ResetRxDataRate2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxDelay1">ResetRxDelay1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxDrOffset1">ResetRxDrOffset1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxFreq2">ResetRxFreq2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupports32BitFCnt">ResetSupports32BitFCnt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupportsClassB">ResetSupportsClassB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupportsClassC">ResetSupportsClassC</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupportsJoin">ResetSupportsJoin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClassBTimeout` <a name="ResetClassBTimeout" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetClassBTimeout"></a>

```go
func ResetClassBTimeout()
```

##### `ResetClassCTimeout` <a name="ResetClassCTimeout" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetClassCTimeout"></a>

```go
func ResetClassCTimeout()
```

##### `ResetFactoryPresetFreqsList` <a name="ResetFactoryPresetFreqsList" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetFactoryPresetFreqsList"></a>

```go
func ResetFactoryPresetFreqsList()
```

##### `ResetMacVersion` <a name="ResetMacVersion" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetMacVersion"></a>

```go
func ResetMacVersion()
```

##### `ResetMaxDutyCycle` <a name="ResetMaxDutyCycle" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetMaxDutyCycle"></a>

```go
func ResetMaxDutyCycle()
```

##### `ResetMaxEirp` <a name="ResetMaxEirp" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetMaxEirp"></a>

```go
func ResetMaxEirp()
```

##### `ResetPingSlotDr` <a name="ResetPingSlotDr" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetPingSlotDr"></a>

```go
func ResetPingSlotDr()
```

##### `ResetPingSlotFreq` <a name="ResetPingSlotFreq" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetPingSlotFreq"></a>

```go
func ResetPingSlotFreq()
```

##### `ResetPingSlotPeriod` <a name="ResetPingSlotPeriod" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetPingSlotPeriod"></a>

```go
func ResetPingSlotPeriod()
```

##### `ResetRegParamsRevision` <a name="ResetRegParamsRevision" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRegParamsRevision"></a>

```go
func ResetRegParamsRevision()
```

##### `ResetRfRegion` <a name="ResetRfRegion" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRfRegion"></a>

```go
func ResetRfRegion()
```

##### `ResetRxDataRate2` <a name="ResetRxDataRate2" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxDataRate2"></a>

```go
func ResetRxDataRate2()
```

##### `ResetRxDelay1` <a name="ResetRxDelay1" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxDelay1"></a>

```go
func ResetRxDelay1()
```

##### `ResetRxDrOffset1` <a name="ResetRxDrOffset1" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxDrOffset1"></a>

```go
func ResetRxDrOffset1()
```

##### `ResetRxFreq2` <a name="ResetRxFreq2" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxFreq2"></a>

```go
func ResetRxFreq2()
```

##### `ResetSupports32BitFCnt` <a name="ResetSupports32BitFCnt" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupports32BitFCnt"></a>

```go
func ResetSupports32BitFCnt()
```

##### `ResetSupportsClassB` <a name="ResetSupportsClassB" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupportsClassB"></a>

```go
func ResetSupportsClassB()
```

##### `ResetSupportsClassC` <a name="ResetSupportsClassC" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupportsClassC"></a>

```go
func ResetSupportsClassC()
```

##### `ResetSupportsJoin` <a name="ResetSupportsJoin" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupportsJoin"></a>

```go
func ResetSupportsJoin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classBTimeoutInput">ClassBTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classCTimeoutInput">ClassCTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.factoryPresetFreqsListInput">FactoryPresetFreqsListInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.macVersionInput">MacVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxDutyCycleInput">MaxDutyCycleInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxEirpInput">MaxEirpInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotDrInput">PingSlotDrInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotFreqInput">PingSlotFreqInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotPeriodInput">PingSlotPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.regParamsRevisionInput">RegParamsRevisionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rfRegionInput">RfRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDataRate2Input">RxDataRate2Input</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDelay1Input">RxDelay1Input</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDrOffset1Input">RxDrOffset1Input</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxFreq2Input">RxFreq2Input</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supports32BitFCntInput">Supports32BitFCntInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassBInput">SupportsClassBInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassCInput">SupportsClassCInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsJoinInput">SupportsJoinInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classBTimeout">ClassBTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classCTimeout">ClassCTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.factoryPresetFreqsList">FactoryPresetFreqsList</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.macVersion">MacVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxDutyCycle">MaxDutyCycle</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxEirp">MaxEirp</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotDr">PingSlotDr</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotFreq">PingSlotFreq</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotPeriod">PingSlotPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.regParamsRevision">RegParamsRevision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rfRegion">RfRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDataRate2">RxDataRate2</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDelay1">RxDelay1</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDrOffset1">RxDrOffset1</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxFreq2">RxFreq2</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supports32BitFCnt">Supports32BitFCnt</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassB">SupportsClassB</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassC">SupportsClassC</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsJoin">SupportsJoin</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClassBTimeoutInput`<sup>Optional</sup> <a name="ClassBTimeoutInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classBTimeoutInput"></a>

```go
func ClassBTimeoutInput() *f64
```

- *Type:* *f64

---

##### `ClassCTimeoutInput`<sup>Optional</sup> <a name="ClassCTimeoutInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classCTimeoutInput"></a>

```go
func ClassCTimeoutInput() *f64
```

- *Type:* *f64

---

##### `FactoryPresetFreqsListInput`<sup>Optional</sup> <a name="FactoryPresetFreqsListInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.factoryPresetFreqsListInput"></a>

```go
func FactoryPresetFreqsListInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `MacVersionInput`<sup>Optional</sup> <a name="MacVersionInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.macVersionInput"></a>

```go
func MacVersionInput() *string
```

- *Type:* *string

---

##### `MaxDutyCycleInput`<sup>Optional</sup> <a name="MaxDutyCycleInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxDutyCycleInput"></a>

```go
func MaxDutyCycleInput() *f64
```

- *Type:* *f64

---

##### `MaxEirpInput`<sup>Optional</sup> <a name="MaxEirpInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxEirpInput"></a>

```go
func MaxEirpInput() *f64
```

- *Type:* *f64

---

##### `PingSlotDrInput`<sup>Optional</sup> <a name="PingSlotDrInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotDrInput"></a>

```go
func PingSlotDrInput() *f64
```

- *Type:* *f64

---

##### `PingSlotFreqInput`<sup>Optional</sup> <a name="PingSlotFreqInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotFreqInput"></a>

```go
func PingSlotFreqInput() *f64
```

- *Type:* *f64

---

##### `PingSlotPeriodInput`<sup>Optional</sup> <a name="PingSlotPeriodInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotPeriodInput"></a>

```go
func PingSlotPeriodInput() *f64
```

- *Type:* *f64

---

##### `RegParamsRevisionInput`<sup>Optional</sup> <a name="RegParamsRevisionInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.regParamsRevisionInput"></a>

```go
func RegParamsRevisionInput() *string
```

- *Type:* *string

---

##### `RfRegionInput`<sup>Optional</sup> <a name="RfRegionInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rfRegionInput"></a>

```go
func RfRegionInput() *string
```

- *Type:* *string

---

##### `RxDataRate2Input`<sup>Optional</sup> <a name="RxDataRate2Input" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDataRate2Input"></a>

```go
func RxDataRate2Input() *f64
```

- *Type:* *f64

---

##### `RxDelay1Input`<sup>Optional</sup> <a name="RxDelay1Input" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDelay1Input"></a>

```go
func RxDelay1Input() *f64
```

- *Type:* *f64

---

##### `RxDrOffset1Input`<sup>Optional</sup> <a name="RxDrOffset1Input" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDrOffset1Input"></a>

```go
func RxDrOffset1Input() *f64
```

- *Type:* *f64

---

##### `RxFreq2Input`<sup>Optional</sup> <a name="RxFreq2Input" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxFreq2Input"></a>

```go
func RxFreq2Input() *f64
```

- *Type:* *f64

---

##### `Supports32BitFCntInput`<sup>Optional</sup> <a name="Supports32BitFCntInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supports32BitFCntInput"></a>

```go
func Supports32BitFCntInput() interface{}
```

- *Type:* interface{}

---

##### `SupportsClassBInput`<sup>Optional</sup> <a name="SupportsClassBInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassBInput"></a>

```go
func SupportsClassBInput() interface{}
```

- *Type:* interface{}

---

##### `SupportsClassCInput`<sup>Optional</sup> <a name="SupportsClassCInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassCInput"></a>

```go
func SupportsClassCInput() interface{}
```

- *Type:* interface{}

---

##### `SupportsJoinInput`<sup>Optional</sup> <a name="SupportsJoinInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsJoinInput"></a>

```go
func SupportsJoinInput() interface{}
```

- *Type:* interface{}

---

##### `ClassBTimeout`<sup>Required</sup> <a name="ClassBTimeout" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classBTimeout"></a>

```go
func ClassBTimeout() *f64
```

- *Type:* *f64

---

##### `ClassCTimeout`<sup>Required</sup> <a name="ClassCTimeout" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classCTimeout"></a>

```go
func ClassCTimeout() *f64
```

- *Type:* *f64

---

##### `FactoryPresetFreqsList`<sup>Required</sup> <a name="FactoryPresetFreqsList" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.factoryPresetFreqsList"></a>

```go
func FactoryPresetFreqsList() *[]*f64
```

- *Type:* *[]*f64

---

##### `MacVersion`<sup>Required</sup> <a name="MacVersion" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.macVersion"></a>

```go
func MacVersion() *string
```

- *Type:* *string

---

##### `MaxDutyCycle`<sup>Required</sup> <a name="MaxDutyCycle" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxDutyCycle"></a>

```go
func MaxDutyCycle() *f64
```

- *Type:* *f64

---

##### `MaxEirp`<sup>Required</sup> <a name="MaxEirp" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxEirp"></a>

```go
func MaxEirp() *f64
```

- *Type:* *f64

---

##### `PingSlotDr`<sup>Required</sup> <a name="PingSlotDr" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotDr"></a>

```go
func PingSlotDr() *f64
```

- *Type:* *f64

---

##### `PingSlotFreq`<sup>Required</sup> <a name="PingSlotFreq" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotFreq"></a>

```go
func PingSlotFreq() *f64
```

- *Type:* *f64

---

##### `PingSlotPeriod`<sup>Required</sup> <a name="PingSlotPeriod" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotPeriod"></a>

```go
func PingSlotPeriod() *f64
```

- *Type:* *f64

---

##### `RegParamsRevision`<sup>Required</sup> <a name="RegParamsRevision" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.regParamsRevision"></a>

```go
func RegParamsRevision() *string
```

- *Type:* *string

---

##### `RfRegion`<sup>Required</sup> <a name="RfRegion" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rfRegion"></a>

```go
func RfRegion() *string
```

- *Type:* *string

---

##### `RxDataRate2`<sup>Required</sup> <a name="RxDataRate2" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDataRate2"></a>

```go
func RxDataRate2() *f64
```

- *Type:* *f64

---

##### `RxDelay1`<sup>Required</sup> <a name="RxDelay1" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDelay1"></a>

```go
func RxDelay1() *f64
```

- *Type:* *f64

---

##### `RxDrOffset1`<sup>Required</sup> <a name="RxDrOffset1" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDrOffset1"></a>

```go
func RxDrOffset1() *f64
```

- *Type:* *f64

---

##### `RxFreq2`<sup>Required</sup> <a name="RxFreq2" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxFreq2"></a>

```go
func RxFreq2() *f64
```

- *Type:* *f64

---

##### `Supports32BitFCnt`<sup>Required</sup> <a name="Supports32BitFCnt" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supports32BitFCnt"></a>

```go
func Supports32BitFCnt() interface{}
```

- *Type:* interface{}

---

##### `SupportsClassB`<sup>Required</sup> <a name="SupportsClassB" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassB"></a>

```go
func SupportsClassB() interface{}
```

- *Type:* interface{}

---

##### `SupportsClassC`<sup>Required</sup> <a name="SupportsClassC" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassC"></a>

```go
func SupportsClassC() interface{}
```

- *Type:* interface{}

---

##### `SupportsJoin`<sup>Required</sup> <a name="SupportsJoin" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsJoin"></a>

```go
func SupportsJoin() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotwirelessDeviceProfileTagsList <a name="IotwirelessDeviceProfileTagsList" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelessdeviceprofile"

iotwirelessdeviceprofile.NewIotwirelessDeviceProfileTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotwirelessDeviceProfileTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.get"></a>

```go
func Get(index *f64) IotwirelessDeviceProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotwirelessDeviceProfileTagsOutputReference <a name="IotwirelessDeviceProfileTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelessdeviceprofile"

iotwirelessdeviceprofile.NewIotwirelessDeviceProfileTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotwirelessDeviceProfileTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



