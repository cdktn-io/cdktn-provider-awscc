# `ec2TransitGatewayNetworkFunctionAttachment` Submodule <a name="`ec2TransitGatewayNetworkFunctionAttachment` Submodule" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayNetworkFunctionAttachment <a name="Ec2TransitGatewayNetworkFunctionAttachment" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment awscc_ec2_transit_gateway_network_function_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2transitgatewaynetworkfunctionattachment"

ec2transitgatewaynetworkfunctionattachment.NewEc2TransitGatewayNetworkFunctionAttachment(scope Construct, id *string, config Ec2TransitGatewayNetworkFunctionAttachmentConfig) Ec2TransitGatewayNetworkFunctionAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig">Ec2TransitGatewayNetworkFunctionAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig">Ec2TransitGatewayNetworkFunctionAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetAvailabilityZoneIds">ResetAvailabilityZoneIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetAvailabilityZones">ResetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAvailabilityZoneIds` <a name="ResetAvailabilityZoneIds" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetAvailabilityZoneIds"></a>

```go
func ResetAvailabilityZoneIds()
```

##### `ResetAvailabilityZones` <a name="ResetAvailabilityZones" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetAvailabilityZones"></a>

```go
func ResetAvailabilityZones()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetServiceName"></a>

```go
func ResetServiceName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TransitGatewayNetworkFunctionAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2transitgatewaynetworkfunctionattachment"

ec2transitgatewaynetworkfunctionattachment.Ec2TransitGatewayNetworkFunctionAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2transitgatewaynetworkfunctionattachment"

ec2transitgatewaynetworkfunctionattachment.Ec2TransitGatewayNetworkFunctionAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2transitgatewaynetworkfunctionattachment"

ec2transitgatewaynetworkfunctionattachment.Ec2TransitGatewayNetworkFunctionAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2transitgatewaynetworkfunctionattachment"

ec2transitgatewaynetworkfunctionattachment.Ec2TransitGatewayNetworkFunctionAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2TransitGatewayNetworkFunctionAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2TransitGatewayNetworkFunctionAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2TransitGatewayNetworkFunctionAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayNetworkFunctionAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList">Ec2TransitGatewayNetworkFunctionAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZoneIdsInput">AvailabilityZoneIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZonesInput">AvailabilityZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.transitGatewayIdInput">TransitGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZoneIds">AvailabilityZoneIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.transitGatewayId">TransitGatewayId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.tags"></a>

```go
func Tags() Ec2TransitGatewayNetworkFunctionAttachmentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList">Ec2TransitGatewayNetworkFunctionAttachmentTagsList</a>

---

##### `TransitGatewayAttachmentId`<sup>Required</sup> <a name="TransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.transitGatewayAttachmentId"></a>

```go
func TransitGatewayAttachmentId() *string
```

- *Type:* *string

---

##### `AvailabilityZoneIdsInput`<sup>Optional</sup> <a name="AvailabilityZoneIdsInput" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZoneIdsInput"></a>

```go
func AvailabilityZoneIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AvailabilityZonesInput`<sup>Optional</sup> <a name="AvailabilityZonesInput" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZonesInput"></a>

```go
func AvailabilityZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TransitGatewayIdInput`<sup>Optional</sup> <a name="TransitGatewayIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.transitGatewayIdInput"></a>

```go
func TransitGatewayIdInput() *string
```

- *Type:* *string

---

##### `AvailabilityZoneIds`<sup>Required</sup> <a name="AvailabilityZoneIds" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZoneIds"></a>

```go
func AvailabilityZoneIds() *[]*string
```

- *Type:* *[]*string

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZones"></a>

```go
func AvailabilityZones() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.transitGatewayId"></a>

```go
func TransitGatewayId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayNetworkFunctionAttachmentConfig <a name="Ec2TransitGatewayNetworkFunctionAttachmentConfig" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2transitgatewaynetworkfunctionattachment"

&ec2transitgatewaynetworkfunctionattachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	TransitGatewayId: *string,
	AvailabilityZoneIds: *[]*string,
	AvailabilityZones: *[]*string,
	ServiceName: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.transitGatewayId">TransitGatewayId</a></code> | <code>*string</code> | The ID of the transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.availabilityZoneIds">AvailabilityZoneIds</a></code> | <code>*[]*string</code> | The Availability Zone IDs for the attachment. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | The Availability Zones for the attachment. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.serviceName">ServiceName</a></code> | <code>*string</code> | The name of the network function service. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags for the attachment. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.transitGatewayId"></a>

```go
TransitGatewayId *string
```

- *Type:* *string

The ID of the transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#transit_gateway_id Ec2TransitGatewayNetworkFunctionAttachment#transit_gateway_id}

---

##### `AvailabilityZoneIds`<sup>Optional</sup> <a name="AvailabilityZoneIds" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.availabilityZoneIds"></a>

```go
AvailabilityZoneIds *[]*string
```

- *Type:* *[]*string

The Availability Zone IDs for the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#availability_zone_ids Ec2TransitGatewayNetworkFunctionAttachment#availability_zone_ids}

---

##### `AvailabilityZones`<sup>Optional</sup> <a name="AvailabilityZones" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.availabilityZones"></a>

```go
AvailabilityZones *[]*string
```

- *Type:* *[]*string

The Availability Zones for the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#availability_zones Ec2TransitGatewayNetworkFunctionAttachment#availability_zones}

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

The name of the network function service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#service_name Ec2TransitGatewayNetworkFunctionAttachment#service_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags for the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#tags Ec2TransitGatewayNetworkFunctionAttachment#tags}

---

### Ec2TransitGatewayNetworkFunctionAttachmentTags <a name="Ec2TransitGatewayNetworkFunctionAttachmentTags" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2transitgatewaynetworkfunctionattachment"

&ec2transitgatewaynetworkfunctionattachment.Ec2TransitGatewayNetworkFunctionAttachmentTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags.property.key">Key</a></code> | <code>*string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags.property.value">Value</a></code> | <code>*string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#key Ec2TransitGatewayNetworkFunctionAttachment#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#value Ec2TransitGatewayNetworkFunctionAttachment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayNetworkFunctionAttachmentTagsList <a name="Ec2TransitGatewayNetworkFunctionAttachmentTagsList" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2transitgatewaynetworkfunctionattachment"

ec2transitgatewaynetworkfunctionattachment.NewEc2TransitGatewayNetworkFunctionAttachmentTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2TransitGatewayNetworkFunctionAttachmentTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.get"></a>

```go
func Get(index *f64) Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference <a name="Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2transitgatewaynetworkfunctionattachment"

ec2transitgatewaynetworkfunctionattachment.NewEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



