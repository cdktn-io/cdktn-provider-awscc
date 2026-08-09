# `ec2VpcEndpoint` Submodule <a name="`ec2VpcEndpoint` Submodule" id="@cdktn/provider-awscc.ec2VpcEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VpcEndpoint <a name="Ec2VpcEndpoint" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint awscc_ec2_vpc_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpcendpoint"

ec2vpcendpoint.NewEc2VpcEndpoint(scope Construct, id *string, config Ec2VpcEndpointConfig) Ec2VpcEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig">Ec2VpcEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig">Ec2VpcEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.putDnsOptions">PutDnsOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetDnsOptions">ResetDnsOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetPolicyDocument">ResetPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetPrivateDnsEnabled">ResetPrivateDnsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetResourceConfigurationArn">ResetResourceConfigurationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetRouteTableIds">ResetRouteTableIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetServiceNetworkArn">ResetServiceNetworkArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetServiceRegion">ResetServiceRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetVpcEndpointType">ResetVpcEndpointType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDnsOptions` <a name="PutDnsOptions" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.putDnsOptions"></a>

```go
func PutDnsOptions(value Ec2VpcEndpointDnsOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.putDnsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions">Ec2VpcEndpointDnsOptions</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDnsOptions` <a name="ResetDnsOptions" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetDnsOptions"></a>

```go
func ResetDnsOptions()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetIpAddressType"></a>

```go
func ResetIpAddressType()
```

##### `ResetPolicyDocument` <a name="ResetPolicyDocument" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetPolicyDocument"></a>

```go
func ResetPolicyDocument()
```

##### `ResetPrivateDnsEnabled` <a name="ResetPrivateDnsEnabled" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetPrivateDnsEnabled"></a>

```go
func ResetPrivateDnsEnabled()
```

##### `ResetResourceConfigurationArn` <a name="ResetResourceConfigurationArn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetResourceConfigurationArn"></a>

```go
func ResetResourceConfigurationArn()
```

##### `ResetRouteTableIds` <a name="ResetRouteTableIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetRouteTableIds"></a>

```go
func ResetRouteTableIds()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetServiceName"></a>

```go
func ResetServiceName()
```

##### `ResetServiceNetworkArn` <a name="ResetServiceNetworkArn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetServiceNetworkArn"></a>

```go
func ResetServiceNetworkArn()
```

##### `ResetServiceRegion` <a name="ResetServiceRegion" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetServiceRegion"></a>

```go
func ResetServiceRegion()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetSubnetIds"></a>

```go
func ResetSubnetIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVpcEndpointType` <a name="ResetVpcEndpointType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetVpcEndpointType"></a>

```go
func ResetVpcEndpointType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VpcEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpcendpoint"

ec2vpcendpoint.Ec2VpcEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpcendpoint"

ec2vpcendpoint.Ec2VpcEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpcendpoint"

ec2vpcendpoint.Ec2VpcEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpcendpoint"

ec2vpcendpoint.Ec2VpcEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2VpcEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2VpcEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2VpcEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VpcEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dnsEntries">DnsEntries</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dnsOptions">DnsOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference">Ec2VpcEndpointDnsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.networkInterfaceIds">NetworkInterfaceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList">Ec2VpcEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcEndpointId">VpcEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dnsOptionsInput">DnsOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.policyDocumentInput">PolicyDocumentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.privateDnsEnabledInput">PrivateDnsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.resourceConfigurationArnInput">ResourceConfigurationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.routeTableIdsInput">RouteTableIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceNetworkArnInput">ServiceNetworkArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceRegionInput">ServiceRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcEndpointTypeInput">VpcEndpointTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.policyDocument">PolicyDocument</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.privateDnsEnabled">PrivateDnsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.resourceConfigurationArn">ResourceConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.routeTableIds">RouteTableIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceNetworkArn">ServiceNetworkArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceRegion">ServiceRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcEndpointType">VpcEndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `DnsEntries`<sup>Required</sup> <a name="DnsEntries" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dnsEntries"></a>

```go
func DnsEntries() *[]*string
```

- *Type:* *[]*string

---

##### `DnsOptions`<sup>Required</sup> <a name="DnsOptions" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dnsOptions"></a>

```go
func DnsOptions() Ec2VpcEndpointDnsOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference">Ec2VpcEndpointDnsOptionsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NetworkInterfaceIds`<sup>Required</sup> <a name="NetworkInterfaceIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.networkInterfaceIds"></a>

