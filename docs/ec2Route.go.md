# `ec2Route` Submodule <a name="`ec2Route` Submodule" id="@cdktn/provider-awscc.ec2Route"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2Route <a name="Ec2Route" id="@cdktn/provider-awscc.ec2Route.Ec2Route"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route awscc_ec2_route}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2route"

ec2route.NewEc2Route(scope Construct, id *string, config Ec2RouteConfig) Ec2Route
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig">Ec2RouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig">Ec2RouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetCarrierGatewayId">ResetCarrierGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetCoreNetworkArn">ResetCoreNetworkArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetDestinationCidrBlock">ResetDestinationCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetDestinationIpv6CidrBlock">ResetDestinationIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetDestinationPrefixListId">ResetDestinationPrefixListId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetEgressOnlyInternetGatewayId">ResetEgressOnlyInternetGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetGatewayId">ResetGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetLocalGatewayId">ResetLocalGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetNatGatewayId">ResetNatGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetNetworkInterfaceId">ResetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetOdbNetworkArn">ResetOdbNetworkArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetTransitGatewayId">ResetTransitGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetVpcEndpointId">ResetVpcEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetVpcPeeringConnectionId">ResetVpcPeeringConnectionId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Route.Ec2Route.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2Route.Ec2Route.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2Route.Ec2Route.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2Route.Ec2Route.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2Route.Ec2Route.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Route.Ec2Route.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2Route.Ec2Route.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2Route.Ec2Route.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2Route.Ec2Route.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2Route.Ec2Route.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2Route.Ec2Route.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2Route.Ec2Route.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2Route.Ec2Route.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Route.Ec2Route.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2Route.Ec2Route.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2Route.Ec2Route.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2Route.Ec2Route.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCarrierGatewayId` <a name="ResetCarrierGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetCarrierGatewayId"></a>

```go
func ResetCarrierGatewayId()
```

##### `ResetCoreNetworkArn` <a name="ResetCoreNetworkArn" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetCoreNetworkArn"></a>

```go
func ResetCoreNetworkArn()
```

##### `ResetDestinationCidrBlock` <a name="ResetDestinationCidrBlock" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetDestinationCidrBlock"></a>

```go
func ResetDestinationCidrBlock()
```

##### `ResetDestinationIpv6CidrBlock` <a name="ResetDestinationIpv6CidrBlock" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetDestinationIpv6CidrBlock"></a>

```go
func ResetDestinationIpv6CidrBlock()
```

##### `ResetDestinationPrefixListId` <a name="ResetDestinationPrefixListId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetDestinationPrefixListId"></a>

```go
func ResetDestinationPrefixListId()
```

##### `ResetEgressOnlyInternetGatewayId` <a name="ResetEgressOnlyInternetGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetEgressOnlyInternetGatewayId"></a>

```go
func ResetEgressOnlyInternetGatewayId()
```

##### `ResetGatewayId` <a name="ResetGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetGatewayId"></a>

```go
func ResetGatewayId()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetInstanceId"></a>

```go
func ResetInstanceId()
```

##### `ResetLocalGatewayId` <a name="ResetLocalGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetLocalGatewayId"></a>

```go
func ResetLocalGatewayId()
```

##### `ResetNatGatewayId` <a name="ResetNatGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetNatGatewayId"></a>

```go
func ResetNatGatewayId()
```

##### `ResetNetworkInterfaceId` <a name="ResetNetworkInterfaceId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetNetworkInterfaceId"></a>

```go
func ResetNetworkInterfaceId()
```

##### `ResetOdbNetworkArn` <a name="ResetOdbNetworkArn" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetOdbNetworkArn"></a>

```go
func ResetOdbNetworkArn()
```

##### `ResetTransitGatewayId` <a name="ResetTransitGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetTransitGatewayId"></a>

```go
func ResetTransitGatewayId()
```

##### `ResetVpcEndpointId` <a name="ResetVpcEndpointId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetVpcEndpointId"></a>

