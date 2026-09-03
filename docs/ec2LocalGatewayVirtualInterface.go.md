# `ec2LocalGatewayVirtualInterface` Submodule <a name="`ec2LocalGatewayVirtualInterface` Submodule" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2LocalGatewayVirtualInterface <a name="Ec2LocalGatewayVirtualInterface" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface awscc_ec2_local_gateway_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2localgatewayvirtualinterface"

ec2localgatewayvirtualinterface.NewEc2LocalGatewayVirtualInterface(scope Construct, id *string, config Ec2LocalGatewayVirtualInterfaceConfig) Ec2LocalGatewayVirtualInterface
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig">Ec2LocalGatewayVirtualInterfaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig">Ec2LocalGatewayVirtualInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetPeerBgpAsn">ResetPeerBgpAsn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetPeerBgpAsnExtended">ResetPeerBgpAsnExtended</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPeerBgpAsn` <a name="ResetPeerBgpAsn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetPeerBgpAsn"></a>

```go
func ResetPeerBgpAsn()
```

##### `ResetPeerBgpAsnExtended` <a name="ResetPeerBgpAsnExtended" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetPeerBgpAsnExtended"></a>

```go
func ResetPeerBgpAsnExtended()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2LocalGatewayVirtualInterface resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2localgatewayvirtualinterface"

ec2localgatewayvirtualinterface.Ec2LocalGatewayVirtualInterface_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2localgatewayvirtualinterface"

ec2localgatewayvirtualinterface.Ec2LocalGatewayVirtualInterface_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2localgatewayvirtualinterface"

ec2localgatewayvirtualinterface.Ec2LocalGatewayVirtualInterface_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2localgatewayvirtualinterface"

ec2localgatewayvirtualinterface.Ec2LocalGatewayVirtualInterface_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2LocalGatewayVirtualInterface resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2LocalGatewayVirtualInterface to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2LocalGatewayVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2LocalGatewayVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.configurationState">ConfigurationState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localBgpAsn">LocalBgpAsn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayId">LocalGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceId">LocalGatewayVirtualInterfaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList">Ec2LocalGatewayVirtualInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localAddressInput">LocalAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceGroupIdInput">LocalGatewayVirtualInterfaceGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.outpostLagIdInput">OutpostLagIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerAddressInput">PeerAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsnExtendedInput">PeerBgpAsnExtendedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsnInput">PeerBgpAsnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.vlanInput">VlanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localAddress">LocalAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceGroupId">LocalGatewayVirtualInterfaceGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.outpostLagId">OutpostLagId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerAddress">PeerAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsn">PeerBgpAsn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsnExtended">PeerBgpAsnExtended</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.vlan">Vlan</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigurationState`<sup>Required</sup> <a name="ConfigurationState" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.configurationState"></a>

```go
func ConfigurationState() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocalBgpAsn`<sup>Required</sup> <a name="LocalBgpAsn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localBgpAsn"></a>

```go
func LocalBgpAsn() *f64
```

- *Type:* *f64

---

##### `LocalGatewayId`<sup>Required</sup> <a name="LocalGatewayId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayId"></a>

```go
func LocalGatewayId() *string
```

- *Type:* *string

---

##### `LocalGatewayVirtualInterfaceId`<sup>Required</sup> <a name="LocalGatewayVirtualInterfaceId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceId"></a>

```go
func LocalGatewayVirtualInterfaceId() *string
```

- *Type:* *string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.tags"></a>

```go
func Tags() Ec2LocalGatewayVirtualInterfaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList">Ec2LocalGatewayVirtualInterfaceTagsList</a>

---

##### `LocalAddressInput`<sup>Optional</sup> <a name="LocalAddressInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localAddressInput"></a>

```go
func LocalAddressInput() *string
```

- *Type:* *string

---

##### `LocalGatewayVirtualInterfaceGroupIdInput`<sup>Optional</sup> <a name="LocalGatewayVirtualInterfaceGroupIdInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceGroupIdInput"></a>

```go
func LocalGatewayVirtualInterfaceGroupIdInput() *string
```

- *Type:* *string

---

##### `OutpostLagIdInput`<sup>Optional</sup> <a name="OutpostLagIdInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.outpostLagIdInput"></a>

```go
func OutpostLagIdInput() *string
```

- *Type:* *string

---

##### `PeerAddressInput`<sup>Optional</sup> <a name="PeerAddressInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerAddressInput"></a>

```go
func PeerAddressInput() *string
```

- *Type:* *string

---

##### `PeerBgpAsnExtendedInput`<sup>Optional</sup> <a name="PeerBgpAsnExtendedInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsnExtendedInput"></a>

```go
func PeerBgpAsnExtendedInput() *f64
```

- *Type:* *f64

---

##### `PeerBgpAsnInput`<sup>Optional</sup> <a name="PeerBgpAsnInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsnInput"></a>

```go
func PeerBgpAsnInput() *f64
```

- *Type:* *f64

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `VlanInput`<sup>Optional</sup> <a name="VlanInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.vlanInput"></a>

```go
func VlanInput() *f64
```

- *Type:* *f64

---

##### `LocalAddress`<sup>Required</sup> <a name="LocalAddress" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localAddress"></a>

```go
func LocalAddress() *string
```

- *Type:* *string

---

##### `LocalGatewayVirtualInterfaceGroupId`<sup>Required</sup> <a name="LocalGatewayVirtualInterfaceGroupId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceGroupId"></a>

```go
func LocalGatewayVirtualInterfaceGroupId() *string
```

- *Type:* *string

---

##### `OutpostLagId`<sup>Required</sup> <a name="OutpostLagId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.outpostLagId"></a>

```go
func OutpostLagId() *string
```

- *Type:* *string

---

##### `PeerAddress`<sup>Required</sup> <a name="PeerAddress" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerAddress"></a>

```go
func PeerAddress() *string
```

- *Type:* *string

---

##### `PeerBgpAsn`<sup>Required</sup> <a name="PeerBgpAsn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsn"></a>

```go
func PeerBgpAsn() *f64
```

- *Type:* *f64

---

##### `PeerBgpAsnExtended`<sup>Required</sup> <a name="PeerBgpAsnExtended" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsnExtended"></a>

```go
func PeerBgpAsnExtended() *f64
```

- *Type:* *f64

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.vlan"></a>

```go
func Vlan() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2LocalGatewayVirtualInterfaceConfig <a name="Ec2LocalGatewayVirtualInterfaceConfig" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2localgatewayvirtualinterface"

