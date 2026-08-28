# `ec2Subnet` Submodule <a name="`ec2Subnet` Submodule" id="@cdktn/provider-awscc.ec2Subnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2Subnet <a name="Ec2Subnet" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_subnet awscc_ec2_subnet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2subnet"

ec2subnet.NewEc2Subnet(scope Construct, id *string, config Ec2SubnetConfig) Ec2Subnet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig">Ec2SubnetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig">Ec2SubnetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.putPrivateDnsNameOptionsOnLaunch">PutPrivateDnsNameOptionsOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetAssignIpv6AddressOnCreation">ResetAssignIpv6AddressOnCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetAvailabilityZoneId">ResetAvailabilityZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetCidrBlock">ResetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetEnableDns64">ResetEnableDns64</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetEnableLniAtDeviceIndex">ResetEnableLniAtDeviceIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetIpv4IpamPoolId">ResetIpv4IpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetIpv4NetmaskLength">ResetIpv4NetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetIpv6CidrBlock">ResetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetIpv6IpamPoolId">ResetIpv6IpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetIpv6Native">ResetIpv6Native</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetIpv6NetmaskLength">ResetIpv6NetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetMapPublicIpOnLaunch">ResetMapPublicIpOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetOutpostArn">ResetOutpostArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetPrivateDnsNameOptionsOnLaunch">ResetPrivateDnsNameOptionsOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPrivateDnsNameOptionsOnLaunch` <a name="PutPrivateDnsNameOptionsOnLaunch" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.putPrivateDnsNameOptionsOnLaunch"></a>

```go
func PutPrivateDnsNameOptionsOnLaunch(value Ec2SubnetPrivateDnsNameOptionsOnLaunch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.putPrivateDnsNameOptionsOnLaunch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunch">Ec2SubnetPrivateDnsNameOptionsOnLaunch</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAssignIpv6AddressOnCreation` <a name="ResetAssignIpv6AddressOnCreation" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetAssignIpv6AddressOnCreation"></a>

```go
func ResetAssignIpv6AddressOnCreation()
```

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetAvailabilityZoneId` <a name="ResetAvailabilityZoneId" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetAvailabilityZoneId"></a>

```go
func ResetAvailabilityZoneId()
```

##### `ResetCidrBlock` <a name="ResetCidrBlock" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetCidrBlock"></a>

```go
func ResetCidrBlock()
```

##### `ResetEnableDns64` <a name="ResetEnableDns64" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetEnableDns64"></a>

```go
func ResetEnableDns64()
```

##### `ResetEnableLniAtDeviceIndex` <a name="ResetEnableLniAtDeviceIndex" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetEnableLniAtDeviceIndex"></a>

```go
func ResetEnableLniAtDeviceIndex()
```

##### `ResetIpv4IpamPoolId` <a name="ResetIpv4IpamPoolId" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetIpv4IpamPoolId"></a>

```go
func ResetIpv4IpamPoolId()
```

##### `ResetIpv4NetmaskLength` <a name="ResetIpv4NetmaskLength" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetIpv4NetmaskLength"></a>

```go
func ResetIpv4NetmaskLength()
```

##### `ResetIpv6CidrBlock` <a name="ResetIpv6CidrBlock" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetIpv6CidrBlock"></a>

```go
func ResetIpv6CidrBlock()
```

##### `ResetIpv6IpamPoolId` <a name="ResetIpv6IpamPoolId" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetIpv6IpamPoolId"></a>

```go
func ResetIpv6IpamPoolId()
```

##### `ResetIpv6Native` <a name="ResetIpv6Native" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetIpv6Native"></a>

```go
func ResetIpv6Native()
```

##### `ResetIpv6NetmaskLength` <a name="ResetIpv6NetmaskLength" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetIpv6NetmaskLength"></a>

```go
func ResetIpv6NetmaskLength()
```

##### `ResetMapPublicIpOnLaunch` <a name="ResetMapPublicIpOnLaunch" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetMapPublicIpOnLaunch"></a>

```go
func ResetMapPublicIpOnLaunch()
```

##### `ResetOutpostArn` <a name="ResetOutpostArn" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetOutpostArn"></a>

```go
func ResetOutpostArn()
```

##### `ResetPrivateDnsNameOptionsOnLaunch` <a name="ResetPrivateDnsNameOptionsOnLaunch" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetPrivateDnsNameOptionsOnLaunch"></a>

```go
func ResetPrivateDnsNameOptionsOnLaunch()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2Subnet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2subnet"