```go
func ResetVpcEndpointId()
```

##### `ResetVpcPeeringConnectionId` <a name="ResetVpcPeeringConnectionId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetVpcPeeringConnectionId"></a>

```go
func ResetVpcPeeringConnectionId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2Route resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2Route.Ec2Route.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2route"

ec2route.Ec2Route_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Route.Ec2Route.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2Route.Ec2Route.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2route"

ec2route.Ec2Route_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Route.Ec2Route.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2Route.Ec2Route.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2route"

ec2route.Ec2Route_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Route.Ec2Route.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2Route.Ec2Route.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2route"

ec2route.Ec2Route_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2Route resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2Route.Ec2Route.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2Route to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2Route that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Route.Ec2Route.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2Route to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.carrierGatewayIdInput">CarrierGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.coreNetworkArnInput">CoreNetworkArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationCidrBlockInput">DestinationCidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationIpv6CidrBlockInput">DestinationIpv6CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationPrefixListIdInput">DestinationPrefixListIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.egressOnlyInternetGatewayIdInput">EgressOnlyInternetGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.gatewayIdInput">GatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.localGatewayIdInput">LocalGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.natGatewayIdInput">NatGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.networkInterfaceIdInput">NetworkInterfaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.odbNetworkArnInput">OdbNetworkArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.routeTableIdInput">RouteTableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.transitGatewayIdInput">TransitGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.vpcEndpointIdInput">VpcEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.vpcPeeringConnectionIdInput">VpcPeeringConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.carrierGatewayId">CarrierGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.coreNetworkArn">CoreNetworkArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationCidrBlock">DestinationCidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationIpv6CidrBlock">DestinationIpv6CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationPrefixListId">DestinationPrefixListId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.egressOnlyInternetGatewayId">EgressOnlyInternetGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.gatewayId">GatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.localGatewayId">LocalGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.natGatewayId">NatGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.odbNetworkArn">OdbNetworkArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.routeTableId">RouteTableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.transitGatewayId">TransitGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.vpcEndpointId">VpcEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.vpcPeeringConnectionId">VpcPeeringConnectionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.cidrBlock"></a>

```go
func CidrBlock() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `CarrierGatewayIdInput`<sup>Optional</sup> <a name="CarrierGatewayIdInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.carrierGatewayIdInput"></a>

```go
func CarrierGatewayIdInput() *string
```

- *Type:* *string

---

##### `CoreNetworkArnInput`<sup>Optional</sup> <a name="CoreNetworkArnInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.coreNetworkArnInput"></a>

```go
func CoreNetworkArnInput() *string
```

- *Type:* *string

---

##### `DestinationCidrBlockInput`<sup>Optional</sup> <a name="DestinationCidrBlockInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationCidrBlockInput"></a>

```go
func DestinationCidrBlockInput() *string
```

- *Type:* *string

---

##### `DestinationIpv6CidrBlockInput`<sup>Optional</sup> <a name="DestinationIpv6CidrBlockInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationIpv6CidrBlockInput"></a>

```go
func DestinationIpv6CidrBlockInput() *string
```

- *Type:* *string

---

##### `DestinationPrefixListIdInput`<sup>Optional</sup> <a name="DestinationPrefixListIdInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationPrefixListIdInput"></a>

```go
func DestinationPrefixListIdInput() *string
```

- *Type:* *string

---

##### `EgressOnlyInternetGatewayIdInput`<sup>Optional</sup> <a name="EgressOnlyInternetGatewayIdInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.egressOnlyInternetGatewayIdInput"></a>

```go
func EgressOnlyInternetGatewayIdInput() *string
```

- *Type:* *string

---

##### `GatewayIdInput`<sup>Optional</sup> <a name="GatewayIdInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.gatewayIdInput"></a>