```go
func NetworkInterfaceIds() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.tags"></a>

```go
func Tags() Ec2VpcEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList">Ec2VpcEndpointTagsList</a>

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcEndpointId"></a>

```go
func VpcEndpointId() *string
```

- *Type:* *string

---

##### `DnsOptionsInput`<sup>Optional</sup> <a name="DnsOptionsInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dnsOptionsInput"></a>

```go
func DnsOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.ipAddressTypeInput"></a>

```go
func IpAddressTypeInput() *string
```

- *Type:* *string

---

##### `PolicyDocumentInput`<sup>Optional</sup> <a name="PolicyDocumentInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.policyDocumentInput"></a>

```go
func PolicyDocumentInput() *string
```

- *Type:* *string

---

##### `PrivateDnsEnabledInput`<sup>Optional</sup> <a name="PrivateDnsEnabledInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.privateDnsEnabledInput"></a>

```go
func PrivateDnsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceConfigurationArnInput`<sup>Optional</sup> <a name="ResourceConfigurationArnInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.resourceConfigurationArnInput"></a>

```go
func ResourceConfigurationArnInput() *string
```

- *Type:* *string

---

##### `RouteTableIdsInput`<sup>Optional</sup> <a name="RouteTableIdsInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.routeTableIdsInput"></a>

```go
func RouteTableIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `ServiceNetworkArnInput`<sup>Optional</sup> <a name="ServiceNetworkArnInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceNetworkArnInput"></a>

```go
func ServiceNetworkArnInput() *string
```

- *Type:* *string

---

##### `ServiceRegionInput`<sup>Optional</sup> <a name="ServiceRegionInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceRegionInput"></a>

```go
func ServiceRegionInput() *string
```

- *Type:* *string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcEndpointTypeInput`<sup>Optional</sup> <a name="VpcEndpointTypeInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcEndpointTypeInput"></a>

```go
func VpcEndpointTypeInput() *string
```

- *Type:* *string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.policyDocument"></a>

```go
func PolicyDocument() *string
```

- *Type:* *string

---

##### `PrivateDnsEnabled`<sup>Required</sup> <a name="PrivateDnsEnabled" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.privateDnsEnabled"></a>

```go
func PrivateDnsEnabled() interface{}
```

- *Type:* interface{}

---

##### `ResourceConfigurationArn`<sup>Required</sup> <a name="ResourceConfigurationArn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.resourceConfigurationArn"></a>

```go
func ResourceConfigurationArn() *string
```

- *Type:* *string

---

##### `RouteTableIds`<sup>Required</sup> <a name="RouteTableIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.routeTableIds"></a>

```go
func RouteTableIds() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `ServiceNetworkArn`<sup>Required</sup> <a name="ServiceNetworkArn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceNetworkArn"></a>

```go
func ServiceNetworkArn() *string
```

- *Type:* *string

---

##### `ServiceRegion`<sup>Required</sup> <a name="ServiceRegion" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceRegion"></a>

```go
func ServiceRegion() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `VpcEndpointType`<sup>Required</sup> <a name="VpcEndpointType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcEndpointType"></a>

```go
func VpcEndpointType() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VpcEndpointConfig <a name="Ec2VpcEndpointConfig" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpcendpoint"

&ec2vpcendpoint.Ec2VpcEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	VpcId: *string,
	DnsOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions,
	IpAddressType: *string,
	PolicyDocument: *string,
	PrivateDnsEnabled: interface{},
	ResourceConfigurationArn: *string,
	RouteTableIds: *[]*string,
	SecurityGroupIds: *[]*string,
	ServiceName: *string,
	ServiceNetworkArn: *string,
	ServiceRegion: *string,
	SubnetIds: *[]*string,
	Tags: interface{},
	VpcEndpointType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.vpcId">VpcId</a></code> | <code>*string</code> | The ID of the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.dnsOptions">DnsOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions">Ec2VpcEndpointDnsOptions</a></code> | Describes the DNS options for an endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | The supported IP address types. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.policyDocument">PolicyDocument</a></code> | <code>*string</code> | An endpoint policy, which controls access to the service from the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.privateDnsEnabled">PrivateDnsEnabled</a></code> | <code>interface{}</code> | Indicate whether to associate a private hosted zone with the specified VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.resourceConfigurationArn">ResourceConfigurationArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the resource configuration. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.routeTableIds">RouteTableIds</a></code> | <code>*[]*string</code> | The IDs of the route tables. Routing is supported only for gateway endpoints. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | The IDs of the security groups to associate with the endpoint network interfaces. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.serviceName">ServiceName</a></code> | <code>*string</code> | The name of the endpoint service. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.serviceNetworkArn">ServiceNetworkArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the service network. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.serviceRegion">ServiceRegion</a></code> | <code>*string</code> | Describes a Region. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | The IDs of the subnets in which to create endpoint network interfaces. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags to associate with the endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.vpcEndpointType">VpcEndpointType</a></code> | <code>*string</code> | The type of endpoint.  Default: Gateway. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

