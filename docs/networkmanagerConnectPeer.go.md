# `networkmanagerConnectPeer` Submodule <a name="`networkmanagerConnectPeer` Submodule" id="@cdktn/provider-awscc.networkmanagerConnectPeer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerConnectPeer <a name="NetworkmanagerConnectPeer" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_connect_peer awscc_networkmanager_connect_peer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectpeer"

networkmanagerconnectpeer.NewNetworkmanagerConnectPeer(scope Construct, id *string, config NetworkmanagerConnectPeerConfig) NetworkmanagerConnectPeer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig">NetworkmanagerConnectPeerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig">NetworkmanagerConnectPeerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.putBgpOptions">PutBgpOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetBgpOptions">ResetBgpOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetCoreNetworkAddress">ResetCoreNetworkAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetInsideCidrBlocks">ResetInsideCidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetSubnetArn">ResetSubnetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBgpOptions` <a name="PutBgpOptions" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.putBgpOptions"></a>

```go
func PutBgpOptions(value NetworkmanagerConnectPeerBgpOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.putBgpOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions">NetworkmanagerConnectPeerBgpOptions</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBgpOptions` <a name="ResetBgpOptions" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetBgpOptions"></a>

```go
func ResetBgpOptions()
```

##### `ResetCoreNetworkAddress` <a name="ResetCoreNetworkAddress" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetCoreNetworkAddress"></a>

```go
func ResetCoreNetworkAddress()
```

##### `ResetInsideCidrBlocks` <a name="ResetInsideCidrBlocks" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetInsideCidrBlocks"></a>

```go
func ResetInsideCidrBlocks()
```

##### `ResetSubnetArn` <a name="ResetSubnetArn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetSubnetArn"></a>

```go
func ResetSubnetArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkmanagerConnectPeer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectpeer"

networkmanagerconnectpeer.NetworkmanagerConnectPeer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectpeer"

networkmanagerconnectpeer.NetworkmanagerConnectPeer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectpeer"

networkmanagerconnectpeer.NetworkmanagerConnectPeer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectpeer"

networkmanagerconnectpeer.NetworkmanagerConnectPeer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworkmanagerConnectPeer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkmanagerConnectPeer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkmanagerConnectPeer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_connect_peer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerConnectPeer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.bgpOptions">BgpOptions</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference">NetworkmanagerConnectPeerBgpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference">NetworkmanagerConnectPeerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.connectPeerId">ConnectPeerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.coreNetworkId">CoreNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.edgeLocation">EdgeLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.lastModificationErrors">LastModificationErrors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList">NetworkmanagerConnectPeerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.bgpOptionsInput">BgpOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.connectAttachmentIdInput">ConnectAttachmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.coreNetworkAddressInput">CoreNetworkAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.insideCidrBlocksInput">InsideCidrBlocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.peerAddressInput">PeerAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.subnetArnInput">SubnetArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.connectAttachmentId">ConnectAttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.coreNetworkAddress">CoreNetworkAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.insideCidrBlocks">InsideCidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.peerAddress">PeerAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.subnetArn">SubnetArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BgpOptions`<sup>Required</sup> <a name="BgpOptions" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.bgpOptions"></a>

```go
func BgpOptions() NetworkmanagerConnectPeerBgpOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference">NetworkmanagerConnectPeerBgpOptionsOutputReference</a>

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.configuration"></a>

```go
func Configuration() NetworkmanagerConnectPeerConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference">NetworkmanagerConnectPeerConfigurationOutputReference</a>

---

##### `ConnectPeerId`<sup>Required</sup> <a name="ConnectPeerId" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.connectPeerId"></a>

```go
func ConnectPeerId() *string
```

- *Type:* *string

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.coreNetworkId"></a>

```go
func CoreNetworkId() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `EdgeLocation`<sup>Required</sup> <a name="EdgeLocation" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.edgeLocation"></a>

```go
func EdgeLocation() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModificationErrors`<sup>Required</sup> <a name="LastModificationErrors" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.lastModificationErrors"></a>

```go
func LastModificationErrors() *[]*string
```

- *Type:* *[]*string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.tags"></a>

```go
func Tags() NetworkmanagerConnectPeerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList">NetworkmanagerConnectPeerTagsList</a>

---

##### `BgpOptionsInput`<sup>Optional</sup> <a name="BgpOptionsInput" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.bgpOptionsInput"></a>

```go
func BgpOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectAttachmentIdInput`<sup>Optional</sup> <a name="ConnectAttachmentIdInput" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.connectAttachmentIdInput"></a>

```go
func ConnectAttachmentIdInput() *string
```

- *Type:* *string

---

##### `CoreNetworkAddressInput`<sup>Optional</sup> <a name="CoreNetworkAddressInput" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.coreNetworkAddressInput"></a>

```go
func CoreNetworkAddressInput() *string
```

- *Type:* *string

---

##### `InsideCidrBlocksInput`<sup>Optional</sup> <a name="InsideCidrBlocksInput" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.insideCidrBlocksInput"></a>