```go
func GatewayIdInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `LocalGatewayIdInput`<sup>Optional</sup> <a name="LocalGatewayIdInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.localGatewayIdInput"></a>

```go
func LocalGatewayIdInput() *string
```

- *Type:* *string

---

##### `NatGatewayIdInput`<sup>Optional</sup> <a name="NatGatewayIdInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.natGatewayIdInput"></a>

```go
func NatGatewayIdInput() *string
```

- *Type:* *string

---

##### `NetworkInterfaceIdInput`<sup>Optional</sup> <a name="NetworkInterfaceIdInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.networkInterfaceIdInput"></a>

```go
func NetworkInterfaceIdInput() *string
```

- *Type:* *string

---

##### `OdbNetworkArnInput`<sup>Optional</sup> <a name="OdbNetworkArnInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.odbNetworkArnInput"></a>

```go
func OdbNetworkArnInput() *string
```

- *Type:* *string

---

##### `RouteTableIdInput`<sup>Optional</sup> <a name="RouteTableIdInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.routeTableIdInput"></a>

```go
func RouteTableIdInput() *string
```

- *Type:* *string

---

##### `TransitGatewayIdInput`<sup>Optional</sup> <a name="TransitGatewayIdInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.transitGatewayIdInput"></a>

```go
func TransitGatewayIdInput() *string
```

- *Type:* *string

---

##### `VpcEndpointIdInput`<sup>Optional</sup> <a name="VpcEndpointIdInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.vpcEndpointIdInput"></a>

```go
func VpcEndpointIdInput() *string
```

- *Type:* *string

---

##### `VpcPeeringConnectionIdInput`<sup>Optional</sup> <a name="VpcPeeringConnectionIdInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.vpcPeeringConnectionIdInput"></a>

```go
func VpcPeeringConnectionIdInput() *string
```

- *Type:* *string

---

##### `CarrierGatewayId`<sup>Required</sup> <a name="CarrierGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.carrierGatewayId"></a>

```go
func CarrierGatewayId() *string
```

- *Type:* *string

---

##### `CoreNetworkArn`<sup>Required</sup> <a name="CoreNetworkArn" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.coreNetworkArn"></a>

```go
func CoreNetworkArn() *string
```

- *Type:* *string

---

##### `DestinationCidrBlock`<sup>Required</sup> <a name="DestinationCidrBlock" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationCidrBlock"></a>

```go
func DestinationCidrBlock() *string
```

- *Type:* *string

---

##### `DestinationIpv6CidrBlock`<sup>Required</sup> <a name="DestinationIpv6CidrBlock" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationIpv6CidrBlock"></a>

```go
func DestinationIpv6CidrBlock() *string
```

- *Type:* *string

---

##### `DestinationPrefixListId`<sup>Required</sup> <a name="DestinationPrefixListId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationPrefixListId"></a>

```go
func DestinationPrefixListId() *string
```

- *Type:* *string

---

##### `EgressOnlyInternetGatewayId`<sup>Required</sup> <a name="EgressOnlyInternetGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.egressOnlyInternetGatewayId"></a>

```go
func EgressOnlyInternetGatewayId() *string
```

- *Type:* *string

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.gatewayId"></a>

```go
func GatewayId() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `LocalGatewayId`<sup>Required</sup> <a name="LocalGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.localGatewayId"></a>

```go
func LocalGatewayId() *string
```

- *Type:* *string

---

##### `NatGatewayId`<sup>Required</sup> <a name="NatGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.natGatewayId"></a>

```go
func NatGatewayId() *string
```

- *Type:* *string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.networkInterfaceId"></a>

```go
func NetworkInterfaceId() *string
```

- *Type:* *string

---

##### `OdbNetworkArn`<sup>Required</sup> <a name="OdbNetworkArn" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.odbNetworkArn"></a>

```go
func OdbNetworkArn() *string
```

- *Type:* *string

---

##### `RouteTableId`<sup>Required</sup> <a name="RouteTableId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.routeTableId"></a>

