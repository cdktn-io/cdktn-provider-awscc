# `directconnectTransitVirtualInterface` Submodule <a name="`directconnectTransitVirtualInterface` Submodule" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectconnectTransitVirtualInterface <a name="DirectconnectTransitVirtualInterface" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface awscc_directconnect_transit_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnecttransitvirtualinterface"

directconnecttransitvirtualinterface.NewDirectconnectTransitVirtualInterface(scope Construct, id *string, config DirectconnectTransitVirtualInterfaceConfig) DirectconnectTransitVirtualInterface
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig">DirectconnectTransitVirtualInterfaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig">DirectconnectTransitVirtualInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.putBgpPeers">PutBgpPeers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetAllocateTransitVirtualInterfaceRoleArn">ResetAllocateTransitVirtualInterfaceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetEnableSiteLink">ResetEnableSiteLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetRateLimit">ResetRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBgpPeers` <a name="PutBgpPeers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.putBgpPeers"></a>

```go
func PutBgpPeers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.putBgpPeers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllocateTransitVirtualInterfaceRoleArn` <a name="ResetAllocateTransitVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetAllocateTransitVirtualInterfaceRoleArn"></a>

```go
func ResetAllocateTransitVirtualInterfaceRoleArn()
```

##### `ResetEnableSiteLink` <a name="ResetEnableSiteLink" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetEnableSiteLink"></a>

```go
func ResetEnableSiteLink()
```

##### `ResetMtu` <a name="ResetMtu" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetMtu"></a>

```go
func ResetMtu()
```

##### `ResetRateLimit` <a name="ResetRateLimit" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetRateLimit"></a>

```go
func ResetRateLimit()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DirectconnectTransitVirtualInterface resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnecttransitvirtualinterface"

directconnecttransitvirtualinterface.DirectconnectTransitVirtualInterface_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnecttransitvirtualinterface"

directconnecttransitvirtualinterface.DirectconnectTransitVirtualInterface_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnecttransitvirtualinterface"

directconnecttransitvirtualinterface.DirectconnectTransitVirtualInterface_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnecttransitvirtualinterface"

directconnecttransitvirtualinterface.DirectconnectTransitVirtualInterface_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DirectconnectTransitVirtualInterface resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DirectconnectTransitVirtualInterface to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DirectconnectTransitVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DirectconnectTransitVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.bgpPeers">BgpPeers</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList">DirectconnectTransitVirtualInterfaceBgpPeersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList">DirectconnectTransitVirtualInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceArn">VirtualInterfaceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceId">VirtualInterfaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.allocateTransitVirtualInterfaceRoleArnInput">AllocateTransitVirtualInterfaceRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.bgpPeersInput">BgpPeersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.connectionIdInput">ConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.directConnectGatewayIdInput">DirectConnectGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.enableSiteLinkInput">EnableSiteLinkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.mtuInput">MtuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.rateLimitInput">RateLimitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceNameInput">VirtualInterfaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.vlanInput">VlanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.allocateTransitVirtualInterfaceRoleArn">AllocateTransitVirtualInterfaceRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.directConnectGatewayId">DirectConnectGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.enableSiteLink">EnableSiteLink</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.rateLimit">RateLimit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceName">VirtualInterfaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.vlan">Vlan</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BgpPeers`<sup>Required</sup> <a name="BgpPeers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.bgpPeers"></a>

```go
func BgpPeers() DirectconnectTransitVirtualInterfaceBgpPeersList
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList">DirectconnectTransitVirtualInterfaceBgpPeersList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.tags"></a>

```go
func Tags() DirectconnectTransitVirtualInterfaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList">DirectconnectTransitVirtualInterfaceTagsList</a>

---

##### `VirtualInterfaceArn`<sup>Required</sup> <a name="VirtualInterfaceArn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceArn"></a>

```go
func VirtualInterfaceArn() *string
```

- *Type:* *string

---

##### `VirtualInterfaceId`<sup>Required</sup> <a name="VirtualInterfaceId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceId"></a>

```go
func VirtualInterfaceId() *string
```

- *Type:* *string

---

##### `AllocateTransitVirtualInterfaceRoleArnInput`<sup>Optional</sup> <a name="AllocateTransitVirtualInterfaceRoleArnInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.allocateTransitVirtualInterfaceRoleArnInput"></a>

```go
func AllocateTransitVirtualInterfaceRoleArnInput() *string
```

- *Type:* *string

---

##### `BgpPeersInput`<sup>Optional</sup> <a name="BgpPeersInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.bgpPeersInput"></a>

```go
func BgpPeersInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.connectionIdInput"></a>

```go
func ConnectionIdInput() *string
```

- *Type:* *string

---