ec2subnet.Ec2Subnet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2subnet"

ec2subnet.Ec2Subnet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2subnet"

ec2subnet.Ec2Subnet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2subnet"

ec2subnet.Ec2Subnet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2Subnet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2Subnet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2Subnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_subnet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2Subnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.blockPublicAccessStates">BlockPublicAccessStates</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference">Ec2SubnetBlockPublicAccessStatesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6CidrBlocks">Ipv6CidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.networkAclAssociationId">NetworkAclAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.privateDnsNameOptionsOnLaunch">PrivateDnsNameOptionsOnLaunch</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference">Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList">Ec2SubnetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.assignIpv6AddressOnCreationInput">AssignIpv6AddressOnCreationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.availabilityZoneIdInput">AvailabilityZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.cidrBlockInput">CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.enableDns64Input">EnableDns64Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.enableLniAtDeviceIndexInput">EnableLniAtDeviceIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv4IpamPoolIdInput">Ipv4IpamPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv4NetmaskLengthInput">Ipv4NetmaskLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6CidrBlockInput">Ipv6CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6IpamPoolIdInput">Ipv6IpamPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6NativeInput">Ipv6NativeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6NetmaskLengthInput">Ipv6NetmaskLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.mapPublicIpOnLaunchInput">MapPublicIpOnLaunchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.outpostArnInput">OutpostArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.privateDnsNameOptionsOnLaunchInput">PrivateDnsNameOptionsOnLaunchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.assignIpv6AddressOnCreation">AssignIpv6AddressOnCreation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.enableDns64">EnableDns64</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.enableLniAtDeviceIndex">EnableLniAtDeviceIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv4IpamPoolId">Ipv4IpamPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv4NetmaskLength">Ipv4NetmaskLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6IpamPoolId">Ipv6IpamPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6Native">Ipv6Native</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6NetmaskLength">Ipv6NetmaskLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.mapPublicIpOnLaunch">MapPublicIpOnLaunch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.outpostArn">OutpostArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BlockPublicAccessStates`<sup>Required</sup> <a name="BlockPublicAccessStates" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.blockPublicAccessStates"></a>

```go
func BlockPublicAccessStates() Ec2SubnetBlockPublicAccessStatesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference">Ec2SubnetBlockPublicAccessStatesOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ipv6CidrBlocks`<sup>Required</sup> <a name="Ipv6CidrBlocks" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6CidrBlocks"></a>

```go
func Ipv6CidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkAclAssociationId`<sup>Required</sup> <a name="NetworkAclAssociationId" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.networkAclAssociationId"></a>

```go
func NetworkAclAssociationId() *string
```

- *Type:* *string

---

##### `PrivateDnsNameOptionsOnLaunch`<sup>Required</sup> <a name="PrivateDnsNameOptionsOnLaunch" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.privateDnsNameOptionsOnLaunch"></a>

```go
func PrivateDnsNameOptionsOnLaunch() Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference">Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference</a>

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.tags"></a>

```go
func Tags() Ec2SubnetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList">Ec2SubnetTagsList</a>

---

##### `AssignIpv6AddressOnCreationInput`<sup>Optional</sup> <a name="AssignIpv6AddressOnCreationInput" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.assignIpv6AddressOnCreationInput"></a>

```go
func AssignIpv6AddressOnCreationInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZoneIdInput`<sup>Optional</sup> <a name="AvailabilityZoneIdInput" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.availabilityZoneIdInput"></a>

```go
func AvailabilityZoneIdInput() *string
```

- *Type:* *string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `CidrBlockInput`<sup>Optional</sup> <a name="CidrBlockInput" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.cidrBlockInput"></a>

```go
func CidrBlockInput() *string
```

- *Type:* *string

---

##### `EnableDns64Input`<sup>Optional</sup> <a name="EnableDns64Input" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.enableDns64Input"></a>

```go
func EnableDns64Input() interface{}
```

- *Type:* interface{}

---