```go
func RouteTableId() *string
```

- *Type:* *string

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.transitGatewayId"></a>

```go
func TransitGatewayId() *string
```

- *Type:* *string

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.vpcEndpointId"></a>

```go
func VpcEndpointId() *string
```

- *Type:* *string

---

##### `VpcPeeringConnectionId`<sup>Required</sup> <a name="VpcPeeringConnectionId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.vpcPeeringConnectionId"></a>

```go
func VpcPeeringConnectionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2RouteConfig <a name="Ec2RouteConfig" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2route"

&ec2route.Ec2RouteConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	RouteTableId: *string,
	CarrierGatewayId: *string,
	CoreNetworkArn: *string,
	DestinationCidrBlock: *string,
	DestinationIpv6CidrBlock: *string,
	DestinationPrefixListId: *string,
	EgressOnlyInternetGatewayId: *string,
	GatewayId: *string,
	InstanceId: *string,
	LocalGatewayId: *string,
	NatGatewayId: *string,
	NetworkInterfaceId: *string,
	OdbNetworkArn: *string,
	TransitGatewayId: *string,
	VpcEndpointId: *string,
	VpcPeeringConnectionId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.routeTableId">RouteTableId</a></code> | <code>*string</code> | The ID of the route table for the route. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.carrierGatewayId">CarrierGatewayId</a></code> | <code>*string</code> | The ID of the carrier gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.coreNetworkArn">CoreNetworkArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the core network. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.destinationCidrBlock">DestinationCidrBlock</a></code> | <code>*string</code> | The IPv4 CIDR address block used for the destination match. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.destinationIpv6CidrBlock">DestinationIpv6CidrBlock</a></code> | <code>*string</code> | The IPv6 CIDR block used for the destination match. Routing decisions are based on the most specific match. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.destinationPrefixListId">DestinationPrefixListId</a></code> | <code>*string</code> | The ID of a prefix list used for the destination match. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.egressOnlyInternetGatewayId">EgressOnlyInternetGatewayId</a></code> | <code>*string</code> | [IPv6 traffic only] The ID of an egress-only internet gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.gatewayId">GatewayId</a></code> | <code>*string</code> | The ID of an internet gateway or virtual private gateway attached to your VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.instanceId">InstanceId</a></code> | <code>*string</code> | The ID of a NAT instance in your VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.localGatewayId">LocalGatewayId</a></code> | <code>*string</code> | The ID of the local gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.natGatewayId">NatGatewayId</a></code> | <code>*string</code> | [IPv4 traffic only] The ID of a NAT gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | The ID of a network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.odbNetworkArn">OdbNetworkArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the ODB network. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.transitGatewayId">TransitGatewayId</a></code> | <code>*string</code> | The ID of a transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.vpcEndpointId">VpcEndpointId</a></code> | <code>*string</code> | The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.vpcPeeringConnectionId">VpcPeeringConnectionId</a></code> | <code>*string</code> | The ID of a VPC peering connection. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RouteTableId`<sup>Required</sup> <a name="RouteTableId" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.routeTableId"></a>

```go
RouteTableId *string
```

- *Type:* *string

The ID of the route table for the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#route_table_id Ec2Route#route_table_id}

---

##### `CarrierGatewayId`<sup>Optional</sup> <a name="CarrierGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.carrierGatewayId"></a>

```go
CarrierGatewayId *string
```

- *Type:* *string

The ID of the carrier gateway.

You can only use this option when the VPC contains a subnet which is associated with a Wavelength Zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#carrier_gateway_id Ec2Route#carrier_gateway_id}

---

##### `CoreNetworkArn`<sup>Optional</sup> <a name="CoreNetworkArn" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.coreNetworkArn"></a>