##### `DirectConnectGatewayIdInput`<sup>Optional</sup> <a name="DirectConnectGatewayIdInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.directConnectGatewayIdInput"></a>

```go
func DirectConnectGatewayIdInput() *string
```

- *Type:* *string

---

##### `EnableSiteLinkInput`<sup>Optional</sup> <a name="EnableSiteLinkInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.enableSiteLinkInput"></a>

```go
func EnableSiteLinkInput() interface{}
```

- *Type:* interface{}

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.mtuInput"></a>

```go
func MtuInput() *f64
```

- *Type:* *f64

---

##### `RateLimitInput`<sup>Optional</sup> <a name="RateLimitInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.rateLimitInput"></a>

```go
func RateLimitInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualInterfaceNameInput`<sup>Optional</sup> <a name="VirtualInterfaceNameInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceNameInput"></a>

```go
func VirtualInterfaceNameInput() *string
```

- *Type:* *string

---

##### `VlanInput`<sup>Optional</sup> <a name="VlanInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.vlanInput"></a>

```go
func VlanInput() *f64
```

- *Type:* *f64

---

##### `AllocateTransitVirtualInterfaceRoleArn`<sup>Required</sup> <a name="AllocateTransitVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.allocateTransitVirtualInterfaceRoleArn"></a>

```go
func AllocateTransitVirtualInterfaceRoleArn() *string
```

- *Type:* *string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `DirectConnectGatewayId`<sup>Required</sup> <a name="DirectConnectGatewayId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.directConnectGatewayId"></a>

```go
func DirectConnectGatewayId() *string
```

- *Type:* *string

---

##### `EnableSiteLink`<sup>Required</sup> <a name="EnableSiteLink" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.enableSiteLink"></a>

```go
func EnableSiteLink() interface{}
```

- *Type:* interface{}

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `RateLimit`<sup>Required</sup> <a name="RateLimit" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.rateLimit"></a>

```go
func RateLimit() *string
```

- *Type:* *string

---

##### `VirtualInterfaceName`<sup>Required</sup> <a name="VirtualInterfaceName" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceName"></a>

```go
func VirtualInterfaceName() *string
```

- *Type:* *string

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.vlan"></a>

```go
func Vlan() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectconnectTransitVirtualInterfaceBgpPeers <a name="DirectconnectTransitVirtualInterfaceBgpPeers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnecttransitvirtualinterface"

&directconnecttransitvirtualinterface.DirectconnectTransitVirtualInterfaceBgpPeers {
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
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.addressFamily">AddressFamily</a></code> | <code>*string</code> | The address family for the BGP peer. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.asn">Asn</a></code> | <code>*string</code> | The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.amazonAddress">AmazonAddress</a></code> | <code>*string</code> | The IP address assigned to the Amazon interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.authKey">AuthKey</a></code> | <code>*string</code> | The authentication key for BGP configuration. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.bgpPeerId">BgpPeerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#bgp_peer_id DirectconnectTransitVirtualInterface#bgp_peer_id}. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.customerAddress">CustomerAddress</a></code> | <code>*string</code> | The IP address assigned to the customer interface. |

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.addressFamily"></a>

```go
AddressFamily *string
```

- *Type:* *string

The address family for the BGP peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#address_family DirectconnectTransitVirtualInterface#address_family}

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.asn"></a>

```go
Asn *string
```

- *Type:* *string

The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#asn DirectconnectTransitVirtualInterface#asn}

---

##### `AmazonAddress`<sup>Optional</sup> <a name="AmazonAddress" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.amazonAddress"></a>

```go
AmazonAddress *string
```

- *Type:* *string

The IP address assigned to the Amazon interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#amazon_address DirectconnectTransitVirtualInterface#amazon_address}

---

##### `AuthKey`<sup>Optional</sup> <a name="AuthKey" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.authKey"></a>

```go
AuthKey *string
```

- *Type:* *string

The authentication key for BGP configuration.

This string has a minimum length of 6 characters and and a maximum length of 80 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#auth_key DirectconnectTransitVirtualInterface#auth_key}

---

##### `BgpPeerId`<sup>Optional</sup> <a name="BgpPeerId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.bgpPeerId"></a>

```go
BgpPeerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#bgp_peer_id DirectconnectTransitVirtualInterface#bgp_peer_id}.

---

##### `CustomerAddress`<sup>Optional</sup> <a name="CustomerAddress" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.customerAddress"></a>

```go
CustomerAddress *string
```

- *Type:* *string

The IP address assigned to the customer interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#customer_address DirectconnectTransitVirtualInterface#customer_address}

---

### DirectconnectTransitVirtualInterfaceConfig <a name="DirectconnectTransitVirtualInterfaceConfig" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnecttransitvirtualinterface"

