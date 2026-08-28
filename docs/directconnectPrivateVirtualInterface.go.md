# `directconnectPrivateVirtualInterface` Submodule <a name="`directconnectPrivateVirtualInterface` Submodule" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectconnectPrivateVirtualInterface <a name="DirectconnectPrivateVirtualInterface" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface awscc_directconnect_private_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnectprivatevirtualinterface"

directconnectprivatevirtualinterface.NewDirectconnectPrivateVirtualInterface(scope Construct, id *string, config DirectconnectPrivateVirtualInterfaceConfig) DirectconnectPrivateVirtualInterface
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig">DirectconnectPrivateVirtualInterfaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig">DirectconnectPrivateVirtualInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.putBgpPeers">PutBgpPeers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetAllocatePrivateVirtualInterfaceRoleArn">ResetAllocatePrivateVirtualInterfaceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetDirectConnectGatewayId">ResetDirectConnectGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetEnableSiteLink">ResetEnableSiteLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetRateLimit">ResetRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetVirtualGatewayId">ResetVirtualGatewayId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBgpPeers` <a name="PutBgpPeers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.putBgpPeers"></a>

```go
func PutBgpPeers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.putBgpPeers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllocatePrivateVirtualInterfaceRoleArn` <a name="ResetAllocatePrivateVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetAllocatePrivateVirtualInterfaceRoleArn"></a>

```go
func ResetAllocatePrivateVirtualInterfaceRoleArn()
```

##### `ResetDirectConnectGatewayId` <a name="ResetDirectConnectGatewayId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetDirectConnectGatewayId"></a>

```go
func ResetDirectConnectGatewayId()
```

##### `ResetEnableSiteLink` <a name="ResetEnableSiteLink" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetEnableSiteLink"></a>

```go
func ResetEnableSiteLink()
```

##### `ResetMtu` <a name="ResetMtu" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetMtu"></a>

```go
func ResetMtu()
```

##### `ResetRateLimit` <a name="ResetRateLimit" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetRateLimit"></a>

```go
func ResetRateLimit()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVirtualGatewayId` <a name="ResetVirtualGatewayId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetVirtualGatewayId"></a>

```go
func ResetVirtualGatewayId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DirectconnectPrivateVirtualInterface resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnectprivatevirtualinterface"

directconnectprivatevirtualinterface.DirectconnectPrivateVirtualInterface_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnectprivatevirtualinterface"

directconnectprivatevirtualinterface.DirectconnectPrivateVirtualInterface_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnectprivatevirtualinterface"

directconnectprivatevirtualinterface.DirectconnectPrivateVirtualInterface_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnectprivatevirtualinterface"

directconnectprivatevirtualinterface.DirectconnectPrivateVirtualInterface_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DirectconnectPrivateVirtualInterface resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DirectconnectPrivateVirtualInterface to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DirectconnectPrivateVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DirectconnectPrivateVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.bgpPeers">BgpPeers</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList">DirectconnectPrivateVirtualInterfaceBgpPeersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList">DirectconnectPrivateVirtualInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceArn">VirtualInterfaceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceId">VirtualInterfaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.allocatePrivateVirtualInterfaceRoleArnInput">AllocatePrivateVirtualInterfaceRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.bgpPeersInput">BgpPeersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.connectionIdInput">ConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.directConnectGatewayIdInput">DirectConnectGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.enableSiteLinkInput">EnableSiteLinkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.mtuInput">MtuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.rateLimitInput">RateLimitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualGatewayIdInput">VirtualGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceNameInput">VirtualInterfaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.vlanInput">VlanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.allocatePrivateVirtualInterfaceRoleArn">AllocatePrivateVirtualInterfaceRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.directConnectGatewayId">DirectConnectGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.enableSiteLink">EnableSiteLink</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.rateLimit">RateLimit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualGatewayId">VirtualGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceName">VirtualInterfaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.vlan">Vlan</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BgpPeers`<sup>Required</sup> <a name="BgpPeers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.bgpPeers"></a>

```go
func BgpPeers() DirectconnectPrivateVirtualInterfaceBgpPeersList
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList">DirectconnectPrivateVirtualInterfaceBgpPeersList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.tags"></a>