The ID of the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#vpc_id Ec2VpcEndpoint#vpc_id}

---

##### `DnsOptions`<sup>Optional</sup> <a name="DnsOptions" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.dnsOptions"></a>

```go
DnsOptions Ec2VpcEndpointDnsOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions">Ec2VpcEndpointDnsOptions</a>

Describes the DNS options for an endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#dns_options Ec2VpcEndpoint#dns_options}

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.ipAddressType"></a>

```go
IpAddressType *string
```

- *Type:* *string

The supported IP address types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#ip_address_type Ec2VpcEndpoint#ip_address_type}

---

##### `PolicyDocument`<sup>Optional</sup> <a name="PolicyDocument" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.policyDocument"></a>

```go
PolicyDocument *string
```

- *Type:* *string

An endpoint policy, which controls access to the service from the VPC.

The default endpoint policy allows full access to the service. Endpoint policies are supported only for gateway and interface endpoints.
For CloudFormation templates in YAML, you can provide the policy in JSON or YAML format. For example, if you have a JSON policy, you can convert it to YAML before including it in the YAML template, and CFNlong converts the policy to JSON format before calling the API actions for privatelink. Alternatively, you can include the JSON directly in the YAML, as shown in the following `Properties` section:
`Properties: VpcEndpointType: 'Interface' ServiceName: !Sub 'com.amazonaws.${AWS::Region}.logs' PolicyDocument: '{ "Version":"2012-10-17", "Statement": [{ "Effect":"Allow", "Principal":"*", "Action":["logs:Describe*","logs:Get*","logs:List*","logs:FilterLogEvents"], "Resource":"*" }] }'`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#policy_document Ec2VpcEndpoint#policy_document}

---

##### `PrivateDnsEnabled`<sup>Optional</sup> <a name="PrivateDnsEnabled" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.privateDnsEnabled"></a>

```go
PrivateDnsEnabled interface{}
```

- *Type:* interface{}

Indicate whether to associate a private hosted zone with the specified VPC.

The private hosted zone contains a record set for the default public DNS name for the service for the Region (for example, `kinesis.us-east-1.amazonaws.com`), which resolves to the private IP addresses of the endpoint network interfaces in the VPC. This enables you to make requests to the default public DNS name for the service instead of the public DNS names that are automatically generated by the VPC endpoint service.
To use a private hosted zone, you must set the following VPC attributes to `true`: `enableDnsHostnames` and `enableDnsSupport`.
This property is supported only for interface endpoints.
Default: `false`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#private_dns_enabled Ec2VpcEndpoint#private_dns_enabled}

---

##### `ResourceConfigurationArn`<sup>Optional</sup> <a name="ResourceConfigurationArn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.resourceConfigurationArn"></a>

```go
ResourceConfigurationArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#resource_configuration_arn Ec2VpcEndpoint#resource_configuration_arn}

---

##### `RouteTableIds`<sup>Optional</sup> <a name="RouteTableIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.routeTableIds"></a>

```go
RouteTableIds *[]*string
```

- *Type:* *[]*string

The IDs of the route tables. Routing is supported only for gateway endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#route_table_ids Ec2VpcEndpoint#route_table_ids}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

The IDs of the security groups to associate with the endpoint network interfaces.

If this parameter is not specified, we use the default security group for the VPC. Security groups are supported only for interface endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#security_group_ids Ec2VpcEndpoint#security_group_ids}

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

The name of the endpoint service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#service_name Ec2VpcEndpoint#service_name}

---

##### `ServiceNetworkArn`<sup>Optional</sup> <a name="ServiceNetworkArn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.serviceNetworkArn"></a>

