# `ec2VerifiedAccessEndpoint` Submodule <a name="`ec2VerifiedAccessEndpoint` Submodule" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VerifiedAccessEndpoint <a name="Ec2VerifiedAccessEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint awscc_ec2_verified_access_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccessendpoint"

ec2verifiedaccessendpoint.NewEc2VerifiedAccessEndpoint(scope Construct, id *string, config Ec2VerifiedAccessEndpointConfig) Ec2VerifiedAccessEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig">Ec2VerifiedAccessEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig">Ec2VerifiedAccessEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putCidrOptions">PutCidrOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putLoadBalancerOptions">PutLoadBalancerOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putNetworkInterfaceOptions">PutNetworkInterfaceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putRdsOptions">PutRdsOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putSseSpecification">PutSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetApplicationDomain">ResetApplicationDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetCidrOptions">ResetCidrOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetDomainCertificateArn">ResetDomainCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetEndpointDomainPrefix">ResetEndpointDomainPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetLoadBalancerOptions">ResetLoadBalancerOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetNetworkInterfaceOptions">ResetNetworkInterfaceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetPolicyDocument">ResetPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetPolicyEnabled">ResetPolicyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetRdsOptions">ResetRdsOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetSseSpecification">ResetSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCidrOptions` <a name="PutCidrOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putCidrOptions"></a>