```go
func Tags() DirectconnectPrivateVirtualInterfaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList">DirectconnectPrivateVirtualInterfaceTagsList</a>

---

##### `VirtualInterfaceArn`<sup>Required</sup> <a name="VirtualInterfaceArn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceArn"></a>

```go
func VirtualInterfaceArn() *string
```

- *Type:* *string

---

##### `VirtualInterfaceId`<sup>Required</sup> <a name="VirtualInterfaceId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceId"></a>

```go
func VirtualInterfaceId() *string
```

- *Type:* *string

---

##### `AllocatePrivateVirtualInterfaceRoleArnInput`<sup>Optional</sup> <a name="AllocatePrivateVirtualInterfaceRoleArnInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.allocatePrivateVirtualInterfaceRoleArnInput"></a>

```go
func AllocatePrivateVirtualInterfaceRoleArnInput() *string
```

- *Type:* *string

---

##### `BgpPeersInput`<sup>Optional</sup> <a name="BgpPeersInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.bgpPeersInput"></a>

```go
func BgpPeersInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.connectionIdInput"></a>

```go
func ConnectionIdInput() *string
```

- *Type:* *string

---

##### `DirectConnectGatewayIdInput`<sup>Optional</sup> <a name="DirectConnectGatewayIdInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.directConnectGatewayIdInput"></a>

```go
func DirectConnectGatewayIdInput() *string
```

- *Type:* *string

---

##### `EnableSiteLinkInput`<sup>Optional</sup> <a name="EnableSiteLinkInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.enableSiteLinkInput"></a>

```go
func EnableSiteLinkInput() interface{}
```

- *Type:* interface{}

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.mtuInput"></a>

```go
func MtuInput() *f64
```

- *Type:* *f64

---

##### `RateLimitInput`<sup>Optional</sup> <a name="RateLimitInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.rateLimitInput"></a>

```go
func RateLimitInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualGatewayIdInput`<sup>Optional</sup> <a name="VirtualGatewayIdInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualGatewayIdInput"></a>

```go
func VirtualGatewayIdInput() *string
```

- *Type:* *string

---

##### `VirtualInterfaceNameInput`<sup>Optional</sup> <a name="VirtualInterfaceNameInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceNameInput"></a>

```go
func VirtualInterfaceNameInput() *string
```

- *Type:* *string

---

##### `VlanInput`<sup>Optional</sup> <a name="VlanInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.vlanInput"></a>

```go
func VlanInput() *f64
```

- *Type:* *f64

---

##### `AllocatePrivateVirtualInterfaceRoleArn`<sup>Required</sup> <a name="AllocatePrivateVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.allocatePrivateVirtualInterfaceRoleArn"></a>

```go
func AllocatePrivateVirtualInterfaceRoleArn() *string
```

- *Type:* *string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `DirectConnectGatewayId`<sup>Required</sup> <a name="DirectConnectGatewayId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.directConnectGatewayId"></a>

```go
func DirectConnectGatewayId() *string
```

- *Type:* *string

---

##### `EnableSiteLink`<sup>Required</sup> <a name="EnableSiteLink" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.enableSiteLink"></a>

```go
func EnableSiteLink() interface{}
```

- *Type:* interface{}

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `RateLimit`<sup>Required</sup> <a name="RateLimit" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.rateLimit"></a>

```go
func RateLimit() *string
```

- *Type:* *string

---

##### `VirtualGatewayId`<sup>Required</sup> <a name="VirtualGatewayId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualGatewayId"></a>

```go
func VirtualGatewayId() *string
```

- *Type:* *string

---

##### `VirtualInterfaceName`<sup>Required</sup> <a name="VirtualInterfaceName" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceName"></a>

```go
func VirtualInterfaceName() *string
```

- *Type:* *string

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.vlan"></a>