```go
ServiceNetworkArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the service network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#service_network_arn Ec2VpcEndpoint#service_network_arn}

---

##### `ServiceRegion`<sup>Optional</sup> <a name="ServiceRegion" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.serviceRegion"></a>

```go
ServiceRegion *string
```

- *Type:* *string

Describes a Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#service_region Ec2VpcEndpoint#service_region}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

The IDs of the subnets in which to create endpoint network interfaces.

You must specify this property for an interface endpoint or a Gateway Load Balancer endpoint. You can't specify this property for a gateway endpoint. For a Gateway Load Balancer endpoint, you can specify only one subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#subnet_ids Ec2VpcEndpoint#subnet_ids}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags to associate with the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#tags Ec2VpcEndpoint#tags}

---

##### `VpcEndpointType`<sup>Optional</sup> <a name="VpcEndpointType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.vpcEndpointType"></a>

```go
VpcEndpointType *string
```

- *Type:* *string

The type of endpoint.  Default: Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#vpc_endpoint_type Ec2VpcEndpoint#vpc_endpoint_type}

---

### Ec2VpcEndpointDnsOptions <a name="Ec2VpcEndpointDnsOptions" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpcendpoint"

&ec2vpcendpoint.Ec2VpcEndpointDnsOptions {
	DnsRecordIpType: *string,
	PrivateDnsOnlyForInboundResolverEndpoint: *string,
	PrivateDnsPreference: *string,
	PrivateDnsSpecifiedDomains: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.dnsRecordIpType">DnsRecordIpType</a></code> | <code>*string</code> | The DNS records created for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.privateDnsOnlyForInboundResolverEndpoint">PrivateDnsOnlyForInboundResolverEndpoint</a></code> | <code>*string</code> | Indicates whether to enable private DNS only for inbound endpoints. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.privateDnsPreference">PrivateDnsPreference</a></code> | <code>*string</code> | The preference for which private domains have a private hosted zone created for and associated with the specified VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.privateDnsSpecifiedDomains">PrivateDnsSpecifiedDomains</a></code> | <code>*[]*string</code> | Indicates which of the private domains to create private hosted zones for and associate with the specified VPC. |

---

##### `DnsRecordIpType`<sup>Optional</sup> <a name="DnsRecordIpType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.dnsRecordIpType"></a>

```go
DnsRecordIpType *string
```

- *Type:* *string

The DNS records created for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#dns_record_ip_type Ec2VpcEndpoint#dns_record_ip_type}

---

##### `PrivateDnsOnlyForInboundResolverEndpoint`<sup>Optional</sup> <a name="PrivateDnsOnlyForInboundResolverEndpoint" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.privateDnsOnlyForInboundResolverEndpoint"></a>

```go
PrivateDnsOnlyForInboundResolverEndpoint *string
```

- *Type:* *string

Indicates whether to enable private DNS only for inbound endpoints.

This option is available only for services that support both gateway and interface endpoints. It routes traffic that originates from the VPC to the gateway endpoint and traffic that originates from on-premises to the interface endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#private_dns_only_for_inbound_resolver_endpoint Ec2VpcEndpoint#private_dns_only_for_inbound_resolver_endpoint}

---

##### `PrivateDnsPreference`<sup>Optional</sup> <a name="PrivateDnsPreference" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.privateDnsPreference"></a>

```go
PrivateDnsPreference *string
```

- *Type:* *string

The preference for which private domains have a private hosted zone created for and associated with the specified VPC.

Only supported when private DNS is enabled and when the VPC endpoint type is ServiceNetwork or Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#private_dns_preference Ec2VpcEndpoint#private_dns_preference}

---

##### `PrivateDnsSpecifiedDomains`<sup>Optional</sup> <a name="PrivateDnsSpecifiedDomains" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.privateDnsSpecifiedDomains"></a>

```go
PrivateDnsSpecifiedDomains *[]*string
```

- *Type:* *[]*string

Indicates which of the private domains to create private hosted zones for and associate with the specified VPC.

Only supported when private DNS is enabled and the private DNS preference is `VERIFIED_DOMAINS_AND_SPECIFIED_DOMAINS` or `SPECIFIED_DOMAINS_ONLY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#private_dns_specified_domains Ec2VpcEndpoint#private_dns_specified_domains}

---

### Ec2VpcEndpointTags <a name="Ec2VpcEndpointTags" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpcendpoint"

&ec2vpcendpoint.Ec2VpcEndpointTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags.property.key">Key</a></code> | <code>*string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags.property.value">Value</a></code> | <code>*string</code> | The value of the tag.  Constraints: Tag values are case-sensitive and accept a maximum of 256 Unicode characters. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key of the tag.

Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode characters. May not begin with `aws:`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#key Ec2VpcEndpoint#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of the tag.  Constraints: Tag values are case-sensitive and accept a maximum of 256 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#value Ec2VpcEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VpcEndpointDnsOptionsOutputReference <a name="Ec2VpcEndpointDnsOptionsOutputReference" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpcendpoint"

