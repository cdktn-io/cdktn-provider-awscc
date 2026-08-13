# `ec2VpnConnection` Submodule <a name="`ec2VpnConnection` Submodule" id="@cdktn/provider-awscc.ec2VpnConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VpnConnection <a name="Ec2VpnConnection" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection awscc_ec2_vpn_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

ec2vpnconnection.NewEc2VpnConnection(scope Construct, id *string, config Ec2VpnConnectionConfig) Ec2VpnConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig">Ec2VpnConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig">Ec2VpnConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.putVpnTunnelOptionsSpecifications">PutVpnTunnelOptionsSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetEnableAcceleration">ResetEnableAcceleration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetLocalIpv4NetworkCidr">ResetLocalIpv4NetworkCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetLocalIpv6NetworkCidr">ResetLocalIpv6NetworkCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetOutsideIpAddressType">ResetOutsideIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetPreSharedKeyStorage">ResetPreSharedKeyStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetRemoteIpv4NetworkCidr">ResetRemoteIpv4NetworkCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetRemoteIpv6NetworkCidr">ResetRemoteIpv6NetworkCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetStaticRoutesOnly">ResetStaticRoutesOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTransitGatewayId">ResetTransitGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTransportTransitGatewayAttachmentId">ResetTransportTransitGatewayAttachmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTunnelBandwidth">ResetTunnelBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTunnelInsideIpVersion">ResetTunnelInsideIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetVpnConcentratorId">ResetVpnConcentratorId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetVpnGatewayId">ResetVpnGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetVpnTunnelOptionsSpecifications">ResetVpnTunnelOptionsSpecifications</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVpnTunnelOptionsSpecifications` <a name="PutVpnTunnelOptionsSpecifications" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.putVpnTunnelOptionsSpecifications"></a>

```go
func PutVpnTunnelOptionsSpecifications(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.putVpnTunnelOptionsSpecifications.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEnableAcceleration` <a name="ResetEnableAcceleration" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetEnableAcceleration"></a>

```go
func ResetEnableAcceleration()
```

##### `ResetLocalIpv4NetworkCidr` <a name="ResetLocalIpv4NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetLocalIpv4NetworkCidr"></a>

```go
func ResetLocalIpv4NetworkCidr()
```

##### `ResetLocalIpv6NetworkCidr` <a name="ResetLocalIpv6NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetLocalIpv6NetworkCidr"></a>

```go
func ResetLocalIpv6NetworkCidr()
```

##### `ResetOutsideIpAddressType` <a name="ResetOutsideIpAddressType" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetOutsideIpAddressType"></a>

```go
func ResetOutsideIpAddressType()
```

##### `ResetPreSharedKeyStorage` <a name="ResetPreSharedKeyStorage" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetPreSharedKeyStorage"></a>

```go
func ResetPreSharedKeyStorage()
```

##### `ResetRemoteIpv4NetworkCidr` <a name="ResetRemoteIpv4NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetRemoteIpv4NetworkCidr"></a>

```go
func ResetRemoteIpv4NetworkCidr()
```

##### `ResetRemoteIpv6NetworkCidr` <a name="ResetRemoteIpv6NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetRemoteIpv6NetworkCidr"></a>

```go
func ResetRemoteIpv6NetworkCidr()
```

##### `ResetStaticRoutesOnly` <a name="ResetStaticRoutesOnly" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetStaticRoutesOnly"></a>

```go
func ResetStaticRoutesOnly()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTransitGatewayId` <a name="ResetTransitGatewayId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTransitGatewayId"></a>

```go
func ResetTransitGatewayId()
```

##### `ResetTransportTransitGatewayAttachmentId` <a name="ResetTransportTransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTransportTransitGatewayAttachmentId"></a>

```go
func ResetTransportTransitGatewayAttachmentId()
```

##### `ResetTunnelBandwidth` <a name="ResetTunnelBandwidth" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTunnelBandwidth"></a>

```go
func ResetTunnelBandwidth()
```

##### `ResetTunnelInsideIpVersion` <a name="ResetTunnelInsideIpVersion" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTunnelInsideIpVersion"></a>

```go
func ResetTunnelInsideIpVersion()
```

##### `ResetVpnConcentratorId` <a name="ResetVpnConcentratorId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetVpnConcentratorId"></a>

```go
func ResetVpnConcentratorId()
```

##### `ResetVpnGatewayId` <a name="ResetVpnGatewayId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetVpnGatewayId"></a>

```go
func ResetVpnGatewayId()
```

##### `ResetVpnTunnelOptionsSpecifications` <a name="ResetVpnTunnelOptionsSpecifications" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetVpnTunnelOptionsSpecifications"></a>

```go
func ResetVpnTunnelOptionsSpecifications()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VpnConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

ec2vpnconnection.Ec2VpnConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

ec2vpnconnection.Ec2VpnConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

ec2vpnconnection.Ec2VpnConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

ec2vpnconnection.Ec2VpnConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2VpnConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2VpnConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2VpnConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VpnConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList">Ec2VpnConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnConnectionId">VpnConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnTunnelOptionsSpecifications">VpnTunnelOptionsSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.customerGatewayIdInput">CustomerGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.enableAccelerationInput">EnableAccelerationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv4NetworkCidrInput">LocalIpv4NetworkCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv6NetworkCidrInput">LocalIpv6NetworkCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.outsideIpAddressTypeInput">OutsideIpAddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.preSharedKeyStorageInput">PreSharedKeyStorageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv4NetworkCidrInput">RemoteIpv4NetworkCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv6NetworkCidrInput">RemoteIpv6NetworkCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.staticRoutesOnlyInput">StaticRoutesOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transitGatewayIdInput">TransitGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transportTransitGatewayAttachmentIdInput">TransportTransitGatewayAttachmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelBandwidthInput">TunnelBandwidthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelInsideIpVersionInput">TunnelInsideIpVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnConcentratorIdInput">VpnConcentratorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnGatewayIdInput">VpnGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnTunnelOptionsSpecificationsInput">VpnTunnelOptionsSpecificationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.customerGatewayId">CustomerGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.enableAcceleration">EnableAcceleration</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv4NetworkCidr">LocalIpv4NetworkCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv6NetworkCidr">LocalIpv6NetworkCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.outsideIpAddressType">OutsideIpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.preSharedKeyStorage">PreSharedKeyStorage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv4NetworkCidr">RemoteIpv4NetworkCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv6NetworkCidr">RemoteIpv6NetworkCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.staticRoutesOnly">StaticRoutesOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transitGatewayId">TransitGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transportTransitGatewayAttachmentId">TransportTransitGatewayAttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelBandwidth">TunnelBandwidth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelInsideIpVersion">TunnelInsideIpVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnConcentratorId">VpnConcentratorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnGatewayId">VpnGatewayId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tags"></a>

```go
func Tags() Ec2VpnConnectionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList">Ec2VpnConnectionTagsList</a>

---

##### `VpnConnectionId`<sup>Required</sup> <a name="VpnConnectionId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnConnectionId"></a>

```go
func VpnConnectionId() *string
```

- *Type:* *string

---

##### `VpnTunnelOptionsSpecifications`<sup>Required</sup> <a name="VpnTunnelOptionsSpecifications" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnTunnelOptionsSpecifications"></a>

```go
func VpnTunnelOptionsSpecifications() Ec2VpnConnectionVpnTunnelOptionsSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsList</a>

---

##### `CustomerGatewayIdInput`<sup>Optional</sup> <a name="CustomerGatewayIdInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.customerGatewayIdInput"></a>

```go
func CustomerGatewayIdInput() *string
```

- *Type:* *string

---

##### `EnableAccelerationInput`<sup>Optional</sup> <a name="EnableAccelerationInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.enableAccelerationInput"></a>

```go
func EnableAccelerationInput() interface{}
```

- *Type:* interface{}

---

##### `LocalIpv4NetworkCidrInput`<sup>Optional</sup> <a name="LocalIpv4NetworkCidrInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv4NetworkCidrInput"></a>

```go
func LocalIpv4NetworkCidrInput() *string
```

- *Type:* *string

---

##### `LocalIpv6NetworkCidrInput`<sup>Optional</sup> <a name="LocalIpv6NetworkCidrInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv6NetworkCidrInput"></a>

```go
func LocalIpv6NetworkCidrInput() *string
```

- *Type:* *string

---

##### `OutsideIpAddressTypeInput`<sup>Optional</sup> <a name="OutsideIpAddressTypeInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.outsideIpAddressTypeInput"></a>

```go
func OutsideIpAddressTypeInput() *string
```

- *Type:* *string

---

##### `PreSharedKeyStorageInput`<sup>Optional</sup> <a name="PreSharedKeyStorageInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.preSharedKeyStorageInput"></a>

```go
func PreSharedKeyStorageInput() *string
```

- *Type:* *string

---

##### `RemoteIpv4NetworkCidrInput`<sup>Optional</sup> <a name="RemoteIpv4NetworkCidrInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv4NetworkCidrInput"></a>

```go
func RemoteIpv4NetworkCidrInput() *string
```

- *Type:* *string

---

##### `RemoteIpv6NetworkCidrInput`<sup>Optional</sup> <a name="RemoteIpv6NetworkCidrInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv6NetworkCidrInput"></a>

```go
func RemoteIpv6NetworkCidrInput() *string
```

- *Type:* *string

---

##### `StaticRoutesOnlyInput`<sup>Optional</sup> <a name="StaticRoutesOnlyInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.staticRoutesOnlyInput"></a>

```go
func StaticRoutesOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TransitGatewayIdInput`<sup>Optional</sup> <a name="TransitGatewayIdInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transitGatewayIdInput"></a>

```go
func TransitGatewayIdInput() *string
```

- *Type:* *string

---

##### `TransportTransitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="TransportTransitGatewayAttachmentIdInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transportTransitGatewayAttachmentIdInput"></a>

```go
func TransportTransitGatewayAttachmentIdInput() *string
```

- *Type:* *string

---

##### `TunnelBandwidthInput`<sup>Optional</sup> <a name="TunnelBandwidthInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelBandwidthInput"></a>

```go
func TunnelBandwidthInput() *string
```

- *Type:* *string

---

##### `TunnelInsideIpVersionInput`<sup>Optional</sup> <a name="TunnelInsideIpVersionInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelInsideIpVersionInput"></a>

```go
func TunnelInsideIpVersionInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VpnConcentratorIdInput`<sup>Optional</sup> <a name="VpnConcentratorIdInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnConcentratorIdInput"></a>

```go
func VpnConcentratorIdInput() *string
```

- *Type:* *string

---

##### `VpnGatewayIdInput`<sup>Optional</sup> <a name="VpnGatewayIdInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnGatewayIdInput"></a>

```go
func VpnGatewayIdInput() *string
```

- *Type:* *string

---

##### `VpnTunnelOptionsSpecificationsInput`<sup>Optional</sup> <a name="VpnTunnelOptionsSpecificationsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnTunnelOptionsSpecificationsInput"></a>

```go
func VpnTunnelOptionsSpecificationsInput() interface{}
```

- *Type:* interface{}

---

##### `CustomerGatewayId`<sup>Required</sup> <a name="CustomerGatewayId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.customerGatewayId"></a>

```go
func CustomerGatewayId() *string
```

- *Type:* *string

---

##### `EnableAcceleration`<sup>Required</sup> <a name="EnableAcceleration" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.enableAcceleration"></a>

```go
func EnableAcceleration() interface{}
```

- *Type:* interface{}

---

##### `LocalIpv4NetworkCidr`<sup>Required</sup> <a name="LocalIpv4NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv4NetworkCidr"></a>

```go
func LocalIpv4NetworkCidr() *string
```

- *Type:* *string

---

##### `LocalIpv6NetworkCidr`<sup>Required</sup> <a name="LocalIpv6NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv6NetworkCidr"></a>

```go
func LocalIpv6NetworkCidr() *string
```

- *Type:* *string

---

##### `OutsideIpAddressType`<sup>Required</sup> <a name="OutsideIpAddressType" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.outsideIpAddressType"></a>

```go
func OutsideIpAddressType() *string
```

- *Type:* *string

---

##### `PreSharedKeyStorage`<sup>Required</sup> <a name="PreSharedKeyStorage" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.preSharedKeyStorage"></a>

```go
func PreSharedKeyStorage() *string
```

- *Type:* *string

---

##### `RemoteIpv4NetworkCidr`<sup>Required</sup> <a name="RemoteIpv4NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv4NetworkCidr"></a>

```go
func RemoteIpv4NetworkCidr() *string
```

- *Type:* *string

---

##### `RemoteIpv6NetworkCidr`<sup>Required</sup> <a name="RemoteIpv6NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv6NetworkCidr"></a>

```go
func RemoteIpv6NetworkCidr() *string
```

- *Type:* *string

---

##### `StaticRoutesOnly`<sup>Required</sup> <a name="StaticRoutesOnly" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.staticRoutesOnly"></a>

```go
func StaticRoutesOnly() interface{}
```

- *Type:* interface{}

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transitGatewayId"></a>

```go
func TransitGatewayId() *string
```

- *Type:* *string

---

##### `TransportTransitGatewayAttachmentId`<sup>Required</sup> <a name="TransportTransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transportTransitGatewayAttachmentId"></a>

```go
func TransportTransitGatewayAttachmentId() *string
```

- *Type:* *string

---

##### `TunnelBandwidth`<sup>Required</sup> <a name="TunnelBandwidth" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelBandwidth"></a>

```go
func TunnelBandwidth() *string
```

- *Type:* *string

---

##### `TunnelInsideIpVersion`<sup>Required</sup> <a name="TunnelInsideIpVersion" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelInsideIpVersion"></a>

```go
func TunnelInsideIpVersion() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VpnConcentratorId`<sup>Required</sup> <a name="VpnConcentratorId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnConcentratorId"></a>

```go
func VpnConcentratorId() *string
```

- *Type:* *string

---

##### `VpnGatewayId`<sup>Required</sup> <a name="VpnGatewayId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnGatewayId"></a>

```go
func VpnGatewayId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VpnConnectionConfig <a name="Ec2VpnConnectionConfig" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

&ec2vpnconnection.Ec2VpnConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CustomerGatewayId: *string,
	Type: *string,
	EnableAcceleration: interface{},
	LocalIpv4NetworkCidr: *string,
	LocalIpv6NetworkCidr: *string,
	OutsideIpAddressType: *string,
	PreSharedKeyStorage: *string,
	RemoteIpv4NetworkCidr: *string,
	RemoteIpv6NetworkCidr: *string,
	StaticRoutesOnly: interface{},
	Tags: interface{},
	TransitGatewayId: *string,
	TransportTransitGatewayAttachmentId: *string,
	TunnelBandwidth: *string,
	TunnelInsideIpVersion: *string,
	VpnConcentratorId: *string,
	VpnGatewayId: *string,
	VpnTunnelOptionsSpecifications: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.customerGatewayId">CustomerGatewayId</a></code> | <code>*string</code> | The ID of the customer gateway at your end of the VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.type">Type</a></code> | <code>*string</code> | The type of VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.enableAcceleration">EnableAcceleration</a></code> | <code>interface{}</code> | Indicate whether to enable acceleration for the VPN connection.  Default: ``false``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.localIpv4NetworkCidr">LocalIpv4NetworkCidr</a></code> | <code>*string</code> | The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.  Default: ``0.0.0.0/0``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.localIpv6NetworkCidr">LocalIpv6NetworkCidr</a></code> | <code>*string</code> | The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.  Default: ``::/0``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.outsideIpAddressType">OutsideIpAddressType</a></code> | <code>*string</code> | The type of IP address assigned to the outside interface of the customer gateway device. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.preSharedKeyStorage">PreSharedKeyStorage</a></code> | <code>*string</code> | Describes the storage location for an instance store-backed AMI. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.remoteIpv4NetworkCidr">RemoteIpv4NetworkCidr</a></code> | <code>*string</code> | The IPv4 CIDR on the AWS side of the VPN connection.  Default: ``0.0.0.0/0``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.remoteIpv6NetworkCidr">RemoteIpv6NetworkCidr</a></code> | <code>*string</code> | The IPv6 CIDR on the AWS side of the VPN connection.  Default: ``::/0``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.staticRoutesOnly">StaticRoutesOnly</a></code> | <code>interface{}</code> | Indicates whether the VPN connection uses static routes only. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Any tags assigned to the VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.transitGatewayId">TransitGatewayId</a></code> | <code>*string</code> | The ID of the transit gateway associated with the VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.transportTransitGatewayAttachmentId">TransportTransitGatewayAttachmentId</a></code> | <code>*string</code> | The transit gateway attachment ID to use for the VPN tunnel.  Required if ``OutsideIpAddressType`` is set to ``PrivateIpv4``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.tunnelBandwidth">TunnelBandwidth</a></code> | <code>*string</code> | The desired bandwidth specification for the VPN tunnel, used when creating or modifying VPN connection options to set the tunnel's throughput capacity. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.tunnelInsideIpVersion">TunnelInsideIpVersion</a></code> | <code>*string</code> | Indicate whether the VPN tunnels process IPv4 or IPv6 traffic.  Default: ``ipv4``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.vpnConcentratorId">VpnConcentratorId</a></code> | <code>*string</code> | The ID of the VPN concentrator to associate with the VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.vpnGatewayId">VpnGatewayId</a></code> | <code>*string</code> | The ID of the virtual private gateway at the AWS side of the VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.vpnTunnelOptionsSpecifications">VpnTunnelOptionsSpecifications</a></code> | <code>interface{}</code> | The tunnel options for the VPN connection. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomerGatewayId`<sup>Required</sup> <a name="CustomerGatewayId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.customerGatewayId"></a>

```go
CustomerGatewayId *string
```

- *Type:* *string

The ID of the customer gateway at your end of the VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#customer_gateway_id Ec2VpnConnection#customer_gateway_id}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#type Ec2VpnConnection#type}

---

##### `EnableAcceleration`<sup>Optional</sup> <a name="EnableAcceleration" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.enableAcceleration"></a>

```go
EnableAcceleration interface{}
```

- *Type:* interface{}

Indicate whether to enable acceleration for the VPN connection.  Default: ``false``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#enable_acceleration Ec2VpnConnection#enable_acceleration}

---

##### `LocalIpv4NetworkCidr`<sup>Optional</sup> <a name="LocalIpv4NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.localIpv4NetworkCidr"></a>

```go
LocalIpv4NetworkCidr *string
```

- *Type:* *string

The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.  Default: ``0.0.0.0/0``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#local_ipv_4_network_cidr Ec2VpnConnection#local_ipv_4_network_cidr}

---

##### `LocalIpv6NetworkCidr`<sup>Optional</sup> <a name="LocalIpv6NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.localIpv6NetworkCidr"></a>

```go
LocalIpv6NetworkCidr *string
```

- *Type:* *string

The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.  Default: ``::/0``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#local_ipv_6_network_cidr Ec2VpnConnection#local_ipv_6_network_cidr}

---

##### `OutsideIpAddressType`<sup>Optional</sup> <a name="OutsideIpAddressType" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.outsideIpAddressType"></a>

```go
OutsideIpAddressType *string
```

- *Type:* *string

The type of IP address assigned to the outside interface of the customer gateway device.

Valid values: `PrivateIpv4` | `PublicIpv4` | `Ipv6`
Default: `PublicIpv4`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#outside_ip_address_type Ec2VpnConnection#outside_ip_address_type}

---

##### `PreSharedKeyStorage`<sup>Optional</sup> <a name="PreSharedKeyStorage" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.preSharedKeyStorage"></a>

```go
PreSharedKeyStorage *string
```

- *Type:* *string

Describes the storage location for an instance store-backed AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#pre_shared_key_storage Ec2VpnConnection#pre_shared_key_storage}

---

##### `RemoteIpv4NetworkCidr`<sup>Optional</sup> <a name="RemoteIpv4NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.remoteIpv4NetworkCidr"></a>

```go
RemoteIpv4NetworkCidr *string
```

- *Type:* *string

The IPv4 CIDR on the AWS side of the VPN connection.  Default: ``0.0.0.0/0``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#remote_ipv_4_network_cidr Ec2VpnConnection#remote_ipv_4_network_cidr}

---

##### `RemoteIpv6NetworkCidr`<sup>Optional</sup> <a name="RemoteIpv6NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.remoteIpv6NetworkCidr"></a>

```go
RemoteIpv6NetworkCidr *string
```

- *Type:* *string

The IPv6 CIDR on the AWS side of the VPN connection.  Default: ``::/0``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#remote_ipv_6_network_cidr Ec2VpnConnection#remote_ipv_6_network_cidr}

---

##### `StaticRoutesOnly`<sup>Optional</sup> <a name="StaticRoutesOnly" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.staticRoutesOnly"></a>

```go
StaticRoutesOnly interface{}
```

- *Type:* interface{}

Indicates whether the VPN connection uses static routes only.

Static routes must be used for devices that don't support BGP.
If you are creating a VPN connection for a device that does not support Border Gateway Protocol (BGP), you must specify `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#static_routes_only Ec2VpnConnection#static_routes_only}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Any tags assigned to the VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#tags Ec2VpnConnection#tags}

---

##### `TransitGatewayId`<sup>Optional</sup> <a name="TransitGatewayId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.transitGatewayId"></a>

```go
TransitGatewayId *string
```

- *Type:* *string

The ID of the transit gateway associated with the VPN connection.

You must specify either `TransitGatewayId` or `VpnGatewayId`, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#transit_gateway_id Ec2VpnConnection#transit_gateway_id}

---

##### `TransportTransitGatewayAttachmentId`<sup>Optional</sup> <a name="TransportTransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.transportTransitGatewayAttachmentId"></a>

```go
TransportTransitGatewayAttachmentId *string
```

- *Type:* *string

The transit gateway attachment ID to use for the VPN tunnel.  Required if ``OutsideIpAddressType`` is set to ``PrivateIpv4``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#transport_transit_gateway_attachment_id Ec2VpnConnection#transport_transit_gateway_attachment_id}

---

##### `TunnelBandwidth`<sup>Optional</sup> <a name="TunnelBandwidth" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.tunnelBandwidth"></a>

```go
TunnelBandwidth *string
```

- *Type:* *string

The desired bandwidth specification for the VPN tunnel, used when creating or modifying VPN connection options to set the tunnel's throughput capacity.

`standard` supports up to 1.25 Gbps per tunnel, while `large` supports up to 5 Gbps per tunnel. The default value is `standard`. Existing VPN connections without a bandwidth setting will automatically default to `standard`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#tunnel_bandwidth Ec2VpnConnection#tunnel_bandwidth}

---

##### `TunnelInsideIpVersion`<sup>Optional</sup> <a name="TunnelInsideIpVersion" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.tunnelInsideIpVersion"></a>

```go
TunnelInsideIpVersion *string
```

- *Type:* *string

Indicate whether the VPN tunnels process IPv4 or IPv6 traffic.  Default: ``ipv4``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#tunnel_inside_ip_version Ec2VpnConnection#tunnel_inside_ip_version}

---

##### `VpnConcentratorId`<sup>Optional</sup> <a name="VpnConcentratorId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.vpnConcentratorId"></a>

```go
VpnConcentratorId *string
```

- *Type:* *string

The ID of the VPN concentrator to associate with the VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#vpn_concentrator_id Ec2VpnConnection#vpn_concentrator_id}

---

##### `VpnGatewayId`<sup>Optional</sup> <a name="VpnGatewayId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.vpnGatewayId"></a>

```go
VpnGatewayId *string
```

- *Type:* *string

The ID of the virtual private gateway at the AWS side of the VPN connection.

You must specify either `TransitGatewayId` or `VpnGatewayId`, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#vpn_gateway_id Ec2VpnConnection#vpn_gateway_id}

---

##### `VpnTunnelOptionsSpecifications`<sup>Optional</sup> <a name="VpnTunnelOptionsSpecifications" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.vpnTunnelOptionsSpecifications"></a>

```go
VpnTunnelOptionsSpecifications interface{}
```

- *Type:* interface{}

The tunnel options for the VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#vpn_tunnel_options_specifications Ec2VpnConnection#vpn_tunnel_options_specifications}

---

### Ec2VpnConnectionTags <a name="Ec2VpnConnectionTags" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

&ec2vpnconnection.Ec2VpnConnectionTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags.property.key">Key</a></code> | <code>*string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags.property.value">Value</a></code> | <code>*string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#key Ec2VpnConnection#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecifications <a name="Ec2VpnConnectionVpnTunnelOptionsSpecifications" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

&ec2vpnconnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications {
	DpdTimeoutAction: *string,
	DpdTimeoutSeconds: *f64,
	EnableTunnelLifecycleControl: interface{},
	IkeVersions: interface{},
	LogOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions,
	Phase1DhGroupNumbers: interface{},
	Phase1EncryptionAlgorithms: interface{},
	Phase1IntegrityAlgorithms: interface{},
	Phase1LifetimeSeconds: *f64,
	Phase2DhGroupNumbers: interface{},
	Phase2EncryptionAlgorithms: interface{},
	Phase2IntegrityAlgorithms: interface{},
	Phase2LifetimeSeconds: *f64,
	PreSharedKey: *string,
	RekeyFuzzPercentage: *f64,
	RekeyMarginTimeSeconds: *f64,
	ReplayWindowSize: *f64,
	StartupAction: *string,
	TunnelInsideCidr: *string,
	TunnelInsideIpv6Cidr: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.dpdTimeoutAction">DpdTimeoutAction</a></code> | <code>*string</code> | The action to take after DPD timeout occurs. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.dpdTimeoutSeconds">DpdTimeoutSeconds</a></code> | <code>*f64</code> | The number of seconds after which a DPD timeout occurs. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.enableTunnelLifecycleControl">EnableTunnelLifecycleControl</a></code> | <code>interface{}</code> | Turn on or off tunnel endpoint lifecycle control feature. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.ikeVersions">IkeVersions</a></code> | <code>interface{}</code> | The IKE versions that are permitted for the VPN tunnel.  Valid values: ``ikev1`` \| ``ikev2``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.logOptions">LogOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions</a></code> | Options for logging VPN tunnel activity. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1DhGroupNumbers">Phase1DhGroupNumbers</a></code> | <code>interface{}</code> | One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 1 IKE negotiations. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1EncryptionAlgorithms">Phase1EncryptionAlgorithms</a></code> | <code>interface{}</code> | One or more encryption algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1IntegrityAlgorithms">Phase1IntegrityAlgorithms</a></code> | <code>interface{}</code> | One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1LifetimeSeconds">Phase1LifetimeSeconds</a></code> | <code>*f64</code> | The lifetime for phase 1 of the IKE negotiation, in seconds. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2DhGroupNumbers">Phase2DhGroupNumbers</a></code> | <code>interface{}</code> | One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 2 IKE negotiations. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2EncryptionAlgorithms">Phase2EncryptionAlgorithms</a></code> | <code>interface{}</code> | One or more encryption algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2IntegrityAlgorithms">Phase2IntegrityAlgorithms</a></code> | <code>interface{}</code> | One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2LifetimeSeconds">Phase2LifetimeSeconds</a></code> | <code>*f64</code> | The lifetime for phase 2 of the IKE negotiation, in seconds. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.preSharedKey">PreSharedKey</a></code> | <code>*string</code> | The pre-shared key (PSK) to establish initial authentication between the virtual private gateway and customer gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.rekeyFuzzPercentage">RekeyFuzzPercentage</a></code> | <code>*f64</code> | The percentage of the rekey window (determined by ``RekeyMarginTimeSeconds``) during which the rekey time is randomly selected. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.rekeyMarginTimeSeconds">RekeyMarginTimeSeconds</a></code> | <code>*f64</code> | The margin time, in seconds, before the phase 2 lifetime expires, during which the AWS side of the VPN connection performs an IKE rekey. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.replayWindowSize">ReplayWindowSize</a></code> | <code>*f64</code> | The number of packets in an IKE replay window.  Constraints: A value between 64 and 2048.  Default: ``1024``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.startupAction">StartupAction</a></code> | <code>*string</code> | The action to take when the establishing the tunnel for the VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.tunnelInsideCidr">TunnelInsideCidr</a></code> | <code>*string</code> | The range of inside IP addresses for the tunnel. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.tunnelInsideIpv6Cidr">TunnelInsideIpv6Cidr</a></code> | <code>*string</code> | The range of inside IPv6 addresses for the tunnel. |

---

##### `DpdTimeoutAction`<sup>Optional</sup> <a name="DpdTimeoutAction" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.dpdTimeoutAction"></a>

```go
DpdTimeoutAction *string
```

- *Type:* *string

The action to take after DPD timeout occurs.

Specify `restart` to restart the IKE initiation. Specify `clear` to end the IKE session.
Valid Values: `clear` | `none` | `restart`
Default: `clear`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#dpd_timeout_action Ec2VpnConnection#dpd_timeout_action}

---

##### `DpdTimeoutSeconds`<sup>Optional</sup> <a name="DpdTimeoutSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.dpdTimeoutSeconds"></a>

```go
DpdTimeoutSeconds *f64
```

- *Type:* *f64

The number of seconds after which a DPD timeout occurs.

Constraints: A value greater than or equal to 30.
Default: `30`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#dpd_timeout_seconds Ec2VpnConnection#dpd_timeout_seconds}

---

##### `EnableTunnelLifecycleControl`<sup>Optional</sup> <a name="EnableTunnelLifecycleControl" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.enableTunnelLifecycleControl"></a>

```go
EnableTunnelLifecycleControl interface{}
```

- *Type:* interface{}

Turn on or off tunnel endpoint lifecycle control feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#enable_tunnel_lifecycle_control Ec2VpnConnection#enable_tunnel_lifecycle_control}

---

##### `IkeVersions`<sup>Optional</sup> <a name="IkeVersions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.ikeVersions"></a>

```go
IkeVersions interface{}
```

- *Type:* interface{}

The IKE versions that are permitted for the VPN tunnel.  Valid values: ``ikev1`` | ``ikev2``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#ike_versions Ec2VpnConnection#ike_versions}

---

##### `LogOptions`<sup>Optional</sup> <a name="LogOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.logOptions"></a>

```go
LogOptions Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions</a>

Options for logging VPN tunnel activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#log_options Ec2VpnConnection#log_options}

---

##### `Phase1DhGroupNumbers`<sup>Optional</sup> <a name="Phase1DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1DhGroupNumbers"></a>

```go
Phase1DhGroupNumbers interface{}
```

- *Type:* interface{}

One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 1 IKE negotiations.

Valid values: `2` | `14` | `15` | `16` | `17` | `18` | `19` | `20` | `21` | `22` | `23` | `24`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#phase_1_dh_group_numbers Ec2VpnConnection#phase_1_dh_group_numbers}

---

##### `Phase1EncryptionAlgorithms`<sup>Optional</sup> <a name="Phase1EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1EncryptionAlgorithms"></a>

```go
Phase1EncryptionAlgorithms interface{}
```

- *Type:* interface{}

One or more encryption algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.

Valid values: `AES128` | `AES256` | `AES128-GCM-16` | `AES256-GCM-16`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#phase_1_encryption_algorithms Ec2VpnConnection#phase_1_encryption_algorithms}

---

##### `Phase1IntegrityAlgorithms`<sup>Optional</sup> <a name="Phase1IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1IntegrityAlgorithms"></a>

```go
Phase1IntegrityAlgorithms interface{}
```

- *Type:* interface{}

One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.

Valid values: `SHA1` | `SHA2-256` | `SHA2-384` | `SHA2-512`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#phase_1_integrity_algorithms Ec2VpnConnection#phase_1_integrity_algorithms}

---

##### `Phase1LifetimeSeconds`<sup>Optional</sup> <a name="Phase1LifetimeSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1LifetimeSeconds"></a>

```go
Phase1LifetimeSeconds *f64
```

- *Type:* *f64

The lifetime for phase 1 of the IKE negotiation, in seconds.

Constraints: A value between 900 and 28,800.
Default: `28800`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#phase_1_lifetime_seconds Ec2VpnConnection#phase_1_lifetime_seconds}

---

##### `Phase2DhGroupNumbers`<sup>Optional</sup> <a name="Phase2DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2DhGroupNumbers"></a>

```go
Phase2DhGroupNumbers interface{}
```

- *Type:* interface{}

One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 2 IKE negotiations.

Valid values: `2` | `5` | `14` | `15` | `16` | `17` | `18` | `19` | `20` | `21` | `22` | `23` | `24`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#phase_2_dh_group_numbers Ec2VpnConnection#phase_2_dh_group_numbers}

---

##### `Phase2EncryptionAlgorithms`<sup>Optional</sup> <a name="Phase2EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2EncryptionAlgorithms"></a>

```go
Phase2EncryptionAlgorithms interface{}
```

- *Type:* interface{}

One or more encryption algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.

Valid values: `AES128` | `AES256` | `AES128-GCM-16` | `AES256-GCM-16`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#phase_2_encryption_algorithms Ec2VpnConnection#phase_2_encryption_algorithms}

---

##### `Phase2IntegrityAlgorithms`<sup>Optional</sup> <a name="Phase2IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2IntegrityAlgorithms"></a>

```go
Phase2IntegrityAlgorithms interface{}
```

- *Type:* interface{}

One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.

Valid values: `SHA1` | `SHA2-256` | `SHA2-384` | `SHA2-512`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#phase_2_integrity_algorithms Ec2VpnConnection#phase_2_integrity_algorithms}

---

##### `Phase2LifetimeSeconds`<sup>Optional</sup> <a name="Phase2LifetimeSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2LifetimeSeconds"></a>

```go
Phase2LifetimeSeconds *f64
```

- *Type:* *f64

The lifetime for phase 2 of the IKE negotiation, in seconds.

Constraints: A value between 900 and 3,600. The value must be less than the value for `Phase1LifetimeSeconds`.
Default: `3600`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#phase_2_lifetime_seconds Ec2VpnConnection#phase_2_lifetime_seconds}

---

##### `PreSharedKey`<sup>Optional</sup> <a name="PreSharedKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.preSharedKey"></a>

```go
PreSharedKey *string
```

- *Type:* *string

The pre-shared key (PSK) to establish initial authentication between the virtual private gateway and customer gateway.

Constraints: Allowed characters are alphanumeric characters, periods (.), and underscores (_). Must be between 8 and 64 characters in length and cannot start with zero (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#pre_shared_key Ec2VpnConnection#pre_shared_key}

---

##### `RekeyFuzzPercentage`<sup>Optional</sup> <a name="RekeyFuzzPercentage" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.rekeyFuzzPercentage"></a>

```go
RekeyFuzzPercentage *f64
```

- *Type:* *f64

The percentage of the rekey window (determined by ``RekeyMarginTimeSeconds``) during which the rekey time is randomly selected.

Constraints: A value between 0 and 100.
Default: `100`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#rekey_fuzz_percentage Ec2VpnConnection#rekey_fuzz_percentage}

---

##### `RekeyMarginTimeSeconds`<sup>Optional</sup> <a name="RekeyMarginTimeSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.rekeyMarginTimeSeconds"></a>

```go
RekeyMarginTimeSeconds *f64
```

- *Type:* *f64

The margin time, in seconds, before the phase 2 lifetime expires, during which the AWS side of the VPN connection performs an IKE rekey.

The exact time of the rekey is randomly selected based on the value for `RekeyFuzzPercentage`.
Constraints: A value between 60 and half of `Phase2LifetimeSeconds`.
Default: `270`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#rekey_margin_time_seconds Ec2VpnConnection#rekey_margin_time_seconds}

---

##### `ReplayWindowSize`<sup>Optional</sup> <a name="ReplayWindowSize" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.replayWindowSize"></a>

```go
ReplayWindowSize *f64
```

- *Type:* *f64

The number of packets in an IKE replay window.  Constraints: A value between 64 and 2048.  Default: ``1024``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#replay_window_size Ec2VpnConnection#replay_window_size}

---

##### `StartupAction`<sup>Optional</sup> <a name="StartupAction" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.startupAction"></a>

```go
StartupAction *string
```

- *Type:* *string

The action to take when the establishing the tunnel for the VPN connection.

By default, your customer gateway device must initiate the IKE negotiation and bring up the tunnel. Specify `start` for AWS to initiate the IKE negotiation.
Valid Values: `add` | `start`
Default: `add`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#startup_action Ec2VpnConnection#startup_action}

---

##### `TunnelInsideCidr`<sup>Optional</sup> <a name="TunnelInsideCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.tunnelInsideCidr"></a>

```go
TunnelInsideCidr *string
```

- *Type:* *string

The range of inside IP addresses for the tunnel.

Any specified CIDR blocks must be unique across all VPN connections that use the same virtual private gateway.
Constraints: A size /30 CIDR block from the `169.254.0.0/16` range. The following CIDR blocks are reserved and cannot be used:

* `169.254.0.0/30`
* `169.254.1.0/30`
* `169.254.2.0/30`
* `169.254.3.0/30`
* `169.254.4.0/30`
* `169.254.5.0/30`
* `169.254.169.252/30`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#tunnel_inside_cidr Ec2VpnConnection#tunnel_inside_cidr}

---

##### `TunnelInsideIpv6Cidr`<sup>Optional</sup> <a name="TunnelInsideIpv6Cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.tunnelInsideIpv6Cidr"></a>

```go
TunnelInsideIpv6Cidr *string
```

- *Type:* *string

The range of inside IPv6 addresses for the tunnel.

Any specified CIDR blocks must be unique across all VPN connections that use the same transit gateway.
Constraints: A size /126 CIDR block from the local `fd00::/8` range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#tunnel_inside_ipv_6_cidr Ec2VpnConnection#tunnel_inside_ipv_6_cidr}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

&ec2vpnconnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions.property.value">Value</a></code> | <code>*string</code> | The IKE version. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions.property.value"></a>

```go
Value *string
```

- *Type:* *string

The IKE version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

&ec2vpnconnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions {
	CloudwatchLogOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions.property.cloudwatchLogOptions">CloudwatchLogOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions</a></code> | Options for sending VPN tunnel logs to CloudWatch. |

---

##### `CloudwatchLogOptions`<sup>Optional</sup> <a name="CloudwatchLogOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions.property.cloudwatchLogOptions"></a>

```go
CloudwatchLogOptions Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions</a>

Options for sending VPN tunnel logs to CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#cloudwatch_log_options Ec2VpnConnection#cloudwatch_log_options}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

&ec2vpnconnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions {
	BgpLogEnabled: interface{},
	BgpLogGroupArn: *string,
	BgpLogOutputFormat: *string,
	LogEnabled: interface{},
	LogGroupArn: *string,
	LogOutputFormat: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.bgpLogEnabled">BgpLogEnabled</a></code> | <code>interface{}</code> | Specifies whether to enable BGP logging for the VPN connection. Default value is ``False``.  Valid values: ``True`` \| ``False``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.bgpLogGroupArn">BgpLogGroupArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the CloudWatch log group where BGP logs will be sent. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.bgpLogOutputFormat">BgpLogOutputFormat</a></code> | <code>*string</code> | The desired output format for BGP logs to be sent to CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.logEnabled">LogEnabled</a></code> | <code>interface{}</code> | Enable or disable VPN tunnel logging feature. Default value is ``False``.  Valid values: ``True`` \| ``False``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.logGroupArn">LogGroupArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the CloudWatch log group to send logs to. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.logOutputFormat">LogOutputFormat</a></code> | <code>*string</code> | Set log format. Default format is ``json``.  Valid values: ``json`` \| ``text``. |

---

##### `BgpLogEnabled`<sup>Optional</sup> <a name="BgpLogEnabled" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.bgpLogEnabled"></a>

```go
BgpLogEnabled interface{}
```

- *Type:* interface{}

Specifies whether to enable BGP logging for the VPN connection. Default value is ``False``.  Valid values: ``True`` | ``False``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#bgp_log_enabled Ec2VpnConnection#bgp_log_enabled}

---

##### `BgpLogGroupArn`<sup>Optional</sup> <a name="BgpLogGroupArn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.bgpLogGroupArn"></a>

```go
BgpLogGroupArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the CloudWatch log group where BGP logs will be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#bgp_log_group_arn Ec2VpnConnection#bgp_log_group_arn}

---

##### `BgpLogOutputFormat`<sup>Optional</sup> <a name="BgpLogOutputFormat" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.bgpLogOutputFormat"></a>

```go
BgpLogOutputFormat *string
```

- *Type:* *string

The desired output format for BGP logs to be sent to CloudWatch.

Default format is `json`.
Valid values: `json` | `text`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#bgp_log_output_format Ec2VpnConnection#bgp_log_output_format}

---

##### `LogEnabled`<sup>Optional</sup> <a name="LogEnabled" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.logEnabled"></a>

```go
LogEnabled interface{}
```

- *Type:* interface{}

Enable or disable VPN tunnel logging feature. Default value is ``False``.  Valid values: ``True`` | ``False``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#log_enabled Ec2VpnConnection#log_enabled}

---

##### `LogGroupArn`<sup>Optional</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.logGroupArn"></a>

```go
LogGroupArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the CloudWatch log group to send logs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#log_group_arn Ec2VpnConnection#log_group_arn}

---

##### `LogOutputFormat`<sup>Optional</sup> <a name="LogOutputFormat" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.logOutputFormat"></a>

```go
LogOutputFormat *string
```

- *Type:* *string

Set log format. Default format is ``json``.  Valid values: ``json`` | ``text``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#log_output_format Ec2VpnConnection#log_output_format}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

&ec2vpnconnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers {
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers.property.value">Value</a></code> | <code>*f64</code> | The Diffie-Hellmann group number. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

The Diffie-Hellmann group number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

&ec2vpnconnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms.property.value">Value</a></code> | <code>*string</code> | The value for the encryption algorithm. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the encryption algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

&ec2vpnconnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms.property.value">Value</a></code> | <code>*string</code> | The value for the integrity algorithm. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the integrity algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

&ec2vpnconnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers {
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers.property.value">Value</a></code> | <code>*f64</code> | The Diffie-Hellmann group number. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

The Diffie-Hellmann group number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

&ec2vpnconnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms.property.value">Value</a></code> | <code>*string</code> | The encryption algorithm. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms.property.value"></a>

```go
Value *string
```

- *Type:* *string

The encryption algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

&ec2vpnconnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms.property.value">Value</a></code> | <code>*string</code> | The integrity algorithm. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms.property.value"></a>

```go
Value *string
```

- *Type:* *string

The integrity algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VpnConnectionTagsList <a name="Ec2VpnConnectionTagsList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

ec2vpnconnection.NewEc2VpnConnectionTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2VpnConnectionTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.get"></a>

```go
func Get(index *f64) Ec2VpnConnectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VpnConnectionTagsOutputReference <a name="Ec2VpnConnectionTagsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

ec2vpnconnection.NewEc2VpnConnectionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2VpnConnectionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

ec2vpnconnection.NewEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.get"></a>

```go
func Get(index *f64) Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

ec2vpnconnection.NewEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

ec2vpnconnection.NewEc2VpnConnectionVpnTunnelOptionsSpecificationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2VpnConnectionVpnTunnelOptionsSpecificationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.get"></a>

```go
func Get(index *f64) Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

ec2vpnconnection.NewEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetBgpLogEnabled">ResetBgpLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetBgpLogGroupArn">ResetBgpLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetBgpLogOutputFormat">ResetBgpLogOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetLogEnabled">ResetLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetLogGroupArn">ResetLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetLogOutputFormat">ResetLogOutputFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBgpLogEnabled` <a name="ResetBgpLogEnabled" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetBgpLogEnabled"></a>

```go
func ResetBgpLogEnabled()
```

##### `ResetBgpLogGroupArn` <a name="ResetBgpLogGroupArn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetBgpLogGroupArn"></a>

```go
func ResetBgpLogGroupArn()
```

##### `ResetBgpLogOutputFormat` <a name="ResetBgpLogOutputFormat" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetBgpLogOutputFormat"></a>

```go
func ResetBgpLogOutputFormat()
```

##### `ResetLogEnabled` <a name="ResetLogEnabled" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetLogEnabled"></a>

```go
func ResetLogEnabled()
```

##### `ResetLogGroupArn` <a name="ResetLogGroupArn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetLogGroupArn"></a>

```go
func ResetLogGroupArn()
```

##### `ResetLogOutputFormat` <a name="ResetLogOutputFormat" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetLogOutputFormat"></a>

```go
func ResetLogOutputFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogEnabledInput">BgpLogEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogGroupArnInput">BgpLogGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogOutputFormatInput">BgpLogOutputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logEnabledInput">LogEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArnInput">LogGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormatInput">LogOutputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogEnabled">BgpLogEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogGroupArn">BgpLogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogOutputFormat">BgpLogOutputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled">LogEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn">LogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat">LogOutputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BgpLogEnabledInput`<sup>Optional</sup> <a name="BgpLogEnabledInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogEnabledInput"></a>

```go
func BgpLogEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `BgpLogGroupArnInput`<sup>Optional</sup> <a name="BgpLogGroupArnInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogGroupArnInput"></a>

```go
func BgpLogGroupArnInput() *string
```

- *Type:* *string

---

##### `BgpLogOutputFormatInput`<sup>Optional</sup> <a name="BgpLogOutputFormatInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogOutputFormatInput"></a>

```go
func BgpLogOutputFormatInput() *string
```

- *Type:* *string

---

##### `LogEnabledInput`<sup>Optional</sup> <a name="LogEnabledInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logEnabledInput"></a>

```go
func LogEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LogGroupArnInput`<sup>Optional</sup> <a name="LogGroupArnInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArnInput"></a>

```go
func LogGroupArnInput() *string
```

- *Type:* *string

---

##### `LogOutputFormatInput`<sup>Optional</sup> <a name="LogOutputFormatInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormatInput"></a>

```go
func LogOutputFormatInput() *string
```

- *Type:* *string

---

##### `BgpLogEnabled`<sup>Required</sup> <a name="BgpLogEnabled" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogEnabled"></a>

```go
func BgpLogEnabled() interface{}
```

- *Type:* interface{}

---

##### `BgpLogGroupArn`<sup>Required</sup> <a name="BgpLogGroupArn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogGroupArn"></a>

```go
func BgpLogGroupArn() *string
```

- *Type:* *string

---

##### `BgpLogOutputFormat`<sup>Required</sup> <a name="BgpLogOutputFormat" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogOutputFormat"></a>

```go
func BgpLogOutputFormat() *string
```

- *Type:* *string

---

##### `LogEnabled`<sup>Required</sup> <a name="LogEnabled" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled"></a>

```go
func LogEnabled() interface{}
```

- *Type:* interface{}

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn"></a>

```go
func LogGroupArn() *string
```

- *Type:* *string

---

##### `LogOutputFormat`<sup>Required</sup> <a name="LogOutputFormat" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat"></a>

```go
func LogOutputFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

ec2vpnconnection.NewEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.putCloudwatchLogOptions">PutCloudwatchLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.resetCloudwatchLogOptions">ResetCloudwatchLogOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogOptions` <a name="PutCloudwatchLogOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.putCloudwatchLogOptions"></a>

```go
func PutCloudwatchLogOptions(value Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.putCloudwatchLogOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions</a>

---

##### `ResetCloudwatchLogOptions` <a name="ResetCloudwatchLogOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.resetCloudwatchLogOptions"></a>

```go
func ResetCloudwatchLogOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.cloudwatchLogOptions">CloudwatchLogOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.cloudwatchLogOptionsInput">CloudwatchLogOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogOptions`<sup>Required</sup> <a name="CloudwatchLogOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.cloudwatchLogOptions"></a>

```go
func CloudwatchLogOptions() Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference</a>

---

##### `CloudwatchLogOptionsInput`<sup>Optional</sup> <a name="CloudwatchLogOptionsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.cloudwatchLogOptionsInput"></a>

```go
func CloudwatchLogOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

ec2vpnconnection.NewEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putIkeVersions">PutIkeVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putLogOptions">PutLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1DhGroupNumbers">PutPhase1DhGroupNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1EncryptionAlgorithms">PutPhase1EncryptionAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1IntegrityAlgorithms">PutPhase1IntegrityAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2DhGroupNumbers">PutPhase2DhGroupNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2EncryptionAlgorithms">PutPhase2EncryptionAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2IntegrityAlgorithms">PutPhase2IntegrityAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetDpdTimeoutAction">ResetDpdTimeoutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetDpdTimeoutSeconds">ResetDpdTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetEnableTunnelLifecycleControl">ResetEnableTunnelLifecycleControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetIkeVersions">ResetIkeVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetLogOptions">ResetLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1DhGroupNumbers">ResetPhase1DhGroupNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1EncryptionAlgorithms">ResetPhase1EncryptionAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1IntegrityAlgorithms">ResetPhase1IntegrityAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1LifetimeSeconds">ResetPhase1LifetimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2DhGroupNumbers">ResetPhase2DhGroupNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2EncryptionAlgorithms">ResetPhase2EncryptionAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2IntegrityAlgorithms">ResetPhase2IntegrityAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2LifetimeSeconds">ResetPhase2LifetimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPreSharedKey">ResetPreSharedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetRekeyFuzzPercentage">ResetRekeyFuzzPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetRekeyMarginTimeSeconds">ResetRekeyMarginTimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetReplayWindowSize">ResetReplayWindowSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetStartupAction">ResetStartupAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetTunnelInsideCidr">ResetTunnelInsideCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetTunnelInsideIpv6Cidr">ResetTunnelInsideIpv6Cidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIkeVersions` <a name="PutIkeVersions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putIkeVersions"></a>

```go
func PutIkeVersions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putIkeVersions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLogOptions` <a name="PutLogOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putLogOptions"></a>

```go
func PutLogOptions(value Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putLogOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions</a>

---

##### `PutPhase1DhGroupNumbers` <a name="PutPhase1DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1DhGroupNumbers"></a>

```go
func PutPhase1DhGroupNumbers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1DhGroupNumbers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPhase1EncryptionAlgorithms` <a name="PutPhase1EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1EncryptionAlgorithms"></a>

```go
func PutPhase1EncryptionAlgorithms(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1EncryptionAlgorithms.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPhase1IntegrityAlgorithms` <a name="PutPhase1IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1IntegrityAlgorithms"></a>

```go
func PutPhase1IntegrityAlgorithms(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1IntegrityAlgorithms.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPhase2DhGroupNumbers` <a name="PutPhase2DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2DhGroupNumbers"></a>

```go
func PutPhase2DhGroupNumbers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2DhGroupNumbers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPhase2EncryptionAlgorithms` <a name="PutPhase2EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2EncryptionAlgorithms"></a>

```go
func PutPhase2EncryptionAlgorithms(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2EncryptionAlgorithms.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPhase2IntegrityAlgorithms` <a name="PutPhase2IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2IntegrityAlgorithms"></a>

```go
func PutPhase2IntegrityAlgorithms(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2IntegrityAlgorithms.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDpdTimeoutAction` <a name="ResetDpdTimeoutAction" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetDpdTimeoutAction"></a>

```go
func ResetDpdTimeoutAction()
```

##### `ResetDpdTimeoutSeconds` <a name="ResetDpdTimeoutSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetDpdTimeoutSeconds"></a>

```go
func ResetDpdTimeoutSeconds()
```

##### `ResetEnableTunnelLifecycleControl` <a name="ResetEnableTunnelLifecycleControl" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetEnableTunnelLifecycleControl"></a>

```go
func ResetEnableTunnelLifecycleControl()
```

##### `ResetIkeVersions` <a name="ResetIkeVersions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetIkeVersions"></a>

```go
func ResetIkeVersions()
```

##### `ResetLogOptions` <a name="ResetLogOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetLogOptions"></a>

```go
func ResetLogOptions()
```

##### `ResetPhase1DhGroupNumbers` <a name="ResetPhase1DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1DhGroupNumbers"></a>

```go
func ResetPhase1DhGroupNumbers()
```

##### `ResetPhase1EncryptionAlgorithms` <a name="ResetPhase1EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1EncryptionAlgorithms"></a>

```go
func ResetPhase1EncryptionAlgorithms()
```

##### `ResetPhase1IntegrityAlgorithms` <a name="ResetPhase1IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1IntegrityAlgorithms"></a>

```go
func ResetPhase1IntegrityAlgorithms()
```

##### `ResetPhase1LifetimeSeconds` <a name="ResetPhase1LifetimeSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1LifetimeSeconds"></a>

```go
func ResetPhase1LifetimeSeconds()
```

##### `ResetPhase2DhGroupNumbers` <a name="ResetPhase2DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2DhGroupNumbers"></a>

```go
func ResetPhase2DhGroupNumbers()
```

##### `ResetPhase2EncryptionAlgorithms` <a name="ResetPhase2EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2EncryptionAlgorithms"></a>

```go
func ResetPhase2EncryptionAlgorithms()
```

##### `ResetPhase2IntegrityAlgorithms` <a name="ResetPhase2IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2IntegrityAlgorithms"></a>

```go
func ResetPhase2IntegrityAlgorithms()
```

##### `ResetPhase2LifetimeSeconds` <a name="ResetPhase2LifetimeSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2LifetimeSeconds"></a>

```go
func ResetPhase2LifetimeSeconds()
```

##### `ResetPreSharedKey` <a name="ResetPreSharedKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPreSharedKey"></a>

```go
func ResetPreSharedKey()
```

##### `ResetRekeyFuzzPercentage` <a name="ResetRekeyFuzzPercentage" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetRekeyFuzzPercentage"></a>

```go
func ResetRekeyFuzzPercentage()
```

##### `ResetRekeyMarginTimeSeconds` <a name="ResetRekeyMarginTimeSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetRekeyMarginTimeSeconds"></a>

```go
func ResetRekeyMarginTimeSeconds()
```

##### `ResetReplayWindowSize` <a name="ResetReplayWindowSize" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetReplayWindowSize"></a>

```go
func ResetReplayWindowSize()
```

##### `ResetStartupAction` <a name="ResetStartupAction" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetStartupAction"></a>

```go
func ResetStartupAction()
```

##### `ResetTunnelInsideCidr` <a name="ResetTunnelInsideCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetTunnelInsideCidr"></a>

```go
func ResetTunnelInsideCidr()
```

##### `ResetTunnelInsideIpv6Cidr` <a name="ResetTunnelInsideIpv6Cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetTunnelInsideIpv6Cidr"></a>

```go
func ResetTunnelInsideIpv6Cidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.ikeVersions">IkeVersions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.logOptions">LogOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1DhGroupNumbers">Phase1DhGroupNumbers</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1EncryptionAlgorithms">Phase1EncryptionAlgorithms</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1IntegrityAlgorithms">Phase1IntegrityAlgorithms</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2DhGroupNumbers">Phase2DhGroupNumbers</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2EncryptionAlgorithms">Phase2EncryptionAlgorithms</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2IntegrityAlgorithms">Phase2IntegrityAlgorithms</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutActionInput">DpdTimeoutActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutSecondsInput">DpdTimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.enableTunnelLifecycleControlInput">EnableTunnelLifecycleControlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.ikeVersionsInput">IkeVersionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.logOptionsInput">LogOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1DhGroupNumbersInput">Phase1DhGroupNumbersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1EncryptionAlgorithmsInput">Phase1EncryptionAlgorithmsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1IntegrityAlgorithmsInput">Phase1IntegrityAlgorithmsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1LifetimeSecondsInput">Phase1LifetimeSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2DhGroupNumbersInput">Phase2DhGroupNumbersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2EncryptionAlgorithmsInput">Phase2EncryptionAlgorithmsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2IntegrityAlgorithmsInput">Phase2IntegrityAlgorithmsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2LifetimeSecondsInput">Phase2LifetimeSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.preSharedKeyInput">PreSharedKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyFuzzPercentageInput">RekeyFuzzPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyMarginTimeSecondsInput">RekeyMarginTimeSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.replayWindowSizeInput">ReplayWindowSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.startupActionInput">StartupActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideCidrInput">TunnelInsideCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideIpv6CidrInput">TunnelInsideIpv6CidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutAction">DpdTimeoutAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutSeconds">DpdTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.enableTunnelLifecycleControl">EnableTunnelLifecycleControl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1LifetimeSeconds">Phase1LifetimeSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2LifetimeSeconds">Phase2LifetimeSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.preSharedKey">PreSharedKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyFuzzPercentage">RekeyFuzzPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyMarginTimeSeconds">RekeyMarginTimeSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.replayWindowSize">ReplayWindowSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.startupAction">StartupAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideCidr">TunnelInsideCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideIpv6Cidr">TunnelInsideIpv6Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IkeVersions`<sup>Required</sup> <a name="IkeVersions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.ikeVersions"></a>

```go
func IkeVersions() Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList</a>

---

##### `LogOptions`<sup>Required</sup> <a name="LogOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.logOptions"></a>

```go
func LogOptions() Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference</a>

---

##### `Phase1DhGroupNumbers`<sup>Required</sup> <a name="Phase1DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1DhGroupNumbers"></a>

```go
func Phase1DhGroupNumbers() Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList</a>

---

##### `Phase1EncryptionAlgorithms`<sup>Required</sup> <a name="Phase1EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1EncryptionAlgorithms"></a>

```go
func Phase1EncryptionAlgorithms() Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList</a>

---

##### `Phase1IntegrityAlgorithms`<sup>Required</sup> <a name="Phase1IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1IntegrityAlgorithms"></a>

```go
func Phase1IntegrityAlgorithms() Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList</a>

---

##### `Phase2DhGroupNumbers`<sup>Required</sup> <a name="Phase2DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2DhGroupNumbers"></a>

```go
func Phase2DhGroupNumbers() Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList</a>

---

##### `Phase2EncryptionAlgorithms`<sup>Required</sup> <a name="Phase2EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2EncryptionAlgorithms"></a>

```go
func Phase2EncryptionAlgorithms() Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList</a>

---

##### `Phase2IntegrityAlgorithms`<sup>Required</sup> <a name="Phase2IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2IntegrityAlgorithms"></a>

```go
func Phase2IntegrityAlgorithms() Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList</a>

---

##### `DpdTimeoutActionInput`<sup>Optional</sup> <a name="DpdTimeoutActionInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutActionInput"></a>

```go
func DpdTimeoutActionInput() *string
```

- *Type:* *string

---

##### `DpdTimeoutSecondsInput`<sup>Optional</sup> <a name="DpdTimeoutSecondsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutSecondsInput"></a>

```go
func DpdTimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `EnableTunnelLifecycleControlInput`<sup>Optional</sup> <a name="EnableTunnelLifecycleControlInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.enableTunnelLifecycleControlInput"></a>

```go
func EnableTunnelLifecycleControlInput() interface{}
```

- *Type:* interface{}

---

##### `IkeVersionsInput`<sup>Optional</sup> <a name="IkeVersionsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.ikeVersionsInput"></a>

```go
func IkeVersionsInput() interface{}
```

- *Type:* interface{}

---

##### `LogOptionsInput`<sup>Optional</sup> <a name="LogOptionsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.logOptionsInput"></a>

```go
func LogOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `Phase1DhGroupNumbersInput`<sup>Optional</sup> <a name="Phase1DhGroupNumbersInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1DhGroupNumbersInput"></a>

```go
func Phase1DhGroupNumbersInput() interface{}
```

- *Type:* interface{}

---

##### `Phase1EncryptionAlgorithmsInput`<sup>Optional</sup> <a name="Phase1EncryptionAlgorithmsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1EncryptionAlgorithmsInput"></a>

```go
func Phase1EncryptionAlgorithmsInput() interface{}
```

- *Type:* interface{}

---

##### `Phase1IntegrityAlgorithmsInput`<sup>Optional</sup> <a name="Phase1IntegrityAlgorithmsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1IntegrityAlgorithmsInput"></a>

```go
func Phase1IntegrityAlgorithmsInput() interface{}
```

- *Type:* interface{}

---

##### `Phase1LifetimeSecondsInput`<sup>Optional</sup> <a name="Phase1LifetimeSecondsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1LifetimeSecondsInput"></a>

```go
func Phase1LifetimeSecondsInput() *f64
```

- *Type:* *f64

---

##### `Phase2DhGroupNumbersInput`<sup>Optional</sup> <a name="Phase2DhGroupNumbersInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2DhGroupNumbersInput"></a>

```go
func Phase2DhGroupNumbersInput() interface{}
```

- *Type:* interface{}

---

##### `Phase2EncryptionAlgorithmsInput`<sup>Optional</sup> <a name="Phase2EncryptionAlgorithmsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2EncryptionAlgorithmsInput"></a>

```go
func Phase2EncryptionAlgorithmsInput() interface{}
```

- *Type:* interface{}

---

##### `Phase2IntegrityAlgorithmsInput`<sup>Optional</sup> <a name="Phase2IntegrityAlgorithmsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2IntegrityAlgorithmsInput"></a>

```go
func Phase2IntegrityAlgorithmsInput() interface{}
```

- *Type:* interface{}

---

##### `Phase2LifetimeSecondsInput`<sup>Optional</sup> <a name="Phase2LifetimeSecondsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2LifetimeSecondsInput"></a>

```go
func Phase2LifetimeSecondsInput() *f64
```

- *Type:* *f64

---

##### `PreSharedKeyInput`<sup>Optional</sup> <a name="PreSharedKeyInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.preSharedKeyInput"></a>

```go
func PreSharedKeyInput() *string
```

- *Type:* *string

---

##### `RekeyFuzzPercentageInput`<sup>Optional</sup> <a name="RekeyFuzzPercentageInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyFuzzPercentageInput"></a>

```go
func RekeyFuzzPercentageInput() *f64
```

- *Type:* *f64

---

##### `RekeyMarginTimeSecondsInput`<sup>Optional</sup> <a name="RekeyMarginTimeSecondsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyMarginTimeSecondsInput"></a>

```go
func RekeyMarginTimeSecondsInput() *f64
```

- *Type:* *f64

---

##### `ReplayWindowSizeInput`<sup>Optional</sup> <a name="ReplayWindowSizeInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.replayWindowSizeInput"></a>

```go
func ReplayWindowSizeInput() *f64
```

- *Type:* *f64

---

##### `StartupActionInput`<sup>Optional</sup> <a name="StartupActionInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.startupActionInput"></a>

```go
func StartupActionInput() *string
```

- *Type:* *string

---

##### `TunnelInsideCidrInput`<sup>Optional</sup> <a name="TunnelInsideCidrInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideCidrInput"></a>

```go
func TunnelInsideCidrInput() *string
```

- *Type:* *string

---

##### `TunnelInsideIpv6CidrInput`<sup>Optional</sup> <a name="TunnelInsideIpv6CidrInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideIpv6CidrInput"></a>

```go
func TunnelInsideIpv6CidrInput() *string
```

- *Type:* *string

---

##### `DpdTimeoutAction`<sup>Required</sup> <a name="DpdTimeoutAction" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutAction"></a>

```go
func DpdTimeoutAction() *string
```

- *Type:* *string

---

##### `DpdTimeoutSeconds`<sup>Required</sup> <a name="DpdTimeoutSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutSeconds"></a>

```go
func DpdTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `EnableTunnelLifecycleControl`<sup>Required</sup> <a name="EnableTunnelLifecycleControl" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.enableTunnelLifecycleControl"></a>

```go
func EnableTunnelLifecycleControl() interface{}
```

- *Type:* interface{}

---

##### `Phase1LifetimeSeconds`<sup>Required</sup> <a name="Phase1LifetimeSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1LifetimeSeconds"></a>

```go
func Phase1LifetimeSeconds() *f64
```

- *Type:* *f64

---

##### `Phase2LifetimeSeconds`<sup>Required</sup> <a name="Phase2LifetimeSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2LifetimeSeconds"></a>

```go
func Phase2LifetimeSeconds() *f64
```

- *Type:* *f64

---

##### `PreSharedKey`<sup>Required</sup> <a name="PreSharedKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.preSharedKey"></a>

```go
func PreSharedKey() *string
```

- *Type:* *string

---

##### `RekeyFuzzPercentage`<sup>Required</sup> <a name="RekeyFuzzPercentage" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyFuzzPercentage"></a>

```go
func RekeyFuzzPercentage() *f64
```

- *Type:* *f64

---

##### `RekeyMarginTimeSeconds`<sup>Required</sup> <a name="RekeyMarginTimeSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyMarginTimeSeconds"></a>

```go
func RekeyMarginTimeSeconds() *f64
```

- *Type:* *f64

---

##### `ReplayWindowSize`<sup>Required</sup> <a name="ReplayWindowSize" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.replayWindowSize"></a>

```go
func ReplayWindowSize() *f64
```

- *Type:* *f64

---

##### `StartupAction`<sup>Required</sup> <a name="StartupAction" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.startupAction"></a>

```go
func StartupAction() *string
```

- *Type:* *string

---

##### `TunnelInsideCidr`<sup>Required</sup> <a name="TunnelInsideCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideCidr"></a>

```go
func TunnelInsideCidr() *string
```

- *Type:* *string

---

##### `TunnelInsideIpv6Cidr`<sup>Required</sup> <a name="TunnelInsideIpv6Cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideIpv6Cidr"></a>

```go
func TunnelInsideIpv6Cidr() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

ec2vpnconnection.NewEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.get"></a>

```go
func Get(index *f64) Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

ec2vpnconnection.NewEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

ec2vpnconnection.NewEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.get"></a>

```go
func Get(index *f64) Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

ec2vpnconnection.NewEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

ec2vpnconnection.NewEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.get"></a>

```go
func Get(index *f64) Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

ec2vpnconnection.NewEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

ec2vpnconnection.NewEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.get"></a>

```go
func Get(index *f64) Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

ec2vpnconnection.NewEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

ec2vpnconnection.NewEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.get"></a>

```go
func Get(index *f64) Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

ec2vpnconnection.NewEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

ec2vpnconnection.NewEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.get"></a>

```go
func Get(index *f64) Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpnconnection"

ec2vpnconnection.NewEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



