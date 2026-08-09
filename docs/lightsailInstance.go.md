# `lightsailInstance` Submodule <a name="`lightsailInstance` Submodule" id="@cdktn/provider-awscc.lightsailInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailInstance <a name="LightsailInstance" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance awscc_lightsail_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailinstance"

lightsailinstance.NewLightsailInstance(scope Construct, id *string, config LightsailInstanceConfig) LightsailInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig">LightsailInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig">LightsailInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putAddOns">PutAddOns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putHardware">PutHardware</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putLocation">PutLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putNetworking">PutNetworking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putState">PutState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetAddOns">ResetAddOns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetHardware">ResetHardware</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetKeyPairName">ResetKeyPairName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetNetworking">ResetNetworking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetUserData">ResetUserData</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAddOns` <a name="PutAddOns" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putAddOns"></a>

```go
func PutAddOns(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putAddOns.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHardware` <a name="PutHardware" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putHardware"></a>

```go
func PutHardware(value LightsailInstanceHardware)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putHardware.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware">LightsailInstanceHardware</a>

---

##### `PutLocation` <a name="PutLocation" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putLocation"></a>

```go
func PutLocation(value LightsailInstanceLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocation">LightsailInstanceLocation</a>

---

##### `PutNetworking` <a name="PutNetworking" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putNetworking"></a>

```go
func PutNetworking(value LightsailInstanceNetworking)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putNetworking.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking">LightsailInstanceNetworking</a>

---

##### `PutState` <a name="PutState" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putState"></a>

```go
func PutState(value LightsailInstanceState)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putState.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceState">LightsailInstanceState</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAddOns` <a name="ResetAddOns" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetAddOns"></a>

```go
func ResetAddOns()
```

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetHardware` <a name="ResetHardware" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetHardware"></a>

```go
func ResetHardware()
```

##### `ResetKeyPairName` <a name="ResetKeyPairName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetKeyPairName"></a>

```go
func ResetKeyPairName()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetNetworking` <a name="ResetNetworking" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetNetworking"></a>

```go
func ResetNetworking()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetState"></a>

```go
func ResetState()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetTags"></a>

```go
func ResetTags()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetUserData"></a>

```go
func ResetUserData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LightsailInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailinstance"

lightsailinstance.LightsailInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailinstance"

lightsailinstance.LightsailInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailinstance"

lightsailinstance.LightsailInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailinstance"

lightsailinstance.LightsailInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LightsailInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LightsailInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LightsailInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LightsailInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.addOns">AddOns</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList">LightsailInstanceAddOnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.hardware">Hardware</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference">LightsailInstanceHardwareOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.ipv6Addresses">Ipv6Addresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.isStaticIp">IsStaticIp</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference">LightsailInstanceLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.networking">Networking</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference">LightsailInstanceNetworkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.privateIpAddress">PrivateIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.publicIpAddress">PublicIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.sshKeyName">SshKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.state">State</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference">LightsailInstanceStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.supportCode">SupportCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList">LightsailInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.addOnsInput">AddOnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.blueprintIdInput">BlueprintIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.bundleIdInput">BundleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.hardwareInput">HardwareInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.instanceNameInput">InstanceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.keyPairNameInput">KeyPairNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.locationInput">LocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.networkingInput">NetworkingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.stateInput">StateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.userDataInput">UserDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.blueprintId">BlueprintId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.bundleId">BundleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.instanceName">InstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.keyPairName">KeyPairName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.userData">UserData</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AddOns`<sup>Required</sup> <a name="AddOns" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.addOns"></a>

```go
func AddOns() LightsailInstanceAddOnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList">LightsailInstanceAddOnsList</a>

---

##### `Hardware`<sup>Required</sup> <a name="Hardware" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.hardware"></a>

```go
func Hardware() LightsailInstanceHardwareOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference">LightsailInstanceHardwareOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.instanceArn"></a>

```go
func InstanceArn() *string
```

- *Type:* *string

---

##### `Ipv6Addresses`<sup>Required</sup> <a name="Ipv6Addresses" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.ipv6Addresses"></a>

```go
func Ipv6Addresses() *[]*string
```

- *Type:* *[]*string

---

##### `IsStaticIp`<sup>Required</sup> <a name="IsStaticIp" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.isStaticIp"></a>

```go
func IsStaticIp() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.location"></a>

```go
func Location() LightsailInstanceLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference">LightsailInstanceLocationOutputReference</a>

---

##### `Networking`<sup>Required</sup> <a name="Networking" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.networking"></a>

```go
func Networking() LightsailInstanceNetworkingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference">LightsailInstanceNetworkingOutputReference</a>

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.privateIpAddress"></a>

```go
func PrivateIpAddress() *string
```

- *Type:* *string

---

##### `PublicIpAddress`<sup>Required</sup> <a name="PublicIpAddress" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.publicIpAddress"></a>

```go
func PublicIpAddress() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `SshKeyName`<sup>Required</sup> <a name="SshKeyName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.sshKeyName"></a>

```go
func SshKeyName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.state"></a>

```go
func State() LightsailInstanceStateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference">LightsailInstanceStateOutputReference</a>

---

##### `SupportCode`<sup>Required</sup> <a name="SupportCode" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.supportCode"></a>

```go
func SupportCode() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.tags"></a>

```go
func Tags() LightsailInstanceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList">LightsailInstanceTagsList</a>

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `AddOnsInput`<sup>Optional</sup> <a name="AddOnsInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.addOnsInput"></a>

```go
func AddOnsInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `BlueprintIdInput`<sup>Optional</sup> <a name="BlueprintIdInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.blueprintIdInput"></a>

```go
func BlueprintIdInput() *string
```

- *Type:* *string

---

##### `BundleIdInput`<sup>Optional</sup> <a name="BundleIdInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.bundleIdInput"></a>

```go
func BundleIdInput() *string
```

- *Type:* *string

---

##### `HardwareInput`<sup>Optional</sup> <a name="HardwareInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.hardwareInput"></a>

```go
func HardwareInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.instanceNameInput"></a>

```go
func InstanceNameInput() *string
```

- *Type:* *string

---

##### `KeyPairNameInput`<sup>Optional</sup> <a name="KeyPairNameInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.keyPairNameInput"></a>

```go
func KeyPairNameInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.locationInput"></a>

```go
func LocationInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkingInput`<sup>Optional</sup> <a name="NetworkingInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.networkingInput"></a>

```go
func NetworkingInput() interface{}
```

- *Type:* interface{}

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.stateInput"></a>

```go
func StateInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.userDataInput"></a>

```go
func UserDataInput() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `BlueprintId`<sup>Required</sup> <a name="BlueprintId" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.blueprintId"></a>

```go
func BlueprintId() *string
```

- *Type:* *string

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.bundleId"></a>

```go
func BundleId() *string
```

- *Type:* *string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.instanceName"></a>

```go
func InstanceName() *string
```

- *Type:* *string

---

##### `KeyPairName`<sup>Required</sup> <a name="KeyPairName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.keyPairName"></a>

```go
func KeyPairName() *string
```

- *Type:* *string

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.userData"></a>

```go
func UserData() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailInstanceAddOns <a name="LightsailInstanceAddOns" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailinstance"

&lightsailinstance.LightsailInstanceAddOns {
	AddOnType: *string,
	AutoSnapshotAddOnRequest: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns.property.addOnType">AddOnType</a></code> | <code>*string</code> | The add-on type. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns.property.autoSnapshotAddOnRequest">AutoSnapshotAddOnRequest</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest">LightsailInstanceAddOnsAutoSnapshotAddOnRequest</a></code> | An object that represents additional parameters when enabling or modifying the automatic snapshot add-on. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns.property.status">Status</a></code> | <code>*string</code> | Status of the Addon. |

---

##### `AddOnType`<sup>Optional</sup> <a name="AddOnType" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns.property.addOnType"></a>

```go
AddOnType *string
```

- *Type:* *string

The add-on type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#add_on_type LightsailInstance#add_on_type}

---

##### `AutoSnapshotAddOnRequest`<sup>Optional</sup> <a name="AutoSnapshotAddOnRequest" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns.property.autoSnapshotAddOnRequest"></a>

```go
AutoSnapshotAddOnRequest LightsailInstanceAddOnsAutoSnapshotAddOnRequest
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest">LightsailInstanceAddOnsAutoSnapshotAddOnRequest</a>

An object that represents additional parameters when enabling or modifying the automatic snapshot add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#auto_snapshot_add_on_request LightsailInstance#auto_snapshot_add_on_request}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns.property.status"></a>

```go
Status *string
```

- *Type:* *string

Status of the Addon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#status LightsailInstance#status}

---

### LightsailInstanceAddOnsAutoSnapshotAddOnRequest <a name="LightsailInstanceAddOnsAutoSnapshotAddOnRequest" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailinstance"

&lightsailinstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest {
	SnapshotTimeOfDay: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest.property.snapshotTimeOfDay">SnapshotTimeOfDay</a></code> | <code>*string</code> | The daily time when an automatic snapshot will be created. |

---

##### `SnapshotTimeOfDay`<sup>Optional</sup> <a name="SnapshotTimeOfDay" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest.property.snapshotTimeOfDay"></a>

```go
SnapshotTimeOfDay *string
```

- *Type:* *string

The daily time when an automatic snapshot will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#snapshot_time_of_day LightsailInstance#snapshot_time_of_day}

---

### LightsailInstanceConfig <a name="LightsailInstanceConfig" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailinstance"

&lightsailinstance.LightsailInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BlueprintId: *string,
	BundleId: *string,
	InstanceName: *string,
	AddOns: interface{},
	AvailabilityZone: *string,
	Hardware: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lightsailInstance.LightsailInstanceHardware,
	KeyPairName: *string,
	Location: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lightsailInstance.LightsailInstanceLocation,
	Networking: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lightsailInstance.LightsailInstanceNetworking,
	State: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lightsailInstance.LightsailInstanceState,
	Tags: interface{},
	UserData: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.blueprintId">BlueprintId</a></code> | <code>*string</code> | The ID for a virtual private server image (e.g., app_wordpress_4_4 or app_lamp_7_0 ). Use the get blueprints operation to return a list of available images (or blueprints ). |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.bundleId">BundleId</a></code> | <code>*string</code> | The bundle of specification information for your virtual private server (or instance ), including the pricing plan (e.g., micro_1_0 ). |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.instanceName">InstanceName</a></code> | <code>*string</code> | The names to use for your new Lightsail instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.addOns">AddOns</a></code> | <code>interface{}</code> | An array of objects representing the add-ons to enable for the new instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | The Availability Zone in which to create your instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.hardware">Hardware</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware">LightsailInstanceHardware</a></code> | Hardware of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.keyPairName">KeyPairName</a></code> | <code>*string</code> | The name of your key pair. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocation">LightsailInstanceLocation</a></code> | Location of a resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.networking">Networking</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking">LightsailInstanceNetworking</a></code> | Networking of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.state">State</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceState">LightsailInstanceState</a></code> | Current State of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.userData">UserData</a></code> | <code>*string</code> | A launch script you can create that configures a server with additional user data. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BlueprintId`<sup>Required</sup> <a name="BlueprintId" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.blueprintId"></a>

```go
BlueprintId *string
```

- *Type:* *string

The ID for a virtual private server image (e.g., app_wordpress_4_4 or app_lamp_7_0 ). Use the get blueprints operation to return a list of available images (or blueprints ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#blueprint_id LightsailInstance#blueprint_id}

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.bundleId"></a>

```go
BundleId *string
```

- *Type:* *string

The bundle of specification information for your virtual private server (or instance ), including the pricing plan (e.g., micro_1_0 ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#bundle_id LightsailInstance#bundle_id}

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.instanceName"></a>

```go
InstanceName *string
```

- *Type:* *string

The names to use for your new Lightsail instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#instance_name LightsailInstance#instance_name}

---

##### `AddOns`<sup>Optional</sup> <a name="AddOns" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.addOns"></a>

```go
AddOns interface{}
```

- *Type:* interface{}

An array of objects representing the add-ons to enable for the new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#add_ons LightsailInstance#add_ons}

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

The Availability Zone in which to create your instance.

Use the following format: us-east-2a (case sensitive). Be sure to add the include Availability Zones parameter to your request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#availability_zone LightsailInstance#availability_zone}

---

##### `Hardware`<sup>Optional</sup> <a name="Hardware" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.hardware"></a>

```go
Hardware LightsailInstanceHardware
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware">LightsailInstanceHardware</a>

Hardware of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#hardware LightsailInstance#hardware}

---

##### `KeyPairName`<sup>Optional</sup> <a name="KeyPairName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.keyPairName"></a>

```go
KeyPairName *string
```

- *Type:* *string

The name of your key pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#key_pair_name LightsailInstance#key_pair_name}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.location"></a>

```go
Location LightsailInstanceLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocation">LightsailInstanceLocation</a>

Location of a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#location LightsailInstance#location}

---

##### `Networking`<sup>Optional</sup> <a name="Networking" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.networking"></a>

```go
Networking LightsailInstanceNetworking
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking">LightsailInstanceNetworking</a>

Networking of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#networking LightsailInstance#networking}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.state"></a>

```go
State LightsailInstanceState
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceState">LightsailInstanceState</a>

Current State of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#state LightsailInstance#state}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#tags LightsailInstance#tags}

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.userData"></a>

```go
UserData *string
```

- *Type:* *string

A launch script you can create that configures a server with additional user data.

For example, you might want to run apt-get -y update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#user_data LightsailInstance#user_data}

---

### LightsailInstanceHardware <a name="LightsailInstanceHardware" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailinstance"

&lightsailinstance.LightsailInstanceHardware {
	Disks: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware.property.disks">Disks</a></code> | <code>interface{}</code> | Disks attached to the Instance. |

---

##### `Disks`<sup>Optional</sup> <a name="Disks" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware.property.disks"></a>

```go
Disks interface{}
```

- *Type:* interface{}

Disks attached to the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#disks LightsailInstance#disks}

---

### LightsailInstanceHardwareDisks <a name="LightsailInstanceHardwareDisks" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailinstance"

&lightsailinstance.LightsailInstanceHardwareDisks {
	AttachedTo: *string,
	AttachmentState: *string,
	DiskName: *string,
	Iops: *f64,
	IsSystemDisk: interface{},
	Path: *string,
	SizeInGb: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.attachedTo">AttachedTo</a></code> | <code>*string</code> | Instance attached to the disk. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.attachmentState">AttachmentState</a></code> | <code>*string</code> | Attachment state of the disk. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.diskName">DiskName</a></code> | <code>*string</code> | The names to use for your new Lightsail disk. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.iops">Iops</a></code> | <code>*f64</code> | IOPS of disk. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.isSystemDisk">IsSystemDisk</a></code> | <code>interface{}</code> | Is the Attached disk is the system disk of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.path">Path</a></code> | <code>*string</code> | Path of the disk attached to the instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.sizeInGb">SizeInGb</a></code> | <code>*string</code> | Size of the disk attached to the Instance. |

---

##### `AttachedTo`<sup>Optional</sup> <a name="AttachedTo" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.attachedTo"></a>

```go
AttachedTo *string
```

- *Type:* *string

Instance attached to the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#attached_to LightsailInstance#attached_to}

---

##### `AttachmentState`<sup>Optional</sup> <a name="AttachmentState" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.attachmentState"></a>

```go
AttachmentState *string
```

- *Type:* *string

Attachment state of the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#attachment_state LightsailInstance#attachment_state}

---

##### `DiskName`<sup>Optional</sup> <a name="DiskName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.diskName"></a>

```go
DiskName *string
```

- *Type:* *string

The names to use for your new Lightsail disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#disk_name LightsailInstance#disk_name}

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

IOPS of disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#iops LightsailInstance#iops}

---

##### `IsSystemDisk`<sup>Optional</sup> <a name="IsSystemDisk" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.isSystemDisk"></a>

```go
IsSystemDisk interface{}
```

- *Type:* interface{}

Is the Attached disk is the system disk of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#is_system_disk LightsailInstance#is_system_disk}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path of the disk attached to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#path LightsailInstance#path}

---

##### `SizeInGb`<sup>Optional</sup> <a name="SizeInGb" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.sizeInGb"></a>

```go
SizeInGb *string
```

- *Type:* *string

Size of the disk attached to the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#size_in_gb LightsailInstance#size_in_gb}

---

### LightsailInstanceLocation <a name="LightsailInstanceLocation" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailinstance"

&lightsailinstance.LightsailInstanceLocation {

}
```


### LightsailInstanceNetworking <a name="LightsailInstanceNetworking" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailinstance"

&lightsailinstance.LightsailInstanceNetworking {
	MonthlyTransfer: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransfer,
	Ports: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking.property.monthlyTransfer">MonthlyTransfer</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransfer">LightsailInstanceNetworkingMonthlyTransfer</a></code> | Monthly Transfer of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking.property.ports">Ports</a></code> | <code>interface{}</code> | Ports to the Instance. |

---

##### `MonthlyTransfer`<sup>Optional</sup> <a name="MonthlyTransfer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking.property.monthlyTransfer"></a>

```go
MonthlyTransfer LightsailInstanceNetworkingMonthlyTransfer
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransfer">LightsailInstanceNetworkingMonthlyTransfer</a>

Monthly Transfer of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#monthly_transfer LightsailInstance#monthly_transfer}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking.property.ports"></a>

```go
Ports interface{}
```

- *Type:* interface{}

Ports to the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#ports LightsailInstance#ports}

---

### LightsailInstanceNetworkingMonthlyTransfer <a name="LightsailInstanceNetworkingMonthlyTransfer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransfer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailinstance"

&lightsailinstance.LightsailInstanceNetworkingMonthlyTransfer {

}
```


### LightsailInstanceNetworkingPorts <a name="LightsailInstanceNetworkingPorts" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailinstance"

&lightsailinstance.LightsailInstanceNetworkingPorts {
	AccessDirection: *string,
	AccessFrom: *string,
	AccessType: *string,
	CidrListAliases: *[]*string,
	Cidrs: *[]*string,
	CommonName: *string,
	FromPort: *f64,
	Ipv6Cidrs: *[]*string,
	Protocol: *string,
	ToPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.accessDirection">AccessDirection</a></code> | <code>*string</code> | Access Direction for Protocol of the Instance(inbound/outbound). |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.accessFrom">AccessFrom</a></code> | <code>*string</code> | Access From Protocol of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.accessType">AccessType</a></code> | <code>*string</code> | Access Type Protocol of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.cidrListAliases">CidrListAliases</a></code> | <code>*[]*string</code> | cidr List Aliases. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.cidrs">Cidrs</a></code> | <code>*[]*string</code> | cidrs. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.commonName">CommonName</a></code> | <code>*string</code> | CommonName for Protocol of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.fromPort">FromPort</a></code> | <code>*f64</code> | From Port of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.ipv6Cidrs">Ipv6Cidrs</a></code> | <code>*[]*string</code> | IPv6 Cidrs. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.protocol">Protocol</a></code> | <code>*string</code> | Port Protocol of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.toPort">ToPort</a></code> | <code>*f64</code> | To Port of the Instance. |

---

##### `AccessDirection`<sup>Optional</sup> <a name="AccessDirection" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.accessDirection"></a>

```go
AccessDirection *string
```

- *Type:* *string

Access Direction for Protocol of the Instance(inbound/outbound).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#access_direction LightsailInstance#access_direction}

---

##### `AccessFrom`<sup>Optional</sup> <a name="AccessFrom" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.accessFrom"></a>

```go
AccessFrom *string
```

- *Type:* *string

Access From Protocol of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#access_from LightsailInstance#access_from}

---

##### `AccessType`<sup>Optional</sup> <a name="AccessType" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.accessType"></a>

```go
AccessType *string
```

- *Type:* *string

Access Type Protocol of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#access_type LightsailInstance#access_type}

---

##### `CidrListAliases`<sup>Optional</sup> <a name="CidrListAliases" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.cidrListAliases"></a>

```go
CidrListAliases *[]*string
```

- *Type:* *[]*string

cidr List Aliases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#cidr_list_aliases LightsailInstance#cidr_list_aliases}

---

##### `Cidrs`<sup>Optional</sup> <a name="Cidrs" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.cidrs"></a>

```go
Cidrs *[]*string
```

- *Type:* *[]*string

cidrs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#cidrs LightsailInstance#cidrs}

---

##### `CommonName`<sup>Optional</sup> <a name="CommonName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.commonName"></a>

```go
CommonName *string
```

- *Type:* *string

CommonName for Protocol of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#common_name LightsailInstance#common_name}

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.fromPort"></a>

```go
FromPort *f64
```

- *Type:* *f64

From Port of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#from_port LightsailInstance#from_port}

---

##### `Ipv6Cidrs`<sup>Optional</sup> <a name="Ipv6Cidrs" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.ipv6Cidrs"></a>

```go
Ipv6Cidrs *[]*string
```

- *Type:* *[]*string

IPv6 Cidrs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#ipv_6_cidrs LightsailInstance#ipv_6_cidrs}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Port Protocol of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#protocol LightsailInstance#protocol}

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.toPort"></a>

```go
ToPort *f64
```

- *Type:* *f64

To Port of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#to_port LightsailInstance#to_port}

---

### LightsailInstanceState <a name="LightsailInstanceState" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceState.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailinstance"

&lightsailinstance.LightsailInstanceState {

}
```


### LightsailInstanceTags <a name="LightsailInstanceTags" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailinstance"

&lightsailinstance.LightsailInstanceTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#key LightsailInstance#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_instance#value LightsailInstance#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference <a name="LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailinstance"

lightsailinstance.NewLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.resetSnapshotTimeOfDay">ResetSnapshotTimeOfDay</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSnapshotTimeOfDay` <a name="ResetSnapshotTimeOfDay" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.resetSnapshotTimeOfDay"></a>

```go
func ResetSnapshotTimeOfDay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.snapshotTimeOfDayInput">SnapshotTimeOfDayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.snapshotTimeOfDay">SnapshotTimeOfDay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SnapshotTimeOfDayInput`<sup>Optional</sup> <a name="SnapshotTimeOfDayInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.snapshotTimeOfDayInput"></a>

```go
func SnapshotTimeOfDayInput() *string
```

- *Type:* *string

---

##### `SnapshotTimeOfDay`<sup>Required</sup> <a name="SnapshotTimeOfDay" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.snapshotTimeOfDay"></a>

```go
func SnapshotTimeOfDay() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailInstanceAddOnsList <a name="LightsailInstanceAddOnsList" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailinstance"

lightsailinstance.NewLightsailInstanceAddOnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LightsailInstanceAddOnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.get"></a>

```go
func Get(index *f64) LightsailInstanceAddOnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailInstanceAddOnsOutputReference <a name="LightsailInstanceAddOnsOutputReference" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailinstance"

lightsailinstance.NewLightsailInstanceAddOnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LightsailInstanceAddOnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.putAutoSnapshotAddOnRequest">PutAutoSnapshotAddOnRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.resetAddOnType">ResetAddOnType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.resetAutoSnapshotAddOnRequest">ResetAutoSnapshotAddOnRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoSnapshotAddOnRequest` <a name="PutAutoSnapshotAddOnRequest" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.putAutoSnapshotAddOnRequest"></a>

```go
func PutAutoSnapshotAddOnRequest(value LightsailInstanceAddOnsAutoSnapshotAddOnRequest)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.putAutoSnapshotAddOnRequest.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest">LightsailInstanceAddOnsAutoSnapshotAddOnRequest</a>

---

##### `ResetAddOnType` <a name="ResetAddOnType" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.resetAddOnType"></a>

```go
func ResetAddOnType()
```

##### `ResetAutoSnapshotAddOnRequest` <a name="ResetAutoSnapshotAddOnRequest" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.resetAutoSnapshotAddOnRequest"></a>

```go
func ResetAutoSnapshotAddOnRequest()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.autoSnapshotAddOnRequest">AutoSnapshotAddOnRequest</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference">LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.addOnTypeInput">AddOnTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.autoSnapshotAddOnRequestInput">AutoSnapshotAddOnRequestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.addOnType">AddOnType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoSnapshotAddOnRequest`<sup>Required</sup> <a name="AutoSnapshotAddOnRequest" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.autoSnapshotAddOnRequest"></a>

```go
func AutoSnapshotAddOnRequest() LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference">LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference</a>

---

##### `AddOnTypeInput`<sup>Optional</sup> <a name="AddOnTypeInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.addOnTypeInput"></a>

```go
func AddOnTypeInput() *string
```

- *Type:* *string

---

##### `AutoSnapshotAddOnRequestInput`<sup>Optional</sup> <a name="AutoSnapshotAddOnRequestInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.autoSnapshotAddOnRequestInput"></a>

```go
func AutoSnapshotAddOnRequestInput() interface{}
```

- *Type:* interface{}

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `AddOnType`<sup>Required</sup> <a name="AddOnType" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.addOnType"></a>

```go
func AddOnType() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailInstanceHardwareDisksList <a name="LightsailInstanceHardwareDisksList" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailinstance"

lightsailinstance.NewLightsailInstanceHardwareDisksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LightsailInstanceHardwareDisksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.get"></a>

```go
func Get(index *f64) LightsailInstanceHardwareDisksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailInstanceHardwareDisksOutputReference <a name="LightsailInstanceHardwareDisksOutputReference" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailinstance"

lightsailinstance.NewLightsailInstanceHardwareDisksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LightsailInstanceHardwareDisksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetAttachedTo">ResetAttachedTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetAttachmentState">ResetAttachmentState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetDiskName">ResetDiskName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetIsSystemDisk">ResetIsSystemDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetSizeInGb">ResetSizeInGb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttachedTo` <a name="ResetAttachedTo" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetAttachedTo"></a>

```go
func ResetAttachedTo()
```

##### `ResetAttachmentState` <a name="ResetAttachmentState" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetAttachmentState"></a>

```go
func ResetAttachmentState()
```

##### `ResetDiskName` <a name="ResetDiskName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetDiskName"></a>

```go
func ResetDiskName()
```

##### `ResetIops` <a name="ResetIops" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetIsSystemDisk` <a name="ResetIsSystemDisk" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetIsSystemDisk"></a>

```go
func ResetIsSystemDisk()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetSizeInGb` <a name="ResetSizeInGb" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetSizeInGb"></a>

```go
func ResetSizeInGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.attachedToInput">AttachedToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.attachmentStateInput">AttachmentStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.diskNameInput">DiskNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.isSystemDiskInput">IsSystemDiskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.sizeInGbInput">SizeInGbInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.attachedTo">AttachedTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.attachmentState">AttachmentState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.diskName">DiskName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.isSystemDisk">IsSystemDisk</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.sizeInGb">SizeInGb</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttachedToInput`<sup>Optional</sup> <a name="AttachedToInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.attachedToInput"></a>

```go
func AttachedToInput() *string
```

- *Type:* *string

---

##### `AttachmentStateInput`<sup>Optional</sup> <a name="AttachmentStateInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.attachmentStateInput"></a>

```go
func AttachmentStateInput() *string
```

- *Type:* *string

---

##### `DiskNameInput`<sup>Optional</sup> <a name="DiskNameInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.diskNameInput"></a>

```go
func DiskNameInput() *string
```

- *Type:* *string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `IsSystemDiskInput`<sup>Optional</sup> <a name="IsSystemDiskInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.isSystemDiskInput"></a>

```go
func IsSystemDiskInput() interface{}
```

- *Type:* interface{}

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `SizeInGbInput`<sup>Optional</sup> <a name="SizeInGbInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.sizeInGbInput"></a>

```go
func SizeInGbInput() *string
```

- *Type:* *string

---

##### `AttachedTo`<sup>Required</sup> <a name="AttachedTo" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.attachedTo"></a>

```go
func AttachedTo() *string
```

- *Type:* *string

---

##### `AttachmentState`<sup>Required</sup> <a name="AttachmentState" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.attachmentState"></a>

```go
func AttachmentState() *string
```

- *Type:* *string

---

##### `DiskName`<sup>Required</sup> <a name="DiskName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.diskName"></a>

```go
func DiskName() *string
```

- *Type:* *string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `IsSystemDisk`<sup>Required</sup> <a name="IsSystemDisk" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.isSystemDisk"></a>

```go
func IsSystemDisk() interface{}
```

- *Type:* interface{}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `SizeInGb`<sup>Required</sup> <a name="SizeInGb" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.sizeInGb"></a>

```go
func SizeInGb() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailInstanceHardwareOutputReference <a name="LightsailInstanceHardwareOutputReference" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailinstance"

lightsailinstance.NewLightsailInstanceHardwareOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LightsailInstanceHardwareOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.putDisks">PutDisks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.resetDisks">ResetDisks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDisks` <a name="PutDisks" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.putDisks"></a>

```go
func PutDisks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.putDisks.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisks` <a name="ResetDisks" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.resetDisks"></a>

```go
func ResetDisks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.cpuCount">CpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.disks">Disks</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList">LightsailInstanceHardwareDisksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.ramSizeInGb">RamSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.disksInput">DisksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuCount`<sup>Required</sup> <a name="CpuCount" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.cpuCount"></a>

```go
func CpuCount() *f64
```

- *Type:* *f64

---

##### `Disks`<sup>Required</sup> <a name="Disks" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.disks"></a>

```go
func Disks() LightsailInstanceHardwareDisksList
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList">LightsailInstanceHardwareDisksList</a>

---

##### `RamSizeInGb`<sup>Required</sup> <a name="RamSizeInGb" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.ramSizeInGb"></a>

```go
func RamSizeInGb() *f64
```

- *Type:* *f64

---

##### `DisksInput`<sup>Optional</sup> <a name="DisksInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.disksInput"></a>

```go
func DisksInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailInstanceLocationOutputReference <a name="LightsailInstanceLocationOutputReference" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailinstance"

lightsailinstance.NewLightsailInstanceLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LightsailInstanceLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.property.regionName">RegionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.property.regionName"></a>

```go
func RegionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailInstanceNetworkingMonthlyTransferOutputReference <a name="LightsailInstanceNetworkingMonthlyTransferOutputReference" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailinstance"

lightsailinstance.NewLightsailInstanceNetworkingMonthlyTransferOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LightsailInstanceNetworkingMonthlyTransferOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.property.gbPerMonthAllocated">GbPerMonthAllocated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GbPerMonthAllocated`<sup>Required</sup> <a name="GbPerMonthAllocated" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.property.gbPerMonthAllocated"></a>

```go
func GbPerMonthAllocated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailInstanceNetworkingOutputReference <a name="LightsailInstanceNetworkingOutputReference" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailinstance"

lightsailinstance.NewLightsailInstanceNetworkingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LightsailInstanceNetworkingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.putMonthlyTransfer">PutMonthlyTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.putPorts">PutPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.resetMonthlyTransfer">ResetMonthlyTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMonthlyTransfer` <a name="PutMonthlyTransfer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.putMonthlyTransfer"></a>

```go
func PutMonthlyTransfer(value LightsailInstanceNetworkingMonthlyTransfer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.putMonthlyTransfer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransfer">LightsailInstanceNetworkingMonthlyTransfer</a>

---

##### `PutPorts` <a name="PutPorts" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.putPorts"></a>

```go
func PutPorts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.putPorts.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMonthlyTransfer` <a name="ResetMonthlyTransfer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.resetMonthlyTransfer"></a>

```go
func ResetMonthlyTransfer()
```

##### `ResetPorts` <a name="ResetPorts" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.resetPorts"></a>

```go
func ResetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.monthlyTransfer">MonthlyTransfer</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference">LightsailInstanceNetworkingMonthlyTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.ports">Ports</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList">LightsailInstanceNetworkingPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.monthlyTransferInput">MonthlyTransferInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.portsInput">PortsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MonthlyTransfer`<sup>Required</sup> <a name="MonthlyTransfer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.monthlyTransfer"></a>

```go
func MonthlyTransfer() LightsailInstanceNetworkingMonthlyTransferOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference">LightsailInstanceNetworkingMonthlyTransferOutputReference</a>

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.ports"></a>

```go
func Ports() LightsailInstanceNetworkingPortsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList">LightsailInstanceNetworkingPortsList</a>

---

##### `MonthlyTransferInput`<sup>Optional</sup> <a name="MonthlyTransferInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.monthlyTransferInput"></a>

```go
func MonthlyTransferInput() interface{}
```

- *Type:* interface{}

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.portsInput"></a>

```go
func PortsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailInstanceNetworkingPortsList <a name="LightsailInstanceNetworkingPortsList" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailinstance"

lightsailinstance.NewLightsailInstanceNetworkingPortsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LightsailInstanceNetworkingPortsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.get"></a>

```go
func Get(index *f64) LightsailInstanceNetworkingPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailInstanceNetworkingPortsOutputReference <a name="LightsailInstanceNetworkingPortsOutputReference" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailinstance"

lightsailinstance.NewLightsailInstanceNetworkingPortsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LightsailInstanceNetworkingPortsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetAccessDirection">ResetAccessDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetAccessFrom">ResetAccessFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetAccessType">ResetAccessType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetCidrListAliases">ResetCidrListAliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetCidrs">ResetCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetCommonName">ResetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetIpv6Cidrs">ResetIpv6Cidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessDirection` <a name="ResetAccessDirection" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetAccessDirection"></a>

```go
func ResetAccessDirection()
```

##### `ResetAccessFrom` <a name="ResetAccessFrom" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetAccessFrom"></a>

```go
func ResetAccessFrom()
```

##### `ResetAccessType` <a name="ResetAccessType" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetAccessType"></a>

```go
func ResetAccessType()
```

##### `ResetCidrListAliases` <a name="ResetCidrListAliases" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetCidrListAliases"></a>

```go
func ResetCidrListAliases()
```

##### `ResetCidrs` <a name="ResetCidrs" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetCidrs"></a>

```go
func ResetCidrs()
```

##### `ResetCommonName` <a name="ResetCommonName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetCommonName"></a>

```go
func ResetCommonName()
```

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetFromPort"></a>

```go
func ResetFromPort()
```

##### `ResetIpv6Cidrs` <a name="ResetIpv6Cidrs" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetIpv6Cidrs"></a>

```go
func ResetIpv6Cidrs()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetToPort"></a>

```go
func ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessDirectionInput">AccessDirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessFromInput">AccessFromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessTypeInput">AccessTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.cidrListAliasesInput">CidrListAliasesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.cidrsInput">CidrsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.commonNameInput">CommonNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.ipv6CidrsInput">Ipv6CidrsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.toPortInput">ToPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessDirection">AccessDirection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessFrom">AccessFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessType">AccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.cidrListAliases">CidrListAliases</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.cidrs">Cidrs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.commonName">CommonName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.ipv6Cidrs">Ipv6Cidrs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessDirectionInput`<sup>Optional</sup> <a name="AccessDirectionInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessDirectionInput"></a>

```go
func AccessDirectionInput() *string
```

- *Type:* *string

---

##### `AccessFromInput`<sup>Optional</sup> <a name="AccessFromInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessFromInput"></a>

```go
func AccessFromInput() *string
```

- *Type:* *string

---

##### `AccessTypeInput`<sup>Optional</sup> <a name="AccessTypeInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessTypeInput"></a>

```go
func AccessTypeInput() *string
```

- *Type:* *string

---

##### `CidrListAliasesInput`<sup>Optional</sup> <a name="CidrListAliasesInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.cidrListAliasesInput"></a>

```go
func CidrListAliasesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CidrsInput`<sup>Optional</sup> <a name="CidrsInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.cidrsInput"></a>

```go
func CidrsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.commonNameInput"></a>

```go
func CommonNameInput() *string
```

- *Type:* *string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.fromPortInput"></a>

```go
func FromPortInput() *f64
```

- *Type:* *f64

---

##### `Ipv6CidrsInput`<sup>Optional</sup> <a name="Ipv6CidrsInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.ipv6CidrsInput"></a>

```go
func Ipv6CidrsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.toPortInput"></a>

```go
func ToPortInput() *f64
```

- *Type:* *f64

---

##### `AccessDirection`<sup>Required</sup> <a name="AccessDirection" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessDirection"></a>

```go
func AccessDirection() *string
```

- *Type:* *string

---

##### `AccessFrom`<sup>Required</sup> <a name="AccessFrom" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessFrom"></a>

```go
func AccessFrom() *string
```

- *Type:* *string

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessType"></a>

```go
func AccessType() *string
```

- *Type:* *string

---

##### `CidrListAliases`<sup>Required</sup> <a name="CidrListAliases" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.cidrListAliases"></a>

```go
func CidrListAliases() *[]*string
```

- *Type:* *[]*string

---

##### `Cidrs`<sup>Required</sup> <a name="Cidrs" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.cidrs"></a>

```go
func Cidrs() *[]*string
```

- *Type:* *[]*string

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.commonName"></a>

```go
func CommonName() *string
```

- *Type:* *string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `Ipv6Cidrs`<sup>Required</sup> <a name="Ipv6Cidrs" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.ipv6Cidrs"></a>

```go
func Ipv6Cidrs() *[]*string
```

- *Type:* *[]*string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailInstanceStateOutputReference <a name="LightsailInstanceStateOutputReference" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailinstance"

lightsailinstance.NewLightsailInstanceStateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LightsailInstanceStateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailInstanceTagsList <a name="LightsailInstanceTagsList" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailinstance"

lightsailinstance.NewLightsailInstanceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LightsailInstanceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.get"></a>

```go
func Get(index *f64) LightsailInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailInstanceTagsOutputReference <a name="LightsailInstanceTagsOutputReference" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailinstance"

lightsailinstance.NewLightsailInstanceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LightsailInstanceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