##### `EnableLniAtDeviceIndexInput`<sup>Optional</sup> <a name="EnableLniAtDeviceIndexInput" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.enableLniAtDeviceIndexInput"></a>

```go
func EnableLniAtDeviceIndexInput() *f64
```

- *Type:* *f64

---

##### `Ipv4IpamPoolIdInput`<sup>Optional</sup> <a name="Ipv4IpamPoolIdInput" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv4IpamPoolIdInput"></a>

```go
func Ipv4IpamPoolIdInput() *string
```

- *Type:* *string

---

##### `Ipv4NetmaskLengthInput`<sup>Optional</sup> <a name="Ipv4NetmaskLengthInput" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv4NetmaskLengthInput"></a>

```go
func Ipv4NetmaskLengthInput() *f64
```

- *Type:* *f64

---

##### `Ipv6CidrBlockInput`<sup>Optional</sup> <a name="Ipv6CidrBlockInput" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6CidrBlockInput"></a>

```go
func Ipv6CidrBlockInput() *string
```

- *Type:* *string

---

##### `Ipv6IpamPoolIdInput`<sup>Optional</sup> <a name="Ipv6IpamPoolIdInput" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6IpamPoolIdInput"></a>

```go
func Ipv6IpamPoolIdInput() *string
```

- *Type:* *string

---

##### `Ipv6NativeInput`<sup>Optional</sup> <a name="Ipv6NativeInput" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6NativeInput"></a>

```go
func Ipv6NativeInput() interface{}
```

- *Type:* interface{}

---

##### `Ipv6NetmaskLengthInput`<sup>Optional</sup> <a name="Ipv6NetmaskLengthInput" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6NetmaskLengthInput"></a>

```go
func Ipv6NetmaskLengthInput() *f64
```

- *Type:* *f64

---

##### `MapPublicIpOnLaunchInput`<sup>Optional</sup> <a name="MapPublicIpOnLaunchInput" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.mapPublicIpOnLaunchInput"></a>

```go
func MapPublicIpOnLaunchInput() interface{}
```

- *Type:* interface{}

---

##### `OutpostArnInput`<sup>Optional</sup> <a name="OutpostArnInput" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.outpostArnInput"></a>

```go
func OutpostArnInput() *string
```

- *Type:* *string

---

##### `PrivateDnsNameOptionsOnLaunchInput`<sup>Optional</sup> <a name="PrivateDnsNameOptionsOnLaunchInput" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.privateDnsNameOptionsOnLaunchInput"></a>

```go
func PrivateDnsNameOptionsOnLaunchInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `AssignIpv6AddressOnCreation`<sup>Required</sup> <a name="AssignIpv6AddressOnCreation" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.assignIpv6AddressOnCreation"></a>

```go
func AssignIpv6AddressOnCreation() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.availabilityZoneId"></a>

```go
func AvailabilityZoneId() *string
```

- *Type:* *string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.cidrBlock"></a>

```go
func CidrBlock() *string
```

- *Type:* *string

---

##### `EnableDns64`<sup>Required</sup> <a name="EnableDns64" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.enableDns64"></a>

```go
func EnableDns64() interface{}
```

- *Type:* interface{}

---

##### `EnableLniAtDeviceIndex`<sup>Required</sup> <a name="EnableLniAtDeviceIndex" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.enableLniAtDeviceIndex"></a>

```go
func EnableLniAtDeviceIndex() *f64
```

- *Type:* *f64

---

##### `Ipv4IpamPoolId`<sup>Required</sup> <a name="Ipv4IpamPoolId" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv4IpamPoolId"></a>

```go
func Ipv4IpamPoolId() *string
```

- *Type:* *string

---

##### `Ipv4NetmaskLength`<sup>Required</sup> <a name="Ipv4NetmaskLength" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv4NetmaskLength"></a>

```go
func Ipv4NetmaskLength() *f64
```

- *Type:* *f64

---

##### `Ipv6CidrBlock`<sup>Required</sup> <a name="Ipv6CidrBlock" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6CidrBlock"></a>

```go
func Ipv6CidrBlock() *string
```

- *Type:* *string

---

##### `Ipv6IpamPoolId`<sup>Required</sup> <a name="Ipv6IpamPoolId" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6IpamPoolId"></a>

```go
func Ipv6IpamPoolId() *string
```

- *Type:* *string

---