```go
func Vlan() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectconnectPrivateVirtualInterfaceBgpPeers <a name="DirectconnectPrivateVirtualInterfaceBgpPeers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnectprivatevirtualinterface"

&directconnectprivatevirtualinterface.DirectconnectPrivateVirtualInterfaceBgpPeers {
	AddressFamily: *string,
	Asn: *string,
	AmazonAddress: *string,
	AuthKey: *string,
	BgpPeerId: *string,
	CustomerAddress: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.addressFamily">AddressFamily</a></code> | <code>*string</code> | The address family for the BGP peer. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.asn">Asn</a></code> | <code>*string</code> | The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.amazonAddress">AmazonAddress</a></code> | <code>*string</code> | The IP address assigned to the Amazon interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.authKey">AuthKey</a></code> | <code>*string</code> | The authentication key for BGP configuration. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.bgpPeerId">BgpPeerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#bgp_peer_id DirectconnectPrivateVirtualInterface#bgp_peer_id}. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.customerAddress">CustomerAddress</a></code> | <code>*string</code> | The IP address assigned to the customer interface. |

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.addressFamily"></a>

```go
AddressFamily *string
```

- *Type:* *string

The address family for the BGP peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#address_family DirectconnectPrivateVirtualInterface#address_family}

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.asn"></a>

```go
Asn *string
```

- *Type:* *string

The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#asn DirectconnectPrivateVirtualInterface#asn}

---

##### `AmazonAddress`<sup>Optional</sup> <a name="AmazonAddress" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.amazonAddress"></a>

```go
AmazonAddress *string
```

- *Type:* *string

The IP address assigned to the Amazon interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#amazon_address DirectconnectPrivateVirtualInterface#amazon_address}

---

##### `AuthKey`<sup>Optional</sup> <a name="AuthKey" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.authKey"></a>

```go
AuthKey *string
```

- *Type:* *string

The authentication key for BGP configuration.

This string has a minimum length of 6 characters and and a maximum length of 80 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#auth_key DirectconnectPrivateVirtualInterface#auth_key}

---

##### `BgpPeerId`<sup>Optional</sup> <a name="BgpPeerId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.bgpPeerId"></a>

```go
BgpPeerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#bgp_peer_id DirectconnectPrivateVirtualInterface#bgp_peer_id}.

---

##### `CustomerAddress`<sup>Optional</sup> <a name="CustomerAddress" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.customerAddress"></a>

```go
CustomerAddress *string
```

- *Type:* *string

The IP address assigned to the customer interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#customer_address DirectconnectPrivateVirtualInterface#customer_address}

---

### DirectconnectPrivateVirtualInterfaceConfig <a name="DirectconnectPrivateVirtualInterfaceConfig" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnectprivatevirtualinterface"

&directconnectprivatevirtualinterface.DirectconnectPrivateVirtualInterfaceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BgpPeers: interface{},
	ConnectionId: *string,
	VirtualInterfaceName: *string,
	Vlan: *f64,
	AllocatePrivateVirtualInterfaceRoleArn: *string,
	DirectConnectGatewayId: *string,
	EnableSiteLink: interface{},
	Mtu: *f64,
	RateLimit: *string,
	Tags: interface{},
	VirtualGatewayId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.bgpPeers">BgpPeers</a></code> | <code>interface{}</code> | The BGP peers configured on this virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.connectionId">ConnectionId</a></code> | <code>*string</code> | The ID or ARN of the connection or LAG. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.virtualInterfaceName">VirtualInterfaceName</a></code> | <code>*string</code> | The name of the virtual interface assigned by the customer network. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.vlan">Vlan</a></code> | <code>*f64</code> | The ID of the VLAN. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.allocatePrivateVirtualInterfaceRoleArn">AllocatePrivateVirtualInterfaceRoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the role to allocate the private virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.directConnectGatewayId">DirectConnectGatewayId</a></code> | <code>*string</code> | The ID or ARN of the Direct Connect gateway. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.enableSiteLink">EnableSiteLink</a></code> | <code>interface{}</code> | Indicates whether to enable or disable SiteLink. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.mtu">Mtu</a></code> | <code>*f64</code> | The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.rateLimit">RateLimit</a></code> | <code>*string</code> | The rate limit (bandwidth allocation) for the virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags associated with the private virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.virtualGatewayId">VirtualGatewayId</a></code> | <code>*string</code> | The ID or ARN of the virtual private gateway. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BgpPeers`<sup>Required</sup> <a name="BgpPeers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.bgpPeers"></a>

```go
BgpPeers interface{}
```

- *Type:* interface{}

The BGP peers configured on this virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#bgp_peers DirectconnectPrivateVirtualInterface#bgp_peers}

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.connectionId"></a>

```go
ConnectionId *string
```

- *Type:* *string

The ID or ARN of the connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#connection_id DirectconnectPrivateVirtualInterface#connection_id}

---

##### `VirtualInterfaceName`<sup>Required</sup> <a name="VirtualInterfaceName" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.virtualInterfaceName"></a>

```go
VirtualInterfaceName *string
```

- *Type:* *string

The name of the virtual interface assigned by the customer network.

The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#virtual_interface_name DirectconnectPrivateVirtualInterface#virtual_interface_name}

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.vlan"></a>

```go
Vlan *f64
```

- *Type:* *f64

The ID of the VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#vlan DirectconnectPrivateVirtualInterface#vlan}

---

##### `AllocatePrivateVirtualInterfaceRoleArn`<sup>Optional</sup> <a name="AllocatePrivateVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.allocatePrivateVirtualInterfaceRoleArn"></a>

```go
AllocatePrivateVirtualInterfaceRoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the role to allocate the private virtual interface.

