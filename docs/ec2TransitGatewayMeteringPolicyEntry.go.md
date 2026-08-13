# `ec2TransitGatewayMeteringPolicyEntry` Submodule <a name="`ec2TransitGatewayMeteringPolicyEntry` Submodule" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayMeteringPolicyEntry <a name="Ec2TransitGatewayMeteringPolicyEntry" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_metering_policy_entry awscc_ec2_transit_gateway_metering_policy_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2transitgatewaymeteringpolicyentry"

ec2transitgatewaymeteringpolicyentry.NewEc2TransitGatewayMeteringPolicyEntry(scope Construct, id *string, config Ec2TransitGatewayMeteringPolicyEntryConfig) Ec2TransitGatewayMeteringPolicyEntry
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig">Ec2TransitGatewayMeteringPolicyEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig">Ec2TransitGatewayMeteringPolicyEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationCidrBlock">ResetDestinationCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationPortRange">ResetDestinationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationTransitGatewayAttachmentId">ResetDestinationTransitGatewayAttachmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationTransitGatewayAttachmentType">ResetDestinationTransitGatewayAttachmentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourceCidrBlock">ResetSourceCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourcePortRange">ResetSourcePortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourceTransitGatewayAttachmentId">ResetSourceTransitGatewayAttachmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourceTransitGatewayAttachmentType">ResetSourceTransitGatewayAttachmentType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDestinationCidrBlock` <a name="ResetDestinationCidrBlock" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationCidrBlock"></a>

```go
func ResetDestinationCidrBlock()
```

##### `ResetDestinationPortRange` <a name="ResetDestinationPortRange" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationPortRange"></a>

```go
func ResetDestinationPortRange()
```

##### `ResetDestinationTransitGatewayAttachmentId` <a name="ResetDestinationTransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationTransitGatewayAttachmentId"></a>

```go
func ResetDestinationTransitGatewayAttachmentId()
```

##### `ResetDestinationTransitGatewayAttachmentType` <a name="ResetDestinationTransitGatewayAttachmentType" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationTransitGatewayAttachmentType"></a>

```go
func ResetDestinationTransitGatewayAttachmentType()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetSourceCidrBlock` <a name="ResetSourceCidrBlock" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourceCidrBlock"></a>

```go
func ResetSourceCidrBlock()
```

##### `ResetSourcePortRange` <a name="ResetSourcePortRange" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourcePortRange"></a>

```go
func ResetSourcePortRange()
```

##### `ResetSourceTransitGatewayAttachmentId` <a name="ResetSourceTransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourceTransitGatewayAttachmentId"></a>

```go
func ResetSourceTransitGatewayAttachmentId()
```

##### `ResetSourceTransitGatewayAttachmentType` <a name="ResetSourceTransitGatewayAttachmentType" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourceTransitGatewayAttachmentType"></a>

```go
func ResetSourceTransitGatewayAttachmentType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TransitGatewayMeteringPolicyEntry resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2transitgatewaymeteringpolicyentry"

ec2transitgatewaymeteringpolicyentry.Ec2TransitGatewayMeteringPolicyEntry_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2transitgatewaymeteringpolicyentry"

ec2transitgatewaymeteringpolicyentry.Ec2TransitGatewayMeteringPolicyEntry_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2transitgatewaymeteringpolicyentry"

ec2transitgatewaymeteringpolicyentry.Ec2TransitGatewayMeteringPolicyEntry_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2transitgatewaymeteringpolicyentry"