##### `Ipv6Native`<sup>Required</sup> <a name="Ipv6Native" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6Native"></a>

```go
func Ipv6Native() interface{}
```

- *Type:* interface{}

---

##### `Ipv6NetmaskLength`<sup>Required</sup> <a name="Ipv6NetmaskLength" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6NetmaskLength"></a>

```go
func Ipv6NetmaskLength() *f64
```

- *Type:* *f64

---

##### `MapPublicIpOnLaunch`<sup>Required</sup> <a name="MapPublicIpOnLaunch" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.mapPublicIpOnLaunch"></a>

```go
func MapPublicIpOnLaunch() interface{}
```

- *Type:* interface{}

---

##### `OutpostArn`<sup>Required</sup> <a name="OutpostArn" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.outpostArn"></a>

```go
func OutpostArn() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2SubnetBlockPublicAccessStates <a name="Ec2SubnetBlockPublicAccessStates" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStates.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2subnet"

&ec2subnet.Ec2SubnetBlockPublicAccessStates {

}
```


### Ec2SubnetConfig <a name="Ec2SubnetConfig" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2subnet"

&ec2subnet.Ec2SubnetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	VpcId: *string,
	AssignIpv6AddressOnCreation: interface{},
	AvailabilityZone: *string,
	AvailabilityZoneId: *string,
	CidrBlock: *string,
	EnableDns64: interface{},
	EnableLniAtDeviceIndex: *f64,
	Ipv4IpamPoolId: *string,
	Ipv4NetmaskLength: *f64,
	Ipv6CidrBlock: *string,
	Ipv6IpamPoolId: *string,
	Ipv6Native: interface{},
	Ipv6NetmaskLength: *f64,
	MapPublicIpOnLaunch: interface{},
	OutpostArn: *string,
	PrivateDnsNameOptionsOnLaunch: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunch,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.vpcId">VpcId</a></code> | <code>*string</code> | The ID of the VPC the subnet is in. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.assignIpv6AddressOnCreation">AssignIpv6AddressOnCreation</a></code> | <code>interface{}</code> | Indicates whether a network interface created in this subnet receives an IPv6 address. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | The Availability Zone of the subnet.  If you update this property, you must also update the ``CidrBlock`` property. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>*string</code> | The AZ ID of the subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | The IPv4 CIDR block assigned to the subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.enableDns64">EnableDns64</a></code> | <code>interface{}</code> | Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.enableLniAtDeviceIndex">EnableLniAtDeviceIndex</a></code> | <code>*f64</code> | Indicates the device position for local network interfaces in this subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.ipv4IpamPoolId">Ipv4IpamPoolId</a></code> | <code>*string</code> | An IPv4 IPAM pool ID for the subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.ipv4NetmaskLength">Ipv4NetmaskLength</a></code> | <code>*f64</code> | An IPv4 netmask length for the subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>*string</code> | The IPv6 CIDR block.  If you specify ``AssignIpv6AddressOnCreation``, you must also specify an IPv6 CIDR block. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.ipv6IpamPoolId">Ipv6IpamPoolId</a></code> | <code>*string</code> | An IPv6 IPAM pool ID for the subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.ipv6Native">Ipv6Native</a></code> | <code>interface{}</code> | Indicates whether this is an IPv6 only subnet. For more information, see [Subnet basics](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html#subnet-basics) in the *User Guide*. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.ipv6NetmaskLength">Ipv6NetmaskLength</a></code> | <code>*f64</code> | An IPv6 netmask length for the subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.mapPublicIpOnLaunch">MapPublicIpOnLaunch</a></code> | <code>interface{}</code> | Indicates whether instances launched in this subnet receive a public IPv4 address. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.outpostArn">OutpostArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the Outpost. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.privateDnsNameOptionsOnLaunch">PrivateDnsNameOptionsOnLaunch</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunch">Ec2SubnetPrivateDnsNameOptionsOnLaunch</a></code> | The hostname type for EC2 instances launched into this subnet and how DNS A and AAAA record queries to the instances should be handled. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Any tags assigned to the subnet. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

The ID of the VPC the subnet is in.

If you update this property, you must also update the `CidrBlock` property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_subnet#vpc_id Ec2Subnet#vpc_id}

---

##### `AssignIpv6AddressOnCreation`<sup>Optional</sup> <a name="AssignIpv6AddressOnCreation" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.assignIpv6AddressOnCreation"></a>

```go
AssignIpv6AddressOnCreation interface{}
```

- *Type:* interface{}

Indicates whether a network interface created in this subnet receives an IPv6 address.

The default value is `false`.
If you specify `AssignIpv6AddressOnCreation`, you must also specify an IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_subnet#assign_ipv_6_address_on_creation Ec2Subnet#assign_ipv_6_address_on_creation}

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

The Availability Zone of the subnet.  If you update this property, you must also update the ``CidrBlock`` property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_subnet#availability_zone Ec2Subnet#availability_zone}

---

##### `AvailabilityZoneId`<sup>Optional</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.availabilityZoneId"></a>

```go
AvailabilityZoneId *string
```

- *Type:* *string

The AZ ID of the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_subnet#availability_zone_id Ec2Subnet#availability_zone_id}

---

##### `CidrBlock`<sup>Optional</sup> <a name="CidrBlock" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.cidrBlock"></a>

```go
CidrBlock *string
```

- *Type:* *string

The IPv4 CIDR block assigned to the subnet.

If you update this property, we create a new subnet, and then delete the existing one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_subnet#cidr_block Ec2Subnet#cidr_block}

---

##### `EnableDns64`<sup>Optional</sup> <a name="EnableDns64" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.enableDns64"></a>

```go
EnableDns64 interface{}
```

- *Type:* interface{}

Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.

You must first configure a NAT gateway in a public subnet (separate from the subnet containing the IPv6-only workloads). For example, the subnet containing the NAT gateway should have a `0.0.0.0/0` route pointing to the internet gateway. For more information, see [Configure DNS64 and NAT64](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-nat64-dns64.html#nat-gateway-nat64-dns64-walkthrough) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_subnet#enable_dns_64 Ec2Subnet#enable_dns_64}

---

##### `EnableLniAtDeviceIndex`<sup>Optional</sup> <a name="EnableLniAtDeviceIndex" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.enableLniAtDeviceIndex"></a>

```go
EnableLniAtDeviceIndex *f64
```

- *Type:* *f64

Indicates the device position for local network interfaces in this subnet.

For example, `1` indicates local network interfaces in this subnet are the secondary network interface (eth1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_subnet#enable_lni_at_device_index Ec2Subnet#enable_lni_at_device_index}

---

##### `Ipv4IpamPoolId`<sup>Optional</sup> <a name="Ipv4IpamPoolId" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.ipv4IpamPoolId"></a>

```go
Ipv4IpamPoolId *string
```

- *Type:* *string

An IPv4 IPAM pool ID for the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_subnet#ipv_4_ipam_pool_id Ec2Subnet#ipv_4_ipam_pool_id}

---

##### `Ipv4NetmaskLength`<sup>Optional</sup> <a name="Ipv4NetmaskLength" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.ipv4NetmaskLength"></a>

```go
Ipv4NetmaskLength *f64
```

- *Type:* *f64

An IPv4 netmask length for the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_subnet#ipv_4_netmask_length Ec2Subnet#ipv_4_netmask_length}

---

##### `Ipv6CidrBlock`<sup>Optional</sup> <a name="Ipv6CidrBlock" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.ipv6CidrBlock"></a>

```go
Ipv6CidrBlock *string
```

- *Type:* *string

The IPv6 CIDR block.  If you specify ``AssignIpv6AddressOnCreation``, you must also specify an IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_subnet#ipv_6_cidr_block Ec2Subnet#ipv_6_cidr_block}

---

##### `Ipv6IpamPoolId`<sup>Optional</sup> <a name="Ipv6IpamPoolId" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.ipv6IpamPoolId"></a>

```go
Ipv6IpamPoolId *string
```

- *Type:* *string

An IPv6 IPAM pool ID for the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_subnet#ipv_6_ipam_pool_id Ec2Subnet#ipv_6_ipam_pool_id}

---

##### `Ipv6Native`<sup>Optional</sup> <a name="Ipv6Native" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.ipv6Native"></a>

```go
Ipv6Native interface{}
```

- *Type:* interface{}

Indicates whether this is an IPv6 only subnet. For more information, see [Subnet basics](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html#subnet-basics) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_subnet#ipv_6_native Ec2Subnet#ipv_6_native}

---

##### `Ipv6NetmaskLength`<sup>Optional</sup> <a name="Ipv6NetmaskLength" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.ipv6NetmaskLength"></a>

```go
Ipv6NetmaskLength *f64
```

- *Type:* *f64

An IPv6 netmask length for the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_subnet#ipv_6_netmask_length Ec2Subnet#ipv_6_netmask_length}

---

##### `MapPublicIpOnLaunch`<sup>Optional</sup> <a name="MapPublicIpOnLaunch" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.mapPublicIpOnLaunch"></a>

```go
MapPublicIpOnLaunch interface{}
```

- *Type:* interface{}

Indicates whether instances launched in this subnet receive a public IPv4 address.

The default value is `false`.
AWS charges for all public IPv4 addresses, including public IPv4 addresses associated with running instances and Elastic IP addresses. For more information, see the *Public IPv4 Address* tab on the [VPC pricing page](https://docs.aws.amazon.com/vpc/pricing/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_subnet#map_public_ip_on_launch Ec2Subnet#map_public_ip_on_launch}

---

##### `OutpostArn`<sup>Optional</sup> <a name="OutpostArn" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.outpostArn"></a>

```go
OutpostArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the Outpost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_subnet#outpost_arn Ec2Subnet#outpost_arn}

---

##### `PrivateDnsNameOptionsOnLaunch`<sup>Optional</sup> <a name="PrivateDnsNameOptionsOnLaunch" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.privateDnsNameOptionsOnLaunch"></a>

```go
PrivateDnsNameOptionsOnLaunch Ec2SubnetPrivateDnsNameOptionsOnLaunch
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunch">Ec2SubnetPrivateDnsNameOptionsOnLaunch</a>

The hostname type for EC2 instances launched into this subnet and how DNS A and AAAA record queries to the instances should be handled.

For more information, see [Amazon EC2 instance hostname types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the *User Guide*.
Available options:

* EnableResourceNameDnsAAAARecord (true | false)
* EnableResourceNameDnsARecord (true | false)
* HostnameType (ip-name | resource-name)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_subnet#private_dns_name_options_on_launch Ec2Subnet#private_dns_name_options_on_launch}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Any tags assigned to the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_subnet#tags Ec2Subnet#tags}

---

### Ec2SubnetPrivateDnsNameOptionsOnLaunch <a name="Ec2SubnetPrivateDnsNameOptionsOnLaunch" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunch.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2subnet"

&ec2subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunch {
	EnableResourceNameDnsAaaaRecord: interface{},
	EnableResourceNameDnsARecord: interface{},
	HostnameType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunch.property.enableResourceNameDnsAaaaRecord">EnableResourceNameDnsAaaaRecord</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_subnet#enable_resource_name_dns_aaaa_record Ec2Subnet#enable_resource_name_dns_aaaa_record}. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunch.property.enableResourceNameDnsARecord">EnableResourceNameDnsARecord</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_subnet#enable_resource_name_dns_a_record Ec2Subnet#enable_resource_name_dns_a_record}. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunch.property.hostnameType">HostnameType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_subnet#hostname_type Ec2Subnet#hostname_type}. |

---

##### `EnableResourceNameDnsAaaaRecord`<sup>Optional</sup> <a name="EnableResourceNameDnsAaaaRecord" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunch.property.enableResourceNameDnsAaaaRecord"></a>

```go
EnableResourceNameDnsAaaaRecord interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_subnet#enable_resource_name_dns_aaaa_record Ec2Subnet#enable_resource_name_dns_aaaa_record}.

---

##### `EnableResourceNameDnsARecord`<sup>Optional</sup> <a name="EnableResourceNameDnsARecord" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunch.property.enableResourceNameDnsARecord"></a>

```go
EnableResourceNameDnsARecord interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_subnet#enable_resource_name_dns_a_record Ec2Subnet#enable_resource_name_dns_a_record}.

---

##### `HostnameType`<sup>Optional</sup> <a name="HostnameType" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunch.property.hostnameType"></a>

```go
HostnameType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_subnet#hostname_type Ec2Subnet#hostname_type}.

---

### Ec2SubnetTags <a name="Ec2SubnetTags" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2subnet"

&ec2subnet.Ec2SubnetTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTags.property.key">Key</a></code> | <code>*string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTags.property.value">Value</a></code> | <code>*string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_subnet#key Ec2Subnet#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_subnet#value Ec2Subnet#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2SubnetBlockPublicAccessStatesOutputReference <a name="Ec2SubnetBlockPublicAccessStatesOutputReference" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2subnet"

ec2subnet.NewEc2SubnetBlockPublicAccessStatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2SubnetBlockPublicAccessStatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.property.internetGatewayBlockMode">InternetGatewayBlockMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStates">Ec2SubnetBlockPublicAccessStates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternetGatewayBlockMode`<sup>Required</sup> <a name="InternetGatewayBlockMode" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.property.internetGatewayBlockMode"></a>

```go
func InternetGatewayBlockMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.property.internalValue"></a>

```go
func InternalValue() Ec2SubnetBlockPublicAccessStates
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStates">Ec2SubnetBlockPublicAccessStates</a>

---


### Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference <a name="Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2subnet"

ec2subnet.NewEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.resetEnableResourceNameDnsAaaaRecord">ResetEnableResourceNameDnsAaaaRecord</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.resetEnableResourceNameDnsARecord">ResetEnableResourceNameDnsARecord</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.resetHostnameType">ResetHostnameType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableResourceNameDnsAaaaRecord` <a name="ResetEnableResourceNameDnsAaaaRecord" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.resetEnableResourceNameDnsAaaaRecord"></a>

```go
func ResetEnableResourceNameDnsAaaaRecord()
```

##### `ResetEnableResourceNameDnsARecord` <a name="ResetEnableResourceNameDnsARecord" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.resetEnableResourceNameDnsARecord"></a>

```go
func ResetEnableResourceNameDnsARecord()
```

##### `ResetHostnameType` <a name="ResetHostnameType" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.resetHostnameType"></a>

```go
func ResetHostnameType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.enableResourceNameDnsAaaaRecordInput">EnableResourceNameDnsAaaaRecordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.enableResourceNameDnsARecordInput">EnableResourceNameDnsARecordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.hostnameTypeInput">HostnameTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.enableResourceNameDnsAaaaRecord">EnableResourceNameDnsAaaaRecord</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.enableResourceNameDnsARecord">EnableResourceNameDnsARecord</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.hostnameType">HostnameType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableResourceNameDnsAaaaRecordInput`<sup>Optional</sup> <a name="EnableResourceNameDnsAaaaRecordInput" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.enableResourceNameDnsAaaaRecordInput"></a>

```go
func EnableResourceNameDnsAaaaRecordInput() interface{}
```

- *Type:* interface{}

---

##### `EnableResourceNameDnsARecordInput`<sup>Optional</sup> <a name="EnableResourceNameDnsARecordInput" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.enableResourceNameDnsARecordInput"></a>

```go
func EnableResourceNameDnsARecordInput() interface{}
```

- *Type:* interface{}

---

##### `HostnameTypeInput`<sup>Optional</sup> <a name="HostnameTypeInput" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.hostnameTypeInput"></a>

```go
func HostnameTypeInput() *string
```

- *Type:* *string

---

##### `EnableResourceNameDnsAaaaRecord`<sup>Required</sup> <a name="EnableResourceNameDnsAaaaRecord" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.enableResourceNameDnsAaaaRecord"></a>

```go
func EnableResourceNameDnsAaaaRecord() interface{}
```

- *Type:* interface{}

---

##### `EnableResourceNameDnsARecord`<sup>Required</sup> <a name="EnableResourceNameDnsARecord" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.enableResourceNameDnsARecord"></a>

```go
func EnableResourceNameDnsARecord() interface{}
```

- *Type:* interface{}

---

##### `HostnameType`<sup>Required</sup> <a name="HostnameType" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.hostnameType"></a>

```go
func HostnameType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2SubnetTagsList <a name="Ec2SubnetTagsList" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2subnet"

ec2subnet.NewEc2SubnetTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2SubnetTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.get"></a>

```go
func Get(index *f64) Ec2SubnetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2SubnetTagsOutputReference <a name="Ec2SubnetTagsOutputReference" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2subnet"

ec2subnet.NewEc2SubnetTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2SubnetTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