Needs directconnect:AllocatePrivateVirtualInterface permissions and tag permissions if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#allocate_private_virtual_interface_role_arn DirectconnectPrivateVirtualInterface#allocate_private_virtual_interface_role_arn}

---

##### `DirectConnectGatewayId`<sup>Optional</sup> <a name="DirectConnectGatewayId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.directConnectGatewayId"></a>

```go
DirectConnectGatewayId *string
```

- *Type:* *string

The ID or ARN of the Direct Connect gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#direct_connect_gateway_id DirectconnectPrivateVirtualInterface#direct_connect_gateway_id}

---

##### `EnableSiteLink`<sup>Optional</sup> <a name="EnableSiteLink" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.enableSiteLink"></a>

```go
EnableSiteLink interface{}
```

- *Type:* interface{}

Indicates whether to enable or disable SiteLink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#enable_site_link DirectconnectPrivateVirtualInterface#enable_site_link}

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.mtu"></a>

```go
Mtu *f64
```

- *Type:* *f64

The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#mtu DirectconnectPrivateVirtualInterface#mtu}

---

##### `RateLimit`<sup>Optional</sup> <a name="RateLimit" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.rateLimit"></a>

```go
RateLimit *string
```

- *Type:* *string

The rate limit (bandwidth allocation) for the virtual interface.

The value must be one of the supported bandwidth values (e.g., 50Mbps, 1Gbps, 10Gbps) and cannot exceed the bandwidth of the parent connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#rate_limit DirectconnectPrivateVirtualInterface#rate_limit}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags associated with the private virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#tags DirectconnectPrivateVirtualInterface#tags}

---

##### `VirtualGatewayId`<sup>Optional</sup> <a name="VirtualGatewayId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.virtualGatewayId"></a>

```go
VirtualGatewayId *string
```

- *Type:* *string

The ID or ARN of the virtual private gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#virtual_gateway_id DirectconnectPrivateVirtualInterface#virtual_gateway_id}

---

### DirectconnectPrivateVirtualInterfaceTags <a name="DirectconnectPrivateVirtualInterfaceTags" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnectprivatevirtualinterface"

&directconnectprivatevirtualinterface.DirectconnectPrivateVirtualInterfaceTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#key DirectconnectPrivateVirtualInterface#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#value DirectconnectPrivateVirtualInterface#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectconnectPrivateVirtualInterfaceBgpPeersList <a name="DirectconnectPrivateVirtualInterfaceBgpPeersList" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnectprivatevirtualinterface"

directconnectprivatevirtualinterface.NewDirectconnectPrivateVirtualInterfaceBgpPeersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DirectconnectPrivateVirtualInterfaceBgpPeersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.get"></a>