```go
func InsideCidrBlocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `PeerAddressInput`<sup>Optional</sup> <a name="PeerAddressInput" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.peerAddressInput"></a>

```go
func PeerAddressInput() *string
```

- *Type:* *string

---

##### `SubnetArnInput`<sup>Optional</sup> <a name="SubnetArnInput" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.subnetArnInput"></a>

```go
func SubnetArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectAttachmentId`<sup>Required</sup> <a name="ConnectAttachmentId" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.connectAttachmentId"></a>

```go
func ConnectAttachmentId() *string
```

- *Type:* *string

---

##### `CoreNetworkAddress`<sup>Required</sup> <a name="CoreNetworkAddress" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.coreNetworkAddress"></a>

```go
func CoreNetworkAddress() *string
```

- *Type:* *string

---

##### `InsideCidrBlocks`<sup>Required</sup> <a name="InsideCidrBlocks" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.insideCidrBlocks"></a>

```go
func InsideCidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `PeerAddress`<sup>Required</sup> <a name="PeerAddress" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.peerAddress"></a>

```go
func PeerAddress() *string
```

- *Type:* *string

---

##### `SubnetArn`<sup>Required</sup> <a name="SubnetArn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.subnetArn"></a>

```go
func SubnetArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerConnectPeerBgpOptions <a name="NetworkmanagerConnectPeerBgpOptions" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectpeer"

&networkmanagerconnectpeer.NetworkmanagerConnectPeerBgpOptions {
	PeerAsn: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions.property.peerAsn">PeerAsn</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_connect_peer#peer_asn NetworkmanagerConnectPeer#peer_asn}. |

---

##### `PeerAsn`<sup>Optional</sup> <a name="PeerAsn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions.property.peerAsn"></a>

```go
PeerAsn *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_connect_peer#peer_asn NetworkmanagerConnectPeer#peer_asn}.

---

### NetworkmanagerConnectPeerConfig <a name="NetworkmanagerConnectPeerConfig" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectpeer"

&networkmanagerconnectpeer.NetworkmanagerConnectPeerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ConnectAttachmentId: *string,
	PeerAddress: *string,
	BgpOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions,
	CoreNetworkAddress: *string,
	InsideCidrBlocks: *[]*string,
	SubnetArn: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.connectAttachmentId">ConnectAttachmentId</a></code> | <code>*string</code> | The ID of the attachment to connect. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.peerAddress">PeerAddress</a></code> | <code>*string</code> | The IP address of the Connect peer. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.bgpOptions">BgpOptions</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions">NetworkmanagerConnectPeerBgpOptions</a></code> | Bgp options for connect peer. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.coreNetworkAddress">CoreNetworkAddress</a></code> | <code>*string</code> | The IP address of a core network. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.insideCidrBlocks">InsideCidrBlocks</a></code> | <code>*[]*string</code> | The inside IP addresses used for a Connect peer configuration. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.subnetArn">SubnetArn</a></code> | <code>*string</code> | The subnet ARN for the connect peer. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectAttachmentId`<sup>Required</sup> <a name="ConnectAttachmentId" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.connectAttachmentId"></a>

```go
ConnectAttachmentId *string
```

- *Type:* *string

The ID of the attachment to connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_connect_peer#connect_attachment_id NetworkmanagerConnectPeer#connect_attachment_id}

---

##### `PeerAddress`<sup>Required</sup> <a name="PeerAddress" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.peerAddress"></a>

```go
PeerAddress *string
```

- *Type:* *string

The IP address of the Connect peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_connect_peer#peer_address NetworkmanagerConnectPeer#peer_address}

---

##### `BgpOptions`<sup>Optional</sup> <a name="BgpOptions" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.bgpOptions"></a>

```go
BgpOptions NetworkmanagerConnectPeerBgpOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions">NetworkmanagerConnectPeerBgpOptions</a>

Bgp options for connect peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_connect_peer#bgp_options NetworkmanagerConnectPeer#bgp_options}

---

##### `CoreNetworkAddress`<sup>Optional</sup> <a name="CoreNetworkAddress" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.coreNetworkAddress"></a>

```go
CoreNetworkAddress *string
```

- *Type:* *string

The IP address of a core network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_connect_peer#core_network_address NetworkmanagerConnectPeer#core_network_address}

---

##### `InsideCidrBlocks`<sup>Optional</sup> <a name="InsideCidrBlocks" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.insideCidrBlocks"></a>

```go
InsideCidrBlocks *[]*string
```

- *Type:* *[]*string

The inside IP addresses used for a Connect peer configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_connect_peer#inside_cidr_blocks NetworkmanagerConnectPeer#inside_cidr_blocks}

---

##### `SubnetArn`<sup>Optional</sup> <a name="SubnetArn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.subnetArn"></a>

```go
SubnetArn *string
```

- *Type:* *string

The subnet ARN for the connect peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_connect_peer#subnet_arn NetworkmanagerConnectPeer#subnet_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_connect_peer#tags NetworkmanagerConnectPeer#tags}

---

### NetworkmanagerConnectPeerConfiguration <a name="NetworkmanagerConnectPeerConfiguration" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectpeer"

&networkmanagerconnectpeer.NetworkmanagerConnectPeerConfiguration {

}
```