ec2vpcendpoint.NewEc2VpcEndpointDnsOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2VpcEndpointDnsOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetDnsRecordIpType">ResetDnsRecordIpType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetPrivateDnsOnlyForInboundResolverEndpoint">ResetPrivateDnsOnlyForInboundResolverEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetPrivateDnsPreference">ResetPrivateDnsPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetPrivateDnsSpecifiedDomains">ResetPrivateDnsSpecifiedDomains</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDnsRecordIpType` <a name="ResetDnsRecordIpType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetDnsRecordIpType"></a>

```go
func ResetDnsRecordIpType()
```

##### `ResetPrivateDnsOnlyForInboundResolverEndpoint` <a name="ResetPrivateDnsOnlyForInboundResolverEndpoint" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetPrivateDnsOnlyForInboundResolverEndpoint"></a>

```go
func ResetPrivateDnsOnlyForInboundResolverEndpoint()
```

##### `ResetPrivateDnsPreference` <a name="ResetPrivateDnsPreference" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetPrivateDnsPreference"></a>

```go
func ResetPrivateDnsPreference()
```

##### `ResetPrivateDnsSpecifiedDomains` <a name="ResetPrivateDnsSpecifiedDomains" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetPrivateDnsSpecifiedDomains"></a>

```go
func ResetPrivateDnsSpecifiedDomains()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.dnsRecordIpTypeInput">DnsRecordIpTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpointInput">PrivateDnsOnlyForInboundResolverEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsPreferenceInput">PrivateDnsPreferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsSpecifiedDomainsInput">PrivateDnsSpecifiedDomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.dnsRecordIpType">DnsRecordIpType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpoint">PrivateDnsOnlyForInboundResolverEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsPreference">PrivateDnsPreference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsSpecifiedDomains">PrivateDnsSpecifiedDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsRecordIpTypeInput`<sup>Optional</sup> <a name="DnsRecordIpTypeInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.dnsRecordIpTypeInput"></a>

```go
func DnsRecordIpTypeInput() *string
```

- *Type:* *string

---

##### `PrivateDnsOnlyForInboundResolverEndpointInput`<sup>Optional</sup> <a name="PrivateDnsOnlyForInboundResolverEndpointInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpointInput"></a>

```go
func PrivateDnsOnlyForInboundResolverEndpointInput() *string
```

- *Type:* *string

---

##### `PrivateDnsPreferenceInput`<sup>Optional</sup> <a name="PrivateDnsPreferenceInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsPreferenceInput"></a>

```go
func PrivateDnsPreferenceInput() *string
```

- *Type:* *string

---

##### `PrivateDnsSpecifiedDomainsInput`<sup>Optional</sup> <a name="PrivateDnsSpecifiedDomainsInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsSpecifiedDomainsInput"></a>

```go
func PrivateDnsSpecifiedDomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DnsRecordIpType`<sup>Required</sup> <a name="DnsRecordIpType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.dnsRecordIpType"></a>

```go
func DnsRecordIpType() *string
```

- *Type:* *string

---

##### `PrivateDnsOnlyForInboundResolverEndpoint`<sup>Required</sup> <a name="PrivateDnsOnlyForInboundResolverEndpoint" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpoint"></a>

```go
func PrivateDnsOnlyForInboundResolverEndpoint() *string
```

- *Type:* *string

---

##### `PrivateDnsPreference`<sup>Required</sup> <a name="PrivateDnsPreference" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsPreference"></a>

```go
func PrivateDnsPreference() *string
```

- *Type:* *string

---

##### `PrivateDnsSpecifiedDomains`<sup>Required</sup> <a name="PrivateDnsSpecifiedDomains" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsSpecifiedDomains"></a>

```go
func PrivateDnsSpecifiedDomains() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VpcEndpointTagsList <a name="Ec2VpcEndpointTagsList" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpcendpoint"

ec2vpcendpoint.NewEc2VpcEndpointTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2VpcEndpointTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.get"></a>

```go
func Get(index *f64) Ec2VpcEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VpcEndpointTagsOutputReference <a name="Ec2VpcEndpointTagsOutputReference" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2vpcendpoint"

ec2vpcendpoint.NewEc2VpcEndpointTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2VpcEndpointTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