&ec2localgatewayvirtualinterface.Ec2LocalGatewayVirtualInterfaceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	LocalAddress: *string,
	LocalGatewayVirtualInterfaceGroupId: *string,
	OutpostLagId: *string,
	PeerAddress: *string,
	Vlan: *f64,
	PeerBgpAsn: *f64,
	PeerBgpAsnExtended: *f64,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.localAddress">LocalAddress</a></code> | <code>*string</code> | The local address. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.localGatewayVirtualInterfaceGroupId">LocalGatewayVirtualInterfaceGroupId</a></code> | <code>*string</code> | The ID of the virtual interface group. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.outpostLagId">OutpostLagId</a></code> | <code>*string</code> | The Outpost LAG ID. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.peerAddress">PeerAddress</a></code> | <code>*string</code> | The peer address. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.vlan">Vlan</a></code> | <code>*f64</code> | The ID of the VLAN. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.peerBgpAsn">PeerBgpAsn</a></code> | <code>*f64</code> | The peer BGP ASN. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.peerBgpAsnExtended">PeerBgpAsnExtended</a></code> | <code>*f64</code> | The extended 32-bit ASN of the BGP peer for use with larger ASN values. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LocalAddress`<sup>Required</sup> <a name="LocalAddress" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.localAddress"></a>

```go
LocalAddress *string
```

- *Type:* *string

The local address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#local_address Ec2LocalGatewayVirtualInterface#local_address}

---

##### `LocalGatewayVirtualInterfaceGroupId`<sup>Required</sup> <a name="LocalGatewayVirtualInterfaceGroupId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.localGatewayVirtualInterfaceGroupId"></a>

```go
LocalGatewayVirtualInterfaceGroupId *string
```

- *Type:* *string

The ID of the virtual interface group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#local_gateway_virtual_interface_group_id Ec2LocalGatewayVirtualInterface#local_gateway_virtual_interface_group_id}

---

##### `OutpostLagId`<sup>Required</sup> <a name="OutpostLagId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.outpostLagId"></a>

```go
OutpostLagId *string
```

- *Type:* *string

The Outpost LAG ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#outpost_lag_id Ec2LocalGatewayVirtualInterface#outpost_lag_id}

---

##### `PeerAddress`<sup>Required</sup> <a name="PeerAddress" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.peerAddress"></a>

```go
PeerAddress *string
```

- *Type:* *string

The peer address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#peer_address Ec2LocalGatewayVirtualInterface#peer_address}

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.vlan"></a>

```go
Vlan *f64
```

- *Type:* *f64

The ID of the VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#vlan Ec2LocalGatewayVirtualInterface#vlan}

---

##### `PeerBgpAsn`<sup>Optional</sup> <a name="PeerBgpAsn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.peerBgpAsn"></a>

```go
PeerBgpAsn *f64
```

- *Type:* *f64

The peer BGP ASN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#peer_bgp_asn Ec2LocalGatewayVirtualInterface#peer_bgp_asn}

---

##### `PeerBgpAsnExtended`<sup>Optional</sup> <a name="PeerBgpAsnExtended" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.peerBgpAsnExtended"></a>

```go
PeerBgpAsnExtended *f64
```

- *Type:* *f64

The extended 32-bit ASN of the BGP peer for use with larger ASN values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#peer_bgp_asn_extended Ec2LocalGatewayVirtualInterface#peer_bgp_asn_extended}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#tags Ec2LocalGatewayVirtualInterface#tags}

---

### Ec2LocalGatewayVirtualInterfaceTags <a name="Ec2LocalGatewayVirtualInterfaceTags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2localgatewayvirtualinterface"

&ec2localgatewayvirtualinterface.Ec2LocalGatewayVirtualInterfaceTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#key Ec2LocalGatewayVirtualInterface#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#value Ec2LocalGatewayVirtualInterface#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2LocalGatewayVirtualInterfaceTagsList <a name="Ec2LocalGatewayVirtualInterfaceTagsList" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2localgatewayvirtualinterface"

ec2localgatewayvirtualinterface.NewEc2LocalGatewayVirtualInterfaceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2LocalGatewayVirtualInterfaceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.get"></a>

```go
func Get(index *f64) Ec2LocalGatewayVirtualInterfaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2LocalGatewayVirtualInterfaceTagsOutputReference <a name="Ec2LocalGatewayVirtualInterfaceTagsOutputReference" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2localgatewayvirtualinterface"

ec2localgatewayvirtualinterface.NewEc2LocalGatewayVirtualInterfaceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2LocalGatewayVirtualInterfaceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