ec2transitgatewaymeteringpolicyentry.Ec2TransitGatewayMeteringPolicyEntry_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2TransitGatewayMeteringPolicyEntry resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2TransitGatewayMeteringPolicyEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2TransitGatewayMeteringPolicyEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_metering_policy_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayMeteringPolicyEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.updateEffectiveAt">UpdateEffectiveAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationCidrBlockInput">DestinationCidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationPortRangeInput">DestinationPortRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentIdInput">DestinationTransitGatewayAttachmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentTypeInput">DestinationTransitGatewayAttachmentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.meteredAccountInput">MeteredAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.policyRuleNumberInput">PolicyRuleNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceCidrBlockInput">SourceCidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourcePortRangeInput">SourcePortRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentIdInput">SourceTransitGatewayAttachmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentTypeInput">SourceTransitGatewayAttachmentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.transitGatewayMeteringPolicyIdInput">TransitGatewayMeteringPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationCidrBlock">DestinationCidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationPortRange">DestinationPortRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentId">DestinationTransitGatewayAttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentType">DestinationTransitGatewayAttachmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.meteredAccount">MeteredAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.policyRuleNumber">PolicyRuleNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceCidrBlock">SourceCidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourcePortRange">SourcePortRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentId">SourceTransitGatewayAttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentType">SourceTransitGatewayAttachmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.transitGatewayMeteringPolicyId">TransitGatewayMeteringPolicyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `UpdateEffectiveAt`<sup>Required</sup> <a name="UpdateEffectiveAt" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.updateEffectiveAt"></a>

```go
func UpdateEffectiveAt() *string
```

- *Type:* *string

---

##### `DestinationCidrBlockInput`<sup>Optional</sup> <a name="DestinationCidrBlockInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationCidrBlockInput"></a>

```go
func DestinationCidrBlockInput() *string
```

- *Type:* *string

---

##### `DestinationPortRangeInput`<sup>Optional</sup> <a name="DestinationPortRangeInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationPortRangeInput"></a>

```go
func DestinationPortRangeInput() *string
```

- *Type:* *string

---

##### `DestinationTransitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="DestinationTransitGatewayAttachmentIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentIdInput"></a>

```go
func DestinationTransitGatewayAttachmentIdInput() *string
```

- *Type:* *string

---

##### `DestinationTransitGatewayAttachmentTypeInput`<sup>Optional</sup> <a name="DestinationTransitGatewayAttachmentTypeInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentTypeInput"></a>

```go
func DestinationTransitGatewayAttachmentTypeInput() *string
```

- *Type:* *string

---

##### `MeteredAccountInput`<sup>Optional</sup> <a name="MeteredAccountInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.meteredAccountInput"></a>

```go
func MeteredAccountInput() *string
```

- *Type:* *string

---

##### `PolicyRuleNumberInput`<sup>Optional</sup> <a name="PolicyRuleNumberInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.policyRuleNumberInput"></a>

```go
func PolicyRuleNumberInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `SourceCidrBlockInput`<sup>Optional</sup> <a name="SourceCidrBlockInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceCidrBlockInput"></a>

```go
func SourceCidrBlockInput() *string
```

- *Type:* *string

---

##### `SourcePortRangeInput`<sup>Optional</sup> <a name="SourcePortRangeInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourcePortRangeInput"></a>

```go
func SourcePortRangeInput() *string
```

- *Type:* *string

---

##### `SourceTransitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="SourceTransitGatewayAttachmentIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentIdInput"></a>

```go
func SourceTransitGatewayAttachmentIdInput() *string
```

- *Type:* *string

---

##### `SourceTransitGatewayAttachmentTypeInput`<sup>Optional</sup> <a name="SourceTransitGatewayAttachmentTypeInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentTypeInput"></a>

```go
func SourceTransitGatewayAttachmentTypeInput() *string
```

- *Type:* *string

---

##### `TransitGatewayMeteringPolicyIdInput`<sup>Optional</sup> <a name="TransitGatewayMeteringPolicyIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.transitGatewayMeteringPolicyIdInput"></a>

```go
func TransitGatewayMeteringPolicyIdInput() *string
```

- *Type:* *string

---

##### `DestinationCidrBlock`<sup>Required</sup> <a name="DestinationCidrBlock" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationCidrBlock"></a>

```go
func DestinationCidrBlock() *string
```

- *Type:* *string

---

##### `DestinationPortRange`<sup>Required</sup> <a name="DestinationPortRange" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationPortRange"></a>

```go
func DestinationPortRange() *string
```

- *Type:* *string

---

##### `DestinationTransitGatewayAttachmentId`<sup>Required</sup> <a name="DestinationTransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentId"></a>

```go
func DestinationTransitGatewayAttachmentId() *string
```

- *Type:* *string

---

##### `DestinationTransitGatewayAttachmentType`<sup>Required</sup> <a name="DestinationTransitGatewayAttachmentType" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentType"></a>