&directconnecttransitvirtualinterface.DirectconnectTransitVirtualInterfaceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BgpPeers: interface{},
	ConnectionId: *string,
	DirectConnectGatewayId: *string,
	VirtualInterfaceName: *string,
	Vlan: *f64,
	AllocateTransitVirtualInterfaceRoleArn: *string,
	EnableSiteLink: interface{},
	Mtu: *f64,
	RateLimit: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.bgpPeers">BgpPeers</a></code> | <code>interface{}</code> | The BGP peers configured on this virtual interface.. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.connectionId">ConnectionId</a></code> | <code>*string</code> | The ID or ARN of the connection or LAG. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.directConnectGatewayId">DirectConnectGatewayId</a></code> | <code>*string</code> | The ID or ARN of the Direct Connect gateway. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.virtualInterfaceName">VirtualInterfaceName</a></code> | <code>*string</code> | The name of the virtual interface assigned by the customer network. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.vlan">Vlan</a></code> | <code>*f64</code> | The ID of the VLAN. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.allocateTransitVirtualInterfaceRoleArn">AllocateTransitVirtualInterfaceRoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the role to allocate the TransitVifAllocation. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.enableSiteLink">EnableSiteLink</a></code> | <code>interface{}</code> | Indicates whether to enable or disable SiteLink. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.mtu">Mtu</a></code> | <code>*f64</code> | The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.rateLimit">RateLimit</a></code> | <code>*string</code> | The rate limit (bandwidth allocation) for the virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags associated with the private virtual interface. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BgpPeers`<sup>Required</sup> <a name="BgpPeers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.bgpPeers"></a>

```go
BgpPeers interface{}
```

- *Type:* interface{}

The BGP peers configured on this virtual interface..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#bgp_peers DirectconnectTransitVirtualInterface#bgp_peers}

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.connectionId"></a>

```go
ConnectionId *string
```

- *Type:* *string

The ID or ARN of the connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#connection_id DirectconnectTransitVirtualInterface#connection_id}

---

##### `DirectConnectGatewayId`<sup>Required</sup> <a name="DirectConnectGatewayId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.directConnectGatewayId"></a>

```go
DirectConnectGatewayId *string
```

- *Type:* *string

The ID or ARN of the Direct Connect gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#direct_connect_gateway_id DirectconnectTransitVirtualInterface#direct_connect_gateway_id}

---

##### `VirtualInterfaceName`<sup>Required</sup> <a name="VirtualInterfaceName" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.virtualInterfaceName"></a>

```go
VirtualInterfaceName *string
```

- *Type:* *string

The name of the virtual interface assigned by the customer network.

The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#virtual_interface_name DirectconnectTransitVirtualInterface#virtual_interface_name}

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.vlan"></a>

```go
Vlan *f64
```

- *Type:* *f64

The ID of the VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#vlan DirectconnectTransitVirtualInterface#vlan}

---

##### `AllocateTransitVirtualInterfaceRoleArn`<sup>Optional</sup> <a name="AllocateTransitVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.allocateTransitVirtualInterfaceRoleArn"></a>

```go
AllocateTransitVirtualInterfaceRoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the role to allocate the TransitVifAllocation.

Needs directconnect:AllocateTransitVirtualInterface permissions and tag permissions if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#allocate_transit_virtual_interface_role_arn DirectconnectTransitVirtualInterface#allocate_transit_virtual_interface_role_arn}

---

##### `EnableSiteLink`<sup>Optional</sup> <a name="EnableSiteLink" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.enableSiteLink"></a>

```go
EnableSiteLink interface{}
```

- *Type:* interface{}

Indicates whether to enable or disable SiteLink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#enable_site_link DirectconnectTransitVirtualInterface#enable_site_link}

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.mtu"></a>

```go
Mtu *f64
```

- *Type:* *f64

The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#mtu DirectconnectTransitVirtualInterface#mtu}

---

##### `RateLimit`<sup>Optional</sup> <a name="RateLimit" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.rateLimit"></a>

```go
RateLimit *string
```

- *Type:* *string

The rate limit (bandwidth allocation) for the virtual interface.

The value must be one of the supported bandwidth values (e.g., 50Mbps, 1Gbps, 10Gbps) and cannot exceed the bandwidth of the parent connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#rate_limit DirectconnectTransitVirtualInterface#rate_limit}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags associated with the private virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#tags DirectconnectTransitVirtualInterface#tags}

---

### DirectconnectTransitVirtualInterfaceTags <a name="DirectconnectTransitVirtualInterfaceTags" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnecttransitvirtualinterface"

&directconnecttransitvirtualinterface.DirectconnectTransitVirtualInterfaceTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#key DirectconnectTransitVirtualInterface#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#value DirectconnectTransitVirtualInterface#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectconnectTransitVirtualInterfaceBgpPeersList <a name="DirectconnectTransitVirtualInterfaceBgpPeersList" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnecttransitvirtualinterface"

directconnecttransitvirtualinterface.NewDirectconnectTransitVirtualInterfaceBgpPeersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DirectconnectTransitVirtualInterfaceBgpPeersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.get"></a>

```go
func Get(index *f64) DirectconnectTransitVirtualInterfaceBgpPeersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DirectconnectTransitVirtualInterfaceBgpPeersOutputReference <a name="DirectconnectTransitVirtualInterfaceBgpPeersOutputReference" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnecttransitvirtualinterface"