### NetworkmanagerConnectPeerConfigurationBgpConfigurations <a name="NetworkmanagerConnectPeerConfigurationBgpConfigurations" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectpeer"

&networkmanagerconnectpeer.NetworkmanagerConnectPeerConfigurationBgpConfigurations {

}
```


### NetworkmanagerConnectPeerTags <a name="NetworkmanagerConnectPeerTags" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectpeer"

&networkmanagerconnectpeer.NetworkmanagerConnectPeerTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_connect_peer#key NetworkmanagerConnectPeer#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_connect_peer#value NetworkmanagerConnectPeer#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerConnectPeerBgpOptionsOutputReference <a name="NetworkmanagerConnectPeerBgpOptionsOutputReference" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectpeer"

networkmanagerconnectpeer.NewNetworkmanagerConnectPeerBgpOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkmanagerConnectPeerBgpOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.resetPeerAsn">ResetPeerAsn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPeerAsn` <a name="ResetPeerAsn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.resetPeerAsn"></a>

```go
func ResetPeerAsn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.property.peerAsnInput">PeerAsnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.property.peerAsn">PeerAsn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PeerAsnInput`<sup>Optional</sup> <a name="PeerAsnInput" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.property.peerAsnInput"></a>

```go
func PeerAsnInput() *f64
```

- *Type:* *f64

---

##### `PeerAsn`<sup>Required</sup> <a name="PeerAsn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.property.peerAsn"></a>

```go
func PeerAsn() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkmanagerConnectPeerConfigurationBgpConfigurationsList <a name="NetworkmanagerConnectPeerConfigurationBgpConfigurationsList" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectpeer"

networkmanagerconnectpeer.NewNetworkmanagerConnectPeerConfigurationBgpConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkmanagerConnectPeerConfigurationBgpConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.get"></a>

```go
func Get(index *f64) NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference <a name="NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectpeer"

networkmanagerconnectpeer.NewNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.coreNetworkAddress">CoreNetworkAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.coreNetworkAsn">CoreNetworkAsn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.peerAddress">PeerAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.peerAsn">PeerAsn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurations">NetworkmanagerConnectPeerConfigurationBgpConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CoreNetworkAddress`<sup>Required</sup> <a name="CoreNetworkAddress" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.coreNetworkAddress"></a>

```go
func CoreNetworkAddress() *string
```

- *Type:* *string

---

##### `CoreNetworkAsn`<sup>Required</sup> <a name="CoreNetworkAsn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.coreNetworkAsn"></a>

```go
func CoreNetworkAsn() *f64
```

- *Type:* *f64

---

##### `PeerAddress`<sup>Required</sup> <a name="PeerAddress" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.peerAddress"></a>

```go
func PeerAddress() *string
```

- *Type:* *string

---

##### `PeerAsn`<sup>Required</sup> <a name="PeerAsn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.peerAsn"></a>

```go
func PeerAsn() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkmanagerConnectPeerConfigurationBgpConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurations">NetworkmanagerConnectPeerConfigurationBgpConfigurations</a>

---


### NetworkmanagerConnectPeerConfigurationOutputReference <a name="NetworkmanagerConnectPeerConfigurationOutputReference" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectpeer"

networkmanagerconnectpeer.NewNetworkmanagerConnectPeerConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkmanagerConnectPeerConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.bgpConfigurations">BgpConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList">NetworkmanagerConnectPeerConfigurationBgpConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.coreNetworkAddress">CoreNetworkAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.insideCidrBlocks">InsideCidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.peerAddress">PeerAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfiguration">NetworkmanagerConnectPeerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BgpConfigurations`<sup>Required</sup> <a name="BgpConfigurations" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.bgpConfigurations"></a>

```go
func BgpConfigurations() NetworkmanagerConnectPeerConfigurationBgpConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList">NetworkmanagerConnectPeerConfigurationBgpConfigurationsList</a>

---

##### `CoreNetworkAddress`<sup>Required</sup> <a name="CoreNetworkAddress" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.coreNetworkAddress"></a>

```go
func CoreNetworkAddress() *string
```

- *Type:* *string

---

##### `InsideCidrBlocks`<sup>Required</sup> <a name="InsideCidrBlocks" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.insideCidrBlocks"></a>

```go
func InsideCidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `PeerAddress`<sup>Required</sup> <a name="PeerAddress" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.peerAddress"></a>

```go
func PeerAddress() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkmanagerConnectPeerConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfiguration">NetworkmanagerConnectPeerConfiguration</a>

---


### NetworkmanagerConnectPeerTagsList <a name="NetworkmanagerConnectPeerTagsList" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectpeer"

networkmanagerconnectpeer.NewNetworkmanagerConnectPeerTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkmanagerConnectPeerTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.get"></a>

```go
func Get(index *f64) NetworkmanagerConnectPeerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkmanagerConnectPeerTagsOutputReference <a name="NetworkmanagerConnectPeerTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectpeer"

networkmanagerconnectpeer.NewNetworkmanagerConnectPeerTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkmanagerConnectPeerTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