```go
func DestinationTransitGatewayAttachmentType() *string
```

- *Type:* *string

---

##### `MeteredAccount`<sup>Required</sup> <a name="MeteredAccount" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.meteredAccount"></a>

```go
func MeteredAccount() *string
```

- *Type:* *string

---

##### `PolicyRuleNumber`<sup>Required</sup> <a name="PolicyRuleNumber" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.policyRuleNumber"></a>

```go
func PolicyRuleNumber() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SourceCidrBlock`<sup>Required</sup> <a name="SourceCidrBlock" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceCidrBlock"></a>

```go
func SourceCidrBlock() *string
```

- *Type:* *string

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourcePortRange"></a>

```go
func SourcePortRange() *string
```

- *Type:* *string

---

##### `SourceTransitGatewayAttachmentId`<sup>Required</sup> <a name="SourceTransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentId"></a>

```go
func SourceTransitGatewayAttachmentId() *string
```

- *Type:* *string

---

##### `SourceTransitGatewayAttachmentType`<sup>Required</sup> <a name="SourceTransitGatewayAttachmentType" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentType"></a>

```go
func SourceTransitGatewayAttachmentType() *string
```

- *Type:* *string

---

##### `TransitGatewayMeteringPolicyId`<sup>Required</sup> <a name="TransitGatewayMeteringPolicyId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.transitGatewayMeteringPolicyId"></a>

```go
func TransitGatewayMeteringPolicyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayMeteringPolicyEntryConfig <a name="Ec2TransitGatewayMeteringPolicyEntryConfig" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2transitgatewaymeteringpolicyentry"

&ec2transitgatewaymeteringpolicyentry.Ec2TransitGatewayMeteringPolicyEntryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	MeteredAccount: *string,
	PolicyRuleNumber: *f64,
	TransitGatewayMeteringPolicyId: *string,
	DestinationCidrBlock: *string,
	DestinationPortRange: *string,
	DestinationTransitGatewayAttachmentId: *string,
	DestinationTransitGatewayAttachmentType: *string,
	Protocol: *string,
	SourceCidrBlock: *string,
	SourcePortRange: *string,
	SourceTransitGatewayAttachmentId: *string,
	SourceTransitGatewayAttachmentType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.meteredAccount">MeteredAccount</a></code> | <code>*string</code> | The resource owner information responsible for paying default billable charges for the traffic flow. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.policyRuleNumber">PolicyRuleNumber</a></code> | <code>*f64</code> | The rule number of the metering policy entry. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.transitGatewayMeteringPolicyId">TransitGatewayMeteringPolicyId</a></code> | <code>*string</code> | The ID of the transit gateway metering policy for which the entry is being created. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationCidrBlock">DestinationCidrBlock</a></code> | <code>*string</code> | The list of IP addresses of the instances receiving traffic from the transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationPortRange">DestinationPortRange</a></code> | <code>*string</code> | The list of ports on destination instances receiving traffic from the transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationTransitGatewayAttachmentId">DestinationTransitGatewayAttachmentId</a></code> | <code>*string</code> | The ID of the source attachment through which traffic leaves a transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationTransitGatewayAttachmentType">DestinationTransitGatewayAttachmentType</a></code> | <code>*string</code> | The type of the attachment through which traffic leaves a transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.protocol">Protocol</a></code> | <code>*string</code> | The protocol of the traffic. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourceCidrBlock">SourceCidrBlock</a></code> | <code>*string</code> | The list of IP addresses of the instances sending traffic to the transit gateway for which the metering policy entry is applicable. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourcePortRange">SourcePortRange</a></code> | <code>*string</code> | The list of ports on source instances sending traffic to the transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourceTransitGatewayAttachmentId">SourceTransitGatewayAttachmentId</a></code> | <code>*string</code> | The ID of the source attachment through which traffic enters a transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourceTransitGatewayAttachmentType">SourceTransitGatewayAttachmentType</a></code> | <code>*string</code> | The type of the attachment through which traffic enters a  transit gateway. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MeteredAccount`<sup>Required</sup> <a name="MeteredAccount" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.meteredAccount"></a>

```go
MeteredAccount *string
```

- *Type:* *string