```go
func Get(index *f64) DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference <a name="DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnectprivatevirtualinterface"

directconnectprivatevirtualinterface.NewDirectconnectPrivateVirtualInterfaceBgpPeersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetAmazonAddress">ResetAmazonAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetAuthKey">ResetAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetBgpPeerId">ResetBgpPeerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetCustomerAddress">ResetCustomerAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAmazonAddress` <a name="ResetAmazonAddress" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetAmazonAddress"></a>

```go
func ResetAmazonAddress()
```

##### `ResetAuthKey` <a name="ResetAuthKey" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetAuthKey"></a>

```go
func ResetAuthKey()
```

##### `ResetBgpPeerId` <a name="ResetBgpPeerId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetBgpPeerId"></a>

```go
func ResetBgpPeerId()
```

##### `ResetCustomerAddress` <a name="ResetCustomerAddress" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetCustomerAddress"></a>

```go
func ResetCustomerAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.addressFamilyInput">AddressFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.amazonAddressInput">AmazonAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.asnInput">AsnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.authKeyInput">AuthKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.bgpPeerIdInput">BgpPeerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.customerAddressInput">CustomerAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.addressFamily">AddressFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.amazonAddress">AmazonAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.asn">Asn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.authKey">AuthKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId">BgpPeerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.customerAddress">CustomerAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressFamilyInput`<sup>Optional</sup> <a name="AddressFamilyInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.addressFamilyInput"></a>

```go
func AddressFamilyInput() *string
```

- *Type:* *string

---

##### `AmazonAddressInput`<sup>Optional</sup> <a name="AmazonAddressInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.amazonAddressInput"></a>

```go
func AmazonAddressInput() *string
```

- *Type:* *string

---

##### `AsnInput`<sup>Optional</sup> <a name="AsnInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.asnInput"></a>

```go
func AsnInput() *string
```

- *Type:* *string

---

##### `AuthKeyInput`<sup>Optional</sup> <a name="AuthKeyInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.authKeyInput"></a>

```go
func AuthKeyInput() *string
```

- *Type:* *string

---

##### `BgpPeerIdInput`<sup>Optional</sup> <a name="BgpPeerIdInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.bgpPeerIdInput"></a>

```go
func BgpPeerIdInput() *string
```

- *Type:* *string

---

##### `CustomerAddressInput`<sup>Optional</sup> <a name="CustomerAddressInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.customerAddressInput"></a>

```go
func CustomerAddressInput() *string
```

- *Type:* *string

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.addressFamily"></a>

```go
func AddressFamily() *string
```

- *Type:* *string

---

##### `AmazonAddress`<sup>Required</sup> <a name="AmazonAddress" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.amazonAddress"></a>

```go
func AmazonAddress() *string
```

- *Type:* *string

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.asn"></a>

```go
func Asn() *string
```

- *Type:* *string

---

##### `AuthKey`<sup>Required</sup> <a name="AuthKey" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.authKey"></a>

```go
func AuthKey() *string
```

- *Type:* *string

---

##### `BgpPeerId`<sup>Required</sup> <a name="BgpPeerId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId"></a>

```go
func BgpPeerId() *string
```

- *Type:* *string

---

##### `CustomerAddress`<sup>Required</sup> <a name="CustomerAddress" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.customerAddress"></a>

```go
func CustomerAddress() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DirectconnectPrivateVirtualInterfaceTagsList <a name="DirectconnectPrivateVirtualInterfaceTagsList" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnectprivatevirtualinterface"

directconnectprivatevirtualinterface.NewDirectconnectPrivateVirtualInterfaceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DirectconnectPrivateVirtualInterfaceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.get"></a>

```go
func Get(index *f64) DirectconnectPrivateVirtualInterfaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DirectconnectPrivateVirtualInterfaceTagsOutputReference <a name="DirectconnectPrivateVirtualInterfaceTagsOutputReference" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnectprivatevirtualinterface"

directconnectprivatevirtualinterface.NewDirectconnectPrivateVirtualInterfaceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DirectconnectPrivateVirtualInterfaceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