```go
func PutCidrOptions(value Ec2VerifiedAccessEndpointCidrOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putCidrOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions">Ec2VerifiedAccessEndpointCidrOptions</a>

---

##### `PutLoadBalancerOptions` <a name="PutLoadBalancerOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putLoadBalancerOptions"></a>

```go
func PutLoadBalancerOptions(value Ec2VerifiedAccessEndpointLoadBalancerOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putLoadBalancerOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions">Ec2VerifiedAccessEndpointLoadBalancerOptions</a>

---

##### `PutNetworkInterfaceOptions` <a name="PutNetworkInterfaceOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putNetworkInterfaceOptions"></a>

```go
func PutNetworkInterfaceOptions(value Ec2VerifiedAccessEndpointNetworkInterfaceOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putNetworkInterfaceOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions">Ec2VerifiedAccessEndpointNetworkInterfaceOptions</a>

---

##### `PutRdsOptions` <a name="PutRdsOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putRdsOptions"></a>

```go
func PutRdsOptions(value Ec2VerifiedAccessEndpointRdsOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putRdsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions">Ec2VerifiedAccessEndpointRdsOptions</a>

---

##### `PutSseSpecification` <a name="PutSseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putSseSpecification"></a>

```go
func PutSseSpecification(value Ec2VerifiedAccessEndpointSseSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putSseSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification">Ec2VerifiedAccessEndpointSseSpecification</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApplicationDomain` <a name="ResetApplicationDomain" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetApplicationDomain"></a>

```go
func ResetApplicationDomain()
```

##### `ResetCidrOptions` <a name="ResetCidrOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetCidrOptions"></a>

```go
func ResetCidrOptions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDomainCertificateArn` <a name="ResetDomainCertificateArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetDomainCertificateArn"></a>

```go
func ResetDomainCertificateArn()
```

##### `ResetEndpointDomainPrefix` <a name="ResetEndpointDomainPrefix" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetEndpointDomainPrefix"></a>

```go
func ResetEndpointDomainPrefix()
```

##### `ResetLoadBalancerOptions` <a name="ResetLoadBalancerOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetLoadBalancerOptions"></a>

```go
func ResetLoadBalancerOptions()
```

##### `ResetNetworkInterfaceOptions` <a name="ResetNetworkInterfaceOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetNetworkInterfaceOptions"></a>

```go
func ResetNetworkInterfaceOptions()
```

##### `ResetPolicyDocument` <a name="ResetPolicyDocument" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetPolicyDocument"></a>

```go
func ResetPolicyDocument()
```

##### `ResetPolicyEnabled` <a name="ResetPolicyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetPolicyEnabled"></a>

```go
func ResetPolicyEnabled()
```

##### `ResetRdsOptions` <a name="ResetRdsOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetRdsOptions"></a>

```go
func ResetRdsOptions()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSseSpecification` <a name="ResetSseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetSseSpecification"></a>

```go
func ResetSseSpecification()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VerifiedAccessEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccessendpoint"

ec2verifiedaccessendpoint.Ec2VerifiedAccessEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccessendpoint"

ec2verifiedaccessendpoint.Ec2VerifiedAccessEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccessendpoint"

ec2verifiedaccessendpoint.Ec2VerifiedAccessEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccessendpoint"

ec2verifiedaccessendpoint.Ec2VerifiedAccessEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2VerifiedAccessEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2VerifiedAccessEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2VerifiedAccessEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VerifiedAccessEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.cidrOptions">CidrOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference">Ec2VerifiedAccessEndpointCidrOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.deviceValidationDomain">DeviceValidationDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointDomain">EndpointDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.loadBalancerOptions">LoadBalancerOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference">Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.networkInterfaceOptions">NetworkInterfaceOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.rdsOptions">RdsOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference">Ec2VerifiedAccessEndpointRdsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.sseSpecification">SseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference">Ec2VerifiedAccessEndpointSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList">Ec2VerifiedAccessEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessEndpointId">VerifiedAccessEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessInstanceId">VerifiedAccessInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.applicationDomainInput">ApplicationDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.attachmentTypeInput">AttachmentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.cidrOptionsInput">CidrOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.domainCertificateArnInput">DomainCertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointDomainPrefixInput">EndpointDomainPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.loadBalancerOptionsInput">LoadBalancerOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.networkInterfaceOptionsInput">NetworkInterfaceOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyDocumentInput">PolicyDocumentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyEnabledInput">PolicyEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.rdsOptionsInput">RdsOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.sseSpecificationInput">SseSpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessGroupIdInput">VerifiedAccessGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.applicationDomain">ApplicationDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.attachmentType">AttachmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.domainCertificateArn">DomainCertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointDomainPrefix">EndpointDomainPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointType">EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyDocument">PolicyDocument</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyEnabled">PolicyEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessGroupId">VerifiedAccessGroupId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CidrOptions`<sup>Required</sup> <a name="CidrOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.cidrOptions"></a>

```go
func CidrOptions() Ec2VerifiedAccessEndpointCidrOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference">Ec2VerifiedAccessEndpointCidrOptionsOutputReference</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `DeviceValidationDomain`<sup>Required</sup> <a name="DeviceValidationDomain" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.deviceValidationDomain"></a>

```go
func DeviceValidationDomain() *string
```

- *Type:* *string

---

##### `EndpointDomain`<sup>Required</sup> <a name="EndpointDomain" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointDomain"></a>

```go
func EndpointDomain() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.lastUpdatedTime"></a>

```go
func LastUpdatedTime() *string
```

- *Type:* *string

---

##### `LoadBalancerOptions`<sup>Required</sup> <a name="LoadBalancerOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.loadBalancerOptions"></a>

```go
func LoadBalancerOptions() Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference">Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference</a>

---

##### `NetworkInterfaceOptions`<sup>Required</sup> <a name="NetworkInterfaceOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.networkInterfaceOptions"></a>

```go
func NetworkInterfaceOptions() Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference</a>

---

##### `RdsOptions`<sup>Required</sup> <a name="RdsOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.rdsOptions"></a>

```go
func RdsOptions() Ec2VerifiedAccessEndpointRdsOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference">Ec2VerifiedAccessEndpointRdsOptionsOutputReference</a>

---

##### `SseSpecification`<sup>Required</sup> <a name="SseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.sseSpecification"></a>

```go
func SseSpecification() Ec2VerifiedAccessEndpointSseSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference">Ec2VerifiedAccessEndpointSseSpecificationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.tags"></a>

```go
func Tags() Ec2VerifiedAccessEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList">Ec2VerifiedAccessEndpointTagsList</a>

---

##### `VerifiedAccessEndpointId`<sup>Required</sup> <a name="VerifiedAccessEndpointId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessEndpointId"></a>

```go
func VerifiedAccessEndpointId() *string
```

- *Type:* *string

---

##### `VerifiedAccessInstanceId`<sup>Required</sup> <a name="VerifiedAccessInstanceId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessInstanceId"></a>

```go
func VerifiedAccessInstanceId() *string
```

- *Type:* *string

---

##### `ApplicationDomainInput`<sup>Optional</sup> <a name="ApplicationDomainInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.applicationDomainInput"></a>

```go
func ApplicationDomainInput() *string
```

- *Type:* *string

---

##### `AttachmentTypeInput`<sup>Optional</sup> <a name="AttachmentTypeInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.attachmentTypeInput"></a>

```go
func AttachmentTypeInput() *string
```

- *Type:* *string

---

##### `CidrOptionsInput`<sup>Optional</sup> <a name="CidrOptionsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.cidrOptionsInput"></a>

```go
func CidrOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DomainCertificateArnInput`<sup>Optional</sup> <a name="DomainCertificateArnInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.domainCertificateArnInput"></a>

```go
func DomainCertificateArnInput() *string
```

- *Type:* *string

---

##### `EndpointDomainPrefixInput`<sup>Optional</sup> <a name="EndpointDomainPrefixInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointDomainPrefixInput"></a>

```go
func EndpointDomainPrefixInput() *string
```

- *Type:* *string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointTypeInput"></a>

```go
func EndpointTypeInput() *string
```

- *Type:* *string

---

##### `LoadBalancerOptionsInput`<sup>Optional</sup> <a name="LoadBalancerOptionsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.loadBalancerOptionsInput"></a>

```go
func LoadBalancerOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkInterfaceOptionsInput`<sup>Optional</sup> <a name="NetworkInterfaceOptionsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.networkInterfaceOptionsInput"></a>

```go
func NetworkInterfaceOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyDocumentInput`<sup>Optional</sup> <a name="PolicyDocumentInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyDocumentInput"></a>

```go
func PolicyDocumentInput() *string
```

- *Type:* *string

---

##### `PolicyEnabledInput`<sup>Optional</sup> <a name="PolicyEnabledInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyEnabledInput"></a>

```go
func PolicyEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RdsOptionsInput`<sup>Optional</sup> <a name="RdsOptionsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.rdsOptionsInput"></a>

```go
func RdsOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SseSpecificationInput`<sup>Optional</sup> <a name="SseSpecificationInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.sseSpecificationInput"></a>

```go
func SseSpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `VerifiedAccessGroupIdInput`<sup>Optional</sup> <a name="VerifiedAccessGroupIdInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessGroupIdInput"></a>

```go
func VerifiedAccessGroupIdInput() *string
```

- *Type:* *string

---

##### `ApplicationDomain`<sup>Required</sup> <a name="ApplicationDomain" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.applicationDomain"></a>

```go
func ApplicationDomain() *string
```

- *Type:* *string

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.attachmentType"></a>

```go
func AttachmentType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DomainCertificateArn`<sup>Required</sup> <a name="DomainCertificateArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.domainCertificateArn"></a>

```go
func DomainCertificateArn() *string
```

- *Type:* *string

---

##### `EndpointDomainPrefix`<sup>Required</sup> <a name="EndpointDomainPrefix" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointDomainPrefix"></a>

```go
func EndpointDomainPrefix() *string
```

- *Type:* *string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointType"></a>

```go
func EndpointType() *string
```

- *Type:* *string

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyDocument"></a>

```go
func PolicyDocument() *string
```

- *Type:* *string

---

##### `PolicyEnabled`<sup>Required</sup> <a name="PolicyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyEnabled"></a>

```go
func PolicyEnabled() interface{}
```

- *Type:* interface{}

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `VerifiedAccessGroupId`<sup>Required</sup> <a name="VerifiedAccessGroupId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessGroupId"></a>

```go
func VerifiedAccessGroupId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VerifiedAccessEndpointCidrOptions <a name="Ec2VerifiedAccessEndpointCidrOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccessendpoint"

&ec2verifiedaccessendpoint.Ec2VerifiedAccessEndpointCidrOptions {
	Cidr: *string,
	PortRanges: interface{},
	Protocol: *string,
	SubnetIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.cidr">Cidr</a></code> | <code>*string</code> | The IP address range, in CIDR notation. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.portRanges">PortRanges</a></code> | <code>interface{}</code> | The list of port range. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.protocol">Protocol</a></code> | <code>*string</code> | The IP protocol. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | The IDs of the subnets. |

---

##### `Cidr`<sup>Optional</sup> <a name="Cidr" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.cidr"></a>

```go
Cidr *string
```

- *Type:* *string

The IP address range, in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#cidr Ec2VerifiedAccessEndpoint#cidr}

---

##### `PortRanges`<sup>Optional</sup> <a name="PortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.portRanges"></a>

```go
PortRanges interface{}
```

- *Type:* interface{}

The list of port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#port_ranges Ec2VerifiedAccessEndpoint#port_ranges}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

The IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#protocol Ec2VerifiedAccessEndpoint#protocol}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

The IDs of the subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#subnet_ids Ec2VerifiedAccessEndpoint#subnet_ids}

---

### Ec2VerifiedAccessEndpointCidrOptionsPortRanges <a name="Ec2VerifiedAccessEndpointCidrOptionsPortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccessendpoint"

&ec2verifiedaccessendpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges {
	FromPort: *f64,
	ToPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges.property.fromPort">FromPort</a></code> | <code>*f64</code> | The first port in the range. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges.property.toPort">ToPort</a></code> | <code>*f64</code> | The last port in the range. |

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges.property.fromPort"></a>

```go
FromPort *f64
```

- *Type:* *f64

The first port in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#from_port Ec2VerifiedAccessEndpoint#from_port}

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges.property.toPort"></a>

```go
ToPort *f64
```

- *Type:* *f64

The last port in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#to_port Ec2VerifiedAccessEndpoint#to_port}

---

### Ec2VerifiedAccessEndpointConfig <a name="Ec2VerifiedAccessEndpointConfig" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccessendpoint"

&ec2verifiedaccessendpoint.Ec2VerifiedAccessEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AttachmentType: *string,
	EndpointType: *string,
	VerifiedAccessGroupId: *string,
	ApplicationDomain: *string,
	CidrOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions,
	Description: *string,
	DomainCertificateArn: *string,
	EndpointDomainPrefix: *string,
	LoadBalancerOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions,
	NetworkInterfaceOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions,
	PolicyDocument: *string,
	PolicyEnabled: interface{},
	RdsOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions,
	SecurityGroupIds: *[]*string,
	SseSpecification: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.attachmentType">AttachmentType</a></code> | <code>*string</code> | The type of attachment used to provide connectivity between the AWS Verified Access endpoint and the application. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.endpointType">EndpointType</a></code> | <code>*string</code> | The type of AWS Verified Access endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.verifiedAccessGroupId">VerifiedAccessGroupId</a></code> | <code>*string</code> | The ID of the AWS Verified Access group. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.applicationDomain">ApplicationDomain</a></code> | <code>*string</code> | The DNS name for users to reach your application. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.cidrOptions">CidrOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions">Ec2VerifiedAccessEndpointCidrOptions</a></code> | The options for cidr type endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.description">Description</a></code> | <code>*string</code> | A description for the AWS Verified Access endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.domainCertificateArn">DomainCertificateArn</a></code> | <code>*string</code> | The ARN of a public TLS/SSL certificate imported into or created with ACM. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.endpointDomainPrefix">EndpointDomainPrefix</a></code> | <code>*string</code> | A custom identifier that gets prepended to a DNS name that is generated for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.loadBalancerOptions">LoadBalancerOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions">Ec2VerifiedAccessEndpointLoadBalancerOptions</a></code> | The load balancer details if creating the AWS Verified Access endpoint as load-balancer type. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.networkInterfaceOptions">NetworkInterfaceOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions">Ec2VerifiedAccessEndpointNetworkInterfaceOptions</a></code> | The options for network-interface type endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.policyDocument">PolicyDocument</a></code> | <code>*string</code> | The AWS Verified Access policy document. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.policyEnabled">PolicyEnabled</a></code> | <code>interface{}</code> | The status of the Verified Access policy. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.rdsOptions">RdsOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions">Ec2VerifiedAccessEndpointRdsOptions</a></code> | The options for rds type endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | The IDs of the security groups for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.sseSpecification">SseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification">Ec2VerifiedAccessEndpointSseSpecification</a></code> | The configuration options for customer provided KMS encryption. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.attachmentType"></a>

```go
AttachmentType *string
```

- *Type:* *string

The type of attachment used to provide connectivity between the AWS Verified Access endpoint and the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#attachment_type Ec2VerifiedAccessEndpoint#attachment_type}

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.endpointType"></a>

```go
EndpointType *string
```

- *Type:* *string

The type of AWS Verified Access endpoint.

Incoming application requests will be sent to an IP address, load balancer or a network interface depending on the endpoint type specified.The type of AWS Verified Access endpoint. Incoming application requests will be sent to an IP address, load balancer or a network interface depending on the endpoint type specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#endpoint_type Ec2VerifiedAccessEndpoint#endpoint_type}

---

##### `VerifiedAccessGroupId`<sup>Required</sup> <a name="VerifiedAccessGroupId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.verifiedAccessGroupId"></a>

```go
VerifiedAccessGroupId *string
```

- *Type:* *string

The ID of the AWS Verified Access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#verified_access_group_id Ec2VerifiedAccessEndpoint#verified_access_group_id}

---

##### `ApplicationDomain`<sup>Optional</sup> <a name="ApplicationDomain" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.applicationDomain"></a>

```go
ApplicationDomain *string
```

- *Type:* *string

The DNS name for users to reach your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#application_domain Ec2VerifiedAccessEndpoint#application_domain}

---

##### `CidrOptions`<sup>Optional</sup> <a name="CidrOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.cidrOptions"></a>

```go
CidrOptions Ec2VerifiedAccessEndpointCidrOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions">Ec2VerifiedAccessEndpointCidrOptions</a>

The options for cidr type endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#cidr_options Ec2VerifiedAccessEndpoint#cidr_options}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description for the AWS Verified Access endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#description Ec2VerifiedAccessEndpoint#description}

---

##### `DomainCertificateArn`<sup>Optional</sup> <a name="DomainCertificateArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.domainCertificateArn"></a>

```go
DomainCertificateArn *string
```

- *Type:* *string

The ARN of a public TLS/SSL certificate imported into or created with ACM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#domain_certificate_arn Ec2VerifiedAccessEndpoint#domain_certificate_arn}

---

##### `EndpointDomainPrefix`<sup>Optional</sup> <a name="EndpointDomainPrefix" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.endpointDomainPrefix"></a>

```go
EndpointDomainPrefix *string
```

- *Type:* *string

A custom identifier that gets prepended to a DNS name that is generated for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#endpoint_domain_prefix Ec2VerifiedAccessEndpoint#endpoint_domain_prefix}

---

##### `LoadBalancerOptions`<sup>Optional</sup> <a name="LoadBalancerOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.loadBalancerOptions"></a>

```go
LoadBalancerOptions Ec2VerifiedAccessEndpointLoadBalancerOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions">Ec2VerifiedAccessEndpointLoadBalancerOptions</a>

The load balancer details if creating the AWS Verified Access endpoint as load-balancer type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#load_balancer_options Ec2VerifiedAccessEndpoint#load_balancer_options}

---

##### `NetworkInterfaceOptions`<sup>Optional</sup> <a name="NetworkInterfaceOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.networkInterfaceOptions"></a>

```go
NetworkInterfaceOptions Ec2VerifiedAccessEndpointNetworkInterfaceOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions">Ec2VerifiedAccessEndpointNetworkInterfaceOptions</a>

The options for network-interface type endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#network_interface_options Ec2VerifiedAccessEndpoint#network_interface_options}

---

##### `PolicyDocument`<sup>Optional</sup> <a name="PolicyDocument" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.policyDocument"></a>

```go
PolicyDocument *string
```

- *Type:* *string

The AWS Verified Access policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#policy_document Ec2VerifiedAccessEndpoint#policy_document}

---

##### `PolicyEnabled`<sup>Optional</sup> <a name="PolicyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.policyEnabled"></a>

```go
PolicyEnabled interface{}
```

- *Type:* interface{}

The status of the Verified Access policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#policy_enabled Ec2VerifiedAccessEndpoint#policy_enabled}

---

##### `RdsOptions`<sup>Optional</sup> <a name="RdsOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.rdsOptions"></a>

```go
RdsOptions Ec2VerifiedAccessEndpointRdsOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions">Ec2VerifiedAccessEndpointRdsOptions</a>

The options for rds type endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#rds_options Ec2VerifiedAccessEndpoint#rds_options}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

The IDs of the security groups for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#security_group_ids Ec2VerifiedAccessEndpoint#security_group_ids}

---

##### `SseSpecification`<sup>Optional</sup> <a name="SseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.sseSpecification"></a>

```go
SseSpecification Ec2VerifiedAccessEndpointSseSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification">Ec2VerifiedAccessEndpointSseSpecification</a>

The configuration options for customer provided KMS encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#sse_specification Ec2VerifiedAccessEndpoint#sse_specification}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#tags Ec2VerifiedAccessEndpoint#tags}

---

### Ec2VerifiedAccessEndpointLoadBalancerOptions <a name="Ec2VerifiedAccessEndpointLoadBalancerOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccessendpoint"

&ec2verifiedaccessendpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions {
	LoadBalancerArn: *string,
	Port: *f64,
	PortRanges: interface{},
	Protocol: *string,
	SubnetIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.loadBalancerArn">LoadBalancerArn</a></code> | <code>*string</code> | The ARN of the load balancer. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.port">Port</a></code> | <code>*f64</code> | The IP port number. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.portRanges">PortRanges</a></code> | <code>interface{}</code> | The list of port range. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.protocol">Protocol</a></code> | <code>*string</code> | The IP protocol. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | The IDs of the subnets. |

---

##### `LoadBalancerArn`<sup>Optional</sup> <a name="LoadBalancerArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.loadBalancerArn"></a>

```go
LoadBalancerArn *string
```

- *Type:* *string

The ARN of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#load_balancer_arn Ec2VerifiedAccessEndpoint#load_balancer_arn}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The IP port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#port Ec2VerifiedAccessEndpoint#port}

---

##### `PortRanges`<sup>Optional</sup> <a name="PortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.portRanges"></a>

```go
PortRanges interface{}
```

- *Type:* interface{}

The list of port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#port_ranges Ec2VerifiedAccessEndpoint#port_ranges}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

The IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#protocol Ec2VerifiedAccessEndpoint#protocol}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

The IDs of the subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#subnet_ids Ec2VerifiedAccessEndpoint#subnet_ids}

---

### Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges <a name="Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccessendpoint"

&ec2verifiedaccessendpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges {
	FromPort: *f64,
	ToPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges.property.fromPort">FromPort</a></code> | <code>*f64</code> | The first port in the range. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges.property.toPort">ToPort</a></code> | <code>*f64</code> | The last port in the range. |

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges.property.fromPort"></a>

```go
FromPort *f64
```

- *Type:* *f64

The first port in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#from_port Ec2VerifiedAccessEndpoint#from_port}

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges.property.toPort"></a>

```go
ToPort *f64
```

- *Type:* *f64

The last port in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#to_port Ec2VerifiedAccessEndpoint#to_port}

---

### Ec2VerifiedAccessEndpointNetworkInterfaceOptions <a name="Ec2VerifiedAccessEndpointNetworkInterfaceOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccessendpoint"

&ec2verifiedaccessendpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions {
	NetworkInterfaceId: *string,
	Port: *f64,
	PortRanges: interface{},
	Protocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | The ID of the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.port">Port</a></code> | <code>*f64</code> | The IP port number. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.portRanges">PortRanges</a></code> | <code>interface{}</code> | The list of port ranges. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.protocol">Protocol</a></code> | <code>*string</code> | The IP protocol. |

---

##### `NetworkInterfaceId`<sup>Optional</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.networkInterfaceId"></a>

```go
NetworkInterfaceId *string
```

- *Type:* *string

The ID of the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#network_interface_id Ec2VerifiedAccessEndpoint#network_interface_id}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The IP port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#port Ec2VerifiedAccessEndpoint#port}

---

##### `PortRanges`<sup>Optional</sup> <a name="PortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.portRanges"></a>

```go
PortRanges interface{}
```

- *Type:* interface{}

The list of port ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#port_ranges Ec2VerifiedAccessEndpoint#port_ranges}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

The IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#protocol Ec2VerifiedAccessEndpoint#protocol}

---

### Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges <a name="Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccessendpoint"

&ec2verifiedaccessendpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges {
	FromPort: *f64,
	ToPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges.property.fromPort">FromPort</a></code> | <code>*f64</code> | The first port in the range. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges.property.toPort">ToPort</a></code> | <code>*f64</code> | The last port in the range. |

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges.property.fromPort"></a>

```go
FromPort *f64
```

- *Type:* *f64

The first port in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#from_port Ec2VerifiedAccessEndpoint#from_port}

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges.property.toPort"></a>

```go
ToPort *f64
```

- *Type:* *f64

The last port in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#to_port Ec2VerifiedAccessEndpoint#to_port}

---

### Ec2VerifiedAccessEndpointRdsOptions <a name="Ec2VerifiedAccessEndpointRdsOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccessendpoint"

&ec2verifiedaccessendpoint.Ec2VerifiedAccessEndpointRdsOptions {
	Port: *f64,
	Protocol: *string,
	RdsDbClusterArn: *string,
	RdsDbInstanceArn: *string,
	RdsDbProxyArn: *string,
	RdsEndpoint: *string,
	SubnetIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.port">Port</a></code> | <code>*f64</code> | The IP port number. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.protocol">Protocol</a></code> | <code>*string</code> | The IP protocol. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsDbClusterArn">RdsDbClusterArn</a></code> | <code>*string</code> | The ARN of the RDS DB cluster. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsDbInstanceArn">RdsDbInstanceArn</a></code> | <code>*string</code> | The ARN of the RDS DB instance. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsDbProxyArn">RdsDbProxyArn</a></code> | <code>*string</code> | The ARN of the RDS DB proxy. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsEndpoint">RdsEndpoint</a></code> | <code>*string</code> | The RDS endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | The IDs of the subnets. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The IP port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#port Ec2VerifiedAccessEndpoint#port}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

The IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#protocol Ec2VerifiedAccessEndpoint#protocol}

---

##### `RdsDbClusterArn`<sup>Optional</sup> <a name="RdsDbClusterArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsDbClusterArn"></a>

```go
RdsDbClusterArn *string
```

- *Type:* *string

The ARN of the RDS DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#rds_db_cluster_arn Ec2VerifiedAccessEndpoint#rds_db_cluster_arn}

---

##### `RdsDbInstanceArn`<sup>Optional</sup> <a name="RdsDbInstanceArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsDbInstanceArn"></a>

```go
RdsDbInstanceArn *string
```

- *Type:* *string

The ARN of the RDS DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#rds_db_instance_arn Ec2VerifiedAccessEndpoint#rds_db_instance_arn}

---

##### `RdsDbProxyArn`<sup>Optional</sup> <a name="RdsDbProxyArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsDbProxyArn"></a>

```go
RdsDbProxyArn *string
```

- *Type:* *string

The ARN of the RDS DB proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#rds_db_proxy_arn Ec2VerifiedAccessEndpoint#rds_db_proxy_arn}

---

##### `RdsEndpoint`<sup>Optional</sup> <a name="RdsEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsEndpoint"></a>

```go
RdsEndpoint *string
```

- *Type:* *string

The RDS endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#rds_endpoint Ec2VerifiedAccessEndpoint#rds_endpoint}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

The IDs of the subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#subnet_ids Ec2VerifiedAccessEndpoint#subnet_ids}

---

### Ec2VerifiedAccessEndpointSseSpecification <a name="Ec2VerifiedAccessEndpointSseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccessendpoint"

&ec2verifiedaccessendpoint.Ec2VerifiedAccessEndpointSseSpecification {
	CustomerManagedKeyEnabled: interface{},
	KmsKeyArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification.property.customerManagedKeyEnabled">CustomerManagedKeyEnabled</a></code> | <code>interface{}</code> | Whether to encrypt the policy with the provided key or disable encryption. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | KMS Key Arn used to encrypt the group policy. |

---

##### `CustomerManagedKeyEnabled`<sup>Optional</sup> <a name="CustomerManagedKeyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification.property.customerManagedKeyEnabled"></a>

```go
CustomerManagedKeyEnabled interface{}
```

- *Type:* interface{}

Whether to encrypt the policy with the provided key or disable encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#customer_managed_key_enabled Ec2VerifiedAccessEndpoint#customer_managed_key_enabled}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

KMS Key Arn used to encrypt the group policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#kms_key_arn Ec2VerifiedAccessEndpoint#kms_key_arn}

---

### Ec2VerifiedAccessEndpointTags <a name="Ec2VerifiedAccessEndpointTags" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccessendpoint"

&ec2verifiedaccessendpoint.Ec2VerifiedAccessEndpointTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#key Ec2VerifiedAccessEndpoint#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#value Ec2VerifiedAccessEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VerifiedAccessEndpointCidrOptionsOutputReference <a name="Ec2VerifiedAccessEndpointCidrOptionsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccessendpoint"

ec2verifiedaccessendpoint.NewEc2VerifiedAccessEndpointCidrOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2VerifiedAccessEndpointCidrOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.putPortRanges">PutPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetCidr">ResetCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetPortRanges">ResetPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPortRanges` <a name="PutPortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.putPortRanges"></a>

```go
func PutPortRanges(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.putPortRanges.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCidr` <a name="ResetCidr" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetCidr"></a>

```go
func ResetCidr()
```

##### `ResetPortRanges` <a name="ResetPortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetPortRanges"></a>

```go
func ResetPortRanges()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetSubnetIds"></a>

```go
func ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.portRanges">PortRanges</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList">Ec2VerifiedAccessEndpointCidrOptionsPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.cidrInput">CidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.portRangesInput">PortRangesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.cidr">Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.portRanges"></a>

```go
func PortRanges() Ec2VerifiedAccessEndpointCidrOptionsPortRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList">Ec2VerifiedAccessEndpointCidrOptionsPortRangesList</a>

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.cidrInput"></a>

```go
func CidrInput() *string
```

- *Type:* *string

---

##### `PortRangesInput`<sup>Optional</sup> <a name="PortRangesInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.portRangesInput"></a>

```go
func PortRangesInput() interface{}
```

- *Type:* interface{}

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.cidr"></a>

```go
func Cidr() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VerifiedAccessEndpointCidrOptionsPortRangesList <a name="Ec2VerifiedAccessEndpointCidrOptionsPortRangesList" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccessendpoint"

ec2verifiedaccessendpoint.NewEc2VerifiedAccessEndpointCidrOptionsPortRangesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2VerifiedAccessEndpointCidrOptionsPortRangesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.get"></a>

```go
func Get(index *f64) Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference <a name="Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccessendpoint"

ec2verifiedaccessendpoint.NewEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resetFromPort"></a>

```go
func ResetFromPort()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resetToPort"></a>

```go
func ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.toPortInput">ToPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fromPortInput"></a>

```go
func FromPortInput() *f64
```

- *Type:* *f64

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.toPortInput"></a>

```go
func ToPortInput() *f64
```

- *Type:* *f64

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference <a name="Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccessendpoint"

ec2verifiedaccessendpoint.NewEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.putPortRanges">PutPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetLoadBalancerArn">ResetLoadBalancerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetPortRanges">ResetPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPortRanges` <a name="PutPortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.putPortRanges"></a>

```go
func PutPortRanges(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.putPortRanges.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetLoadBalancerArn` <a name="ResetLoadBalancerArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetLoadBalancerArn"></a>

```go
func ResetLoadBalancerArn()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPortRanges` <a name="ResetPortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetPortRanges"></a>

```go
func ResetPortRanges()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetSubnetIds"></a>

```go
func ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portRanges">PortRanges</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArnInput">LoadBalancerArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portRangesInput">PortRangesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArn">LoadBalancerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portRanges"></a>

```go
func PortRanges() Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList</a>

---

##### `LoadBalancerArnInput`<sup>Optional</sup> <a name="LoadBalancerArnInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArnInput"></a>

```go
func LoadBalancerArnInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PortRangesInput`<sup>Optional</sup> <a name="PortRangesInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portRangesInput"></a>

```go
func PortRangesInput() interface{}
```

- *Type:* interface{}

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LoadBalancerArn`<sup>Required</sup> <a name="LoadBalancerArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArn"></a>

```go
func LoadBalancerArn() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList <a name="Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccessendpoint"

ec2verifiedaccessendpoint.NewEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.get"></a>

```go
func Get(index *f64) Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference <a name="Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccessendpoint"

ec2verifiedaccessendpoint.NewEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resetFromPort"></a>

```go
func ResetFromPort()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resetToPort"></a>

```go
func ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.toPortInput">ToPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fromPortInput"></a>

```go
func FromPortInput() *f64
```

- *Type:* *f64

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.toPortInput"></a>

```go
func ToPortInput() *f64
```

- *Type:* *f64

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference <a name="Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccessendpoint"

ec2verifiedaccessendpoint.NewEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.putPortRanges">PutPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetNetworkInterfaceId">ResetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetPortRanges">ResetPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPortRanges` <a name="PutPortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.putPortRanges"></a>

```go
func PutPortRanges(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.putPortRanges.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetNetworkInterfaceId` <a name="ResetNetworkInterfaceId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetNetworkInterfaceId"></a>

```go
func ResetNetworkInterfaceId()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPortRanges` <a name="ResetPortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetPortRanges"></a>

```go
func ResetPortRanges()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portRanges">PortRanges</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceIdInput">NetworkInterfaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portRangesInput">PortRangesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portRanges"></a>

```go
func PortRanges() Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList</a>

---

##### `NetworkInterfaceIdInput`<sup>Optional</sup> <a name="NetworkInterfaceIdInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceIdInput"></a>

```go
func NetworkInterfaceIdInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PortRangesInput`<sup>Optional</sup> <a name="PortRangesInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portRangesInput"></a>

```go
func PortRangesInput() interface{}
```

- *Type:* interface{}

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceId"></a>

```go
func NetworkInterfaceId() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList <a name="Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccessendpoint"

ec2verifiedaccessendpoint.NewEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.get"></a>

```go
func Get(index *f64) Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference <a name="Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccessendpoint"

ec2verifiedaccessendpoint.NewEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resetFromPort"></a>

```go
func ResetFromPort()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resetToPort"></a>

```go
func ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.toPortInput">ToPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fromPortInput"></a>

```go
func FromPortInput() *f64
```

- *Type:* *f64

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.toPortInput"></a>

```go
func ToPortInput() *f64
```

- *Type:* *f64

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VerifiedAccessEndpointRdsOptionsOutputReference <a name="Ec2VerifiedAccessEndpointRdsOptionsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccessendpoint"

ec2verifiedaccessendpoint.NewEc2VerifiedAccessEndpointRdsOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2VerifiedAccessEndpointRdsOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsDbClusterArn">ResetRdsDbClusterArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsDbInstanceArn">ResetRdsDbInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsDbProxyArn">ResetRdsDbProxyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsEndpoint">ResetRdsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetRdsDbClusterArn` <a name="ResetRdsDbClusterArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsDbClusterArn"></a>

```go
func ResetRdsDbClusterArn()
```

##### `ResetRdsDbInstanceArn` <a name="ResetRdsDbInstanceArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsDbInstanceArn"></a>

```go
func ResetRdsDbInstanceArn()
```

##### `ResetRdsDbProxyArn` <a name="ResetRdsDbProxyArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsDbProxyArn"></a>

```go
func ResetRdsDbProxyArn()
```

##### `ResetRdsEndpoint` <a name="ResetRdsEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsEndpoint"></a>

```go
func ResetRdsEndpoint()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetSubnetIds"></a>

```go
func ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArnInput">RdsDbClusterArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArnInput">RdsDbInstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArnInput">RdsDbProxyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsEndpointInput">RdsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArn">RdsDbClusterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArn">RdsDbInstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArn">RdsDbProxyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsEndpoint">RdsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `RdsDbClusterArnInput`<sup>Optional</sup> <a name="RdsDbClusterArnInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArnInput"></a>

```go
func RdsDbClusterArnInput() *string
```

- *Type:* *string

---

##### `RdsDbInstanceArnInput`<sup>Optional</sup> <a name="RdsDbInstanceArnInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArnInput"></a>

```go
func RdsDbInstanceArnInput() *string
```

- *Type:* *string

---

##### `RdsDbProxyArnInput`<sup>Optional</sup> <a name="RdsDbProxyArnInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArnInput"></a>

```go
func RdsDbProxyArnInput() *string
```

- *Type:* *string

---

##### `RdsEndpointInput`<sup>Optional</sup> <a name="RdsEndpointInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsEndpointInput"></a>

```go
func RdsEndpointInput() *string
```

- *Type:* *string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `RdsDbClusterArn`<sup>Required</sup> <a name="RdsDbClusterArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArn"></a>

```go
func RdsDbClusterArn() *string
```

- *Type:* *string

---

##### `RdsDbInstanceArn`<sup>Required</sup> <a name="RdsDbInstanceArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArn"></a>

```go
func RdsDbInstanceArn() *string
```

- *Type:* *string

---

##### `RdsDbProxyArn`<sup>Required</sup> <a name="RdsDbProxyArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArn"></a>

```go
func RdsDbProxyArn() *string
```

- *Type:* *string

---

##### `RdsEndpoint`<sup>Required</sup> <a name="RdsEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsEndpoint"></a>

```go
func RdsEndpoint() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VerifiedAccessEndpointSseSpecificationOutputReference <a name="Ec2VerifiedAccessEndpointSseSpecificationOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccessendpoint"

ec2verifiedaccessendpoint.NewEc2VerifiedAccessEndpointSseSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2VerifiedAccessEndpointSseSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.resetCustomerManagedKeyEnabled">ResetCustomerManagedKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomerManagedKeyEnabled` <a name="ResetCustomerManagedKeyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.resetCustomerManagedKeyEnabled"></a>

```go
func ResetCustomerManagedKeyEnabled()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabledInput">CustomerManagedKeyEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabled">CustomerManagedKeyEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerManagedKeyEnabledInput`<sup>Optional</sup> <a name="CustomerManagedKeyEnabledInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabledInput"></a>

```go
func CustomerManagedKeyEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `CustomerManagedKeyEnabled`<sup>Required</sup> <a name="CustomerManagedKeyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabled"></a>

```go
func CustomerManagedKeyEnabled() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VerifiedAccessEndpointTagsList <a name="Ec2VerifiedAccessEndpointTagsList" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccessendpoint"

ec2verifiedaccessendpoint.NewEc2VerifiedAccessEndpointTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2VerifiedAccessEndpointTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.get"></a>

```go
func Get(index *f64) Ec2VerifiedAccessEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VerifiedAccessEndpointTagsOutputReference <a name="Ec2VerifiedAccessEndpointTagsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccessendpoint"

ec2verifiedaccessendpoint.NewEc2VerifiedAccessEndpointTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2VerifiedAccessEndpointTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