The resource owner information responsible for paying default billable charges for the traffic flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_metering_policy_entry#metered_account Ec2TransitGatewayMeteringPolicyEntry#metered_account}

---

##### `PolicyRuleNumber`<sup>Required</sup> <a name="PolicyRuleNumber" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.policyRuleNumber"></a>

```go
PolicyRuleNumber *f64
```

- *Type:* *f64

The rule number of the metering policy entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_metering_policy_entry#policy_rule_number Ec2TransitGatewayMeteringPolicyEntry#policy_rule_number}

---

##### `TransitGatewayMeteringPolicyId`<sup>Required</sup> <a name="TransitGatewayMeteringPolicyId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.transitGatewayMeteringPolicyId"></a>

```go
TransitGatewayMeteringPolicyId *string
```

- *Type:* *string

The ID of the transit gateway metering policy for which the entry is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_metering_policy_entry#transit_gateway_metering_policy_id Ec2TransitGatewayMeteringPolicyEntry#transit_gateway_metering_policy_id}

---

##### `DestinationCidrBlock`<sup>Optional</sup> <a name="DestinationCidrBlock" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationCidrBlock"></a>

```go
DestinationCidrBlock *string
```

- *Type:* *string

The list of IP addresses of the instances receiving traffic from the transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_cidr_block Ec2TransitGatewayMeteringPolicyEntry#destination_cidr_block}

---

##### `DestinationPortRange`<sup>Optional</sup> <a name="DestinationPortRange" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationPortRange"></a>

```go
DestinationPortRange *string
```

- *Type:* *string

The list of ports on destination instances receiving traffic from the transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_port_range Ec2TransitGatewayMeteringPolicyEntry#destination_port_range}

---

##### `DestinationTransitGatewayAttachmentId`<sup>Optional</sup> <a name="DestinationTransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationTransitGatewayAttachmentId"></a>

```go
DestinationTransitGatewayAttachmentId *string
```

- *Type:* *string

The ID of the source attachment through which traffic leaves a transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_transit_gateway_attachment_id Ec2TransitGatewayMeteringPolicyEntry#destination_transit_gateway_attachment_id}

---

##### `DestinationTransitGatewayAttachmentType`<sup>Optional</sup> <a name="DestinationTransitGatewayAttachmentType" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationTransitGatewayAttachmentType"></a>

```go
DestinationTransitGatewayAttachmentType *string
```

- *Type:* *string

The type of the attachment through which traffic leaves a transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_transit_gateway_attachment_type Ec2TransitGatewayMeteringPolicyEntry#destination_transit_gateway_attachment_type}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

The protocol of the traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_metering_policy_entry#protocol Ec2TransitGatewayMeteringPolicyEntry#protocol}

---

##### `SourceCidrBlock`<sup>Optional</sup> <a name="SourceCidrBlock" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourceCidrBlock"></a>

```go
SourceCidrBlock *string
```

- *Type:* *string

The list of IP addresses of the instances sending traffic to the transit gateway for which the metering policy entry is applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_cidr_block Ec2TransitGatewayMeteringPolicyEntry#source_cidr_block}

---

##### `SourcePortRange`<sup>Optional</sup> <a name="SourcePortRange" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourcePortRange"></a>

```go
SourcePortRange *string
```

- *Type:* *string

The list of ports on source instances sending traffic to the transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_port_range Ec2TransitGatewayMeteringPolicyEntry#source_port_range}

---

##### `SourceTransitGatewayAttachmentId`<sup>Optional</sup> <a name="SourceTransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourceTransitGatewayAttachmentId"></a>

```go
SourceTransitGatewayAttachmentId *string
```

- *Type:* *string

The ID of the source attachment through which traffic enters a transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_transit_gateway_attachment_id Ec2TransitGatewayMeteringPolicyEntry#source_transit_gateway_attachment_id}

---

##### `SourceTransitGatewayAttachmentType`<sup>Optional</sup> <a name="SourceTransitGatewayAttachmentType" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourceTransitGatewayAttachmentType"></a>

```go
SourceTransitGatewayAttachmentType *string
```

- *Type:* *string

The type of the attachment through which traffic enters a  transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_transit_gateway_attachment_type Ec2TransitGatewayMeteringPolicyEntry#source_transit_gateway_attachment_type}

---