```go
CoreNetworkArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the core network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#core_network_arn Ec2Route#core_network_arn}

---

##### `DestinationCidrBlock`<sup>Optional</sup> <a name="DestinationCidrBlock" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.destinationCidrBlock"></a>

```go
DestinationCidrBlock *string
```

- *Type:* *string

The IPv4 CIDR address block used for the destination match.

Routing decisions are based on the most specific match. We modify the specified CIDR block to its canonical form; for example, if you specify `100.68.0.18/18`, we modify it to `100.68.0.0/18`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#destination_cidr_block Ec2Route#destination_cidr_block}

---

##### `DestinationIpv6CidrBlock`<sup>Optional</sup> <a name="DestinationIpv6CidrBlock" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.destinationIpv6CidrBlock"></a>

```go
DestinationIpv6CidrBlock *string
```

- *Type:* *string

The IPv6 CIDR block used for the destination match. Routing decisions are based on the most specific match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#destination_ipv_6_cidr_block Ec2Route#destination_ipv_6_cidr_block}

---

##### `DestinationPrefixListId`<sup>Optional</sup> <a name="DestinationPrefixListId" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.destinationPrefixListId"></a>

```go
DestinationPrefixListId *string
```

- *Type:* *string

The ID of a prefix list used for the destination match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#destination_prefix_list_id Ec2Route#destination_prefix_list_id}

---

##### `EgressOnlyInternetGatewayId`<sup>Optional</sup> <a name="EgressOnlyInternetGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.egressOnlyInternetGatewayId"></a>

```go
EgressOnlyInternetGatewayId *string
```

- *Type:* *string

[IPv6 traffic only] The ID of an egress-only internet gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#egress_only_internet_gateway_id Ec2Route#egress_only_internet_gateway_id}

---

##### `GatewayId`<sup>Optional</sup> <a name="GatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.gatewayId"></a>

```go
GatewayId *string
```

- *Type:* *string

The ID of an internet gateway or virtual private gateway attached to your VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#gateway_id Ec2Route#gateway_id}

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

The ID of a NAT instance in your VPC.

The operation fails if you specify an instance ID unless exactly one network interface is attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#instance_id Ec2Route#instance_id}

---

##### `LocalGatewayId`<sup>Optional</sup> <a name="LocalGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.localGatewayId"></a>

```go
LocalGatewayId *string
```

- *Type:* *string

The ID of the local gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#local_gateway_id Ec2Route#local_gateway_id}

---

##### `NatGatewayId`<sup>Optional</sup> <a name="NatGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.natGatewayId"></a>

```go
NatGatewayId *string
```

- *Type:* *string

[IPv4 traffic only] The ID of a NAT gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#nat_gateway_id Ec2Route#nat_gateway_id}

---

##### `NetworkInterfaceId`<sup>Optional</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.networkInterfaceId"></a>

```go
NetworkInterfaceId *string
```

- *Type:* *string

The ID of a network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#network_interface_id Ec2Route#network_interface_id}

---

##### `OdbNetworkArn`<sup>Optional</sup> <a name="OdbNetworkArn" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.odbNetworkArn"></a>

```go
OdbNetworkArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#odb_network_arn Ec2Route#odb_network_arn}

---

##### `TransitGatewayId`<sup>Optional</sup> <a name="TransitGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.transitGatewayId"></a>

```go
TransitGatewayId *string
```

- *Type:* *string

The ID of a transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#transit_gateway_id Ec2Route#transit_gateway_id}

---

##### `VpcEndpointId`<sup>Optional</sup> <a name="VpcEndpointId" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.vpcEndpointId"></a>

```go
VpcEndpointId *string
```

- *Type:* *string

The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#vpc_endpoint_id Ec2Route#vpc_endpoint_id}

---

##### `VpcPeeringConnectionId`<sup>Optional</sup> <a name="VpcPeeringConnectionId" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.vpcPeeringConnectionId"></a>

```go
VpcPeeringConnectionId *string
```

- *Type:* *string

The ID of a VPC peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#vpc_peering_connection_id Ec2Route#vpc_peering_connection_id}

---