directconnecttransitvirtualinterface.NewDirectconnectTransitVirtualInterfaceBgpPeersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DirectconnectTransitVirtualInterfaceBgpPeersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetAmazonAddress">ResetAmazonAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetAuthKey">ResetAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetBgpPeerId">ResetBgpPeerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetCustomerAddress">ResetCustomerAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAmazonAddress` <a name="ResetAmazonAddress" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetAmazonAddress"></a>

```go
func ResetAmazonAddress()
```

##### `ResetAuthKey` <a name="ResetAuthKey" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetAuthKey"></a>

```go
func ResetAuthKey()
```

##### `ResetBgpPeerId` <a name="ResetBgpPeerId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetBgpPeerId"></a>

```go
func ResetBgpPeerId()
```

##### `ResetCustomerAddress` <a name="ResetCustomerAddress" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetCustomerAddress"></a>

```go
func ResetCustomerAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.addressFamilyInput">AddressFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.amazonAddressInput">AmazonAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.asnInput">AsnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.authKeyInput">AuthKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.bgpPeerIdInput">BgpPeerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.customerAddressInput">CustomerAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.addressFamily">AddressFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.amazonAddress">AmazonAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.asn">Asn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.authKey">AuthKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId">BgpPeerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.customerAddress">CustomerAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressFamilyInput`<sup>Optional</sup> <a name="AddressFamilyInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.addressFamilyInput"></a>

```go
func AddressFamilyInput() *string
```

- *Type:* *string

---

##### `AmazonAddressInput`<sup>Optional</sup> <a name="AmazonAddressInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.amazonAddressInput"></a>

```go
func AmazonAddressInput() *string
```

- *Type:* *string

---

##### `AsnInput`<sup>Optional</sup> <a name="AsnInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.asnInput"></a>

```go
func AsnInput() *string
```

- *Type:* *string

---

##### `AuthKeyInput`<sup>Optional</sup> <a name="AuthKeyInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.authKeyInput"></a>

```go
func AuthKeyInput() *string
```

- *Type:* *string

---

##### `BgpPeerIdInput`<sup>Optional</sup> <a name="BgpPeerIdInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.bgpPeerIdInput"></a>

```go
func BgpPeerIdInput() *string
```

- *Type:* *string

---

##### `CustomerAddressInput`<sup>Optional</sup> <a name="CustomerAddressInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.customerAddressInput"></a>

```go
func CustomerAddressInput() *string
```

- *Type:* *string

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.addressFamily"></a>

```go
func AddressFamily() *string
```

- *Type:* *string

---

##### `AmazonAddress`<sup>Required</sup> <a name="AmazonAddress" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.amazonAddress"></a>

```go
func AmazonAddress() *string
```

- *Type:* *string

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.asn"></a>

```go
func Asn() *string
```

- *Type:* *string

---

##### `AuthKey`<sup>Required</sup> <a name="AuthKey" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.authKey"></a>

```go
func AuthKey() *string
```

- *Type:* *string

---

##### `BgpPeerId`<sup>Required</sup> <a name="BgpPeerId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId"></a>

```go
func BgpPeerId() *string
```

- *Type:* *string

---

##### `CustomerAddress`<sup>Required</sup> <a name="CustomerAddress" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.customerAddress"></a>

```go
func CustomerAddress() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DirectconnectTransitVirtualInterfaceTagsList <a name="DirectconnectTransitVirtualInterfaceTagsList" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnecttransitvirtualinterface"

directconnecttransitvirtualinterface.NewDirectconnectTransitVirtualInterfaceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DirectconnectTransitVirtualInterfaceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.get"></a>

```go
func Get(index *f64) DirectconnectTransitVirtualInterfaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DirectconnectTransitVirtualInterfaceTagsOutputReference <a name="DirectconnectTransitVirtualInterfaceTagsOutputReference" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnecttransitvirtualinterface"

directconnecttransitvirtualinterface.NewDirectconnectTransitVirtualInterfaceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DirectconnectTransitVirtualInterfaceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



