# `ec2CapacityReservationFleet` Submodule <a name="`ec2CapacityReservationFleet` Submodule" id="@cdktn/provider-awscc.ec2CapacityReservationFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2CapacityReservationFleet <a name="Ec2CapacityReservationFleet" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet awscc_ec2_capacity_reservation_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2capacityreservationfleet"

ec2capacityreservationfleet.NewEc2CapacityReservationFleet(scope Construct, id *string, config Ec2CapacityReservationFleetConfig) Ec2CapacityReservationFleet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig">Ec2CapacityReservationFleetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig">Ec2CapacityReservationFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.putInstanceTypeSpecifications">PutInstanceTypeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.putTagSpecifications">PutTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetAllocationStrategy">ResetAllocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetEndDate">ResetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetInstanceMatchCriteria">ResetInstanceMatchCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetInstanceTypeSpecifications">ResetInstanceTypeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetNoRemoveEndDate">ResetNoRemoveEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetRemoveEndDate">ResetRemoveEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetTagSpecifications">ResetTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetTenancy">ResetTenancy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetTotalTargetCapacity">ResetTotalTargetCapacity</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInstanceTypeSpecifications` <a name="PutInstanceTypeSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.putInstanceTypeSpecifications"></a>

```go
func PutInstanceTypeSpecifications(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.putInstanceTypeSpecifications.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTagSpecifications` <a name="PutTagSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.putTagSpecifications"></a>

```go
func PutTagSpecifications(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.putTagSpecifications.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllocationStrategy` <a name="ResetAllocationStrategy" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetAllocationStrategy"></a>

```go
func ResetAllocationStrategy()
```

##### `ResetEndDate` <a name="ResetEndDate" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetEndDate"></a>

```go
func ResetEndDate()
```

##### `ResetInstanceMatchCriteria` <a name="ResetInstanceMatchCriteria" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetInstanceMatchCriteria"></a>

```go
func ResetInstanceMatchCriteria()
```

##### `ResetInstanceTypeSpecifications` <a name="ResetInstanceTypeSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetInstanceTypeSpecifications"></a>

```go
func ResetInstanceTypeSpecifications()
```

##### `ResetNoRemoveEndDate` <a name="ResetNoRemoveEndDate" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetNoRemoveEndDate"></a>

```go
func ResetNoRemoveEndDate()
```

##### `ResetRemoveEndDate` <a name="ResetRemoveEndDate" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetRemoveEndDate"></a>

```go
func ResetRemoveEndDate()
```

##### `ResetTagSpecifications` <a name="ResetTagSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetTagSpecifications"></a>

```go
func ResetTagSpecifications()
```

##### `ResetTenancy` <a name="ResetTenancy" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetTenancy"></a>

```go
func ResetTenancy()
```

##### `ResetTotalTargetCapacity` <a name="ResetTotalTargetCapacity" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetTotalTargetCapacity"></a>

```go
func ResetTotalTargetCapacity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2CapacityReservationFleet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2capacityreservationfleet"

ec2capacityreservationfleet.Ec2CapacityReservationFleet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2capacityreservationfleet"

ec2capacityreservationfleet.Ec2CapacityReservationFleet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2capacityreservationfleet"

ec2capacityreservationfleet.Ec2CapacityReservationFleet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2capacityreservationfleet"

ec2capacityreservationfleet.Ec2CapacityReservationFleet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2CapacityReservationFleet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2CapacityReservationFleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2CapacityReservationFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2CapacityReservationFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.capacityReservationFleetId">CapacityReservationFleetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceTypeSpecifications">InstanceTypeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList">Ec2CapacityReservationFleetInstanceTypeSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tagSpecifications">TagSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList">Ec2CapacityReservationFleetTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.allocationStrategyInput">AllocationStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.endDateInput">EndDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceMatchCriteriaInput">InstanceMatchCriteriaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceTypeSpecificationsInput">InstanceTypeSpecificationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.noRemoveEndDateInput">NoRemoveEndDateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.removeEndDateInput">RemoveEndDateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tagSpecificationsInput">TagSpecificationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tenancyInput">TenancyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.totalTargetCapacityInput">TotalTargetCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.endDate">EndDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceMatchCriteria">InstanceMatchCriteria</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.noRemoveEndDate">NoRemoveEndDate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.removeEndDate">RemoveEndDate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tenancy">Tenancy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.totalTargetCapacity">TotalTargetCapacity</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CapacityReservationFleetId`<sup>Required</sup> <a name="CapacityReservationFleetId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.capacityReservationFleetId"></a>

```go
func CapacityReservationFleetId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceTypeSpecifications`<sup>Required</sup> <a name="InstanceTypeSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceTypeSpecifications"></a>

```go
func InstanceTypeSpecifications() Ec2CapacityReservationFleetInstanceTypeSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList">Ec2CapacityReservationFleetInstanceTypeSpecificationsList</a>

---

##### `TagSpecifications`<sup>Required</sup> <a name="TagSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tagSpecifications"></a>

```go
func TagSpecifications() Ec2CapacityReservationFleetTagSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList">Ec2CapacityReservationFleetTagSpecificationsList</a>

---

##### `AllocationStrategyInput`<sup>Optional</sup> <a name="AllocationStrategyInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.allocationStrategyInput"></a>

```go
func AllocationStrategyInput() *string
```

- *Type:* *string

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.endDateInput"></a>

```go
func EndDateInput() *string
```

- *Type:* *string

---

##### `InstanceMatchCriteriaInput`<sup>Optional</sup> <a name="InstanceMatchCriteriaInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceMatchCriteriaInput"></a>

```go
func InstanceMatchCriteriaInput() *string
```

- *Type:* *string

---

##### `InstanceTypeSpecificationsInput`<sup>Optional</sup> <a name="InstanceTypeSpecificationsInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceTypeSpecificationsInput"></a>

```go
func InstanceTypeSpecificationsInput() interface{}
```

- *Type:* interface{}

---

##### `NoRemoveEndDateInput`<sup>Optional</sup> <a name="NoRemoveEndDateInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.noRemoveEndDateInput"></a>

```go
func NoRemoveEndDateInput() interface{}
```

- *Type:* interface{}

---

##### `RemoveEndDateInput`<sup>Optional</sup> <a name="RemoveEndDateInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.removeEndDateInput"></a>

```go
func RemoveEndDateInput() interface{}
```

- *Type:* interface{}

---

##### `TagSpecificationsInput`<sup>Optional</sup> <a name="TagSpecificationsInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tagSpecificationsInput"></a>

```go
func TagSpecificationsInput() interface{}
```

- *Type:* interface{}

---

##### `TenancyInput`<sup>Optional</sup> <a name="TenancyInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tenancyInput"></a>

```go
func TenancyInput() *string
```

- *Type:* *string

---

##### `TotalTargetCapacityInput`<sup>Optional</sup> <a name="TotalTargetCapacityInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.totalTargetCapacityInput"></a>

```go
func TotalTargetCapacityInput() *f64
```

- *Type:* *f64

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.allocationStrategy"></a>

```go
func AllocationStrategy() *string
```

- *Type:* *string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.endDate"></a>

```go
func EndDate() *string
```

- *Type:* *string

---

##### `InstanceMatchCriteria`<sup>Required</sup> <a name="InstanceMatchCriteria" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceMatchCriteria"></a>

```go
func InstanceMatchCriteria() *string
```

- *Type:* *string

---

##### `NoRemoveEndDate`<sup>Required</sup> <a name="NoRemoveEndDate" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.noRemoveEndDate"></a>

```go
func NoRemoveEndDate() interface{}
```

- *Type:* interface{}

---

##### `RemoveEndDate`<sup>Required</sup> <a name="RemoveEndDate" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.removeEndDate"></a>

```go
func RemoveEndDate() interface{}
```

- *Type:* interface{}

---

##### `Tenancy`<sup>Required</sup> <a name="Tenancy" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tenancy"></a>

```go
func Tenancy() *string
```

- *Type:* *string

---

##### `TotalTargetCapacity`<sup>Required</sup> <a name="TotalTargetCapacity" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.totalTargetCapacity"></a>

```go
func TotalTargetCapacity() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2CapacityReservationFleetConfig <a name="Ec2CapacityReservationFleetConfig" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2capacityreservationfleet"

&ec2capacityreservationfleet.Ec2CapacityReservationFleetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AllocationStrategy: *string,
	EndDate: *string,
	InstanceMatchCriteria: *string,
	InstanceTypeSpecifications: interface{},
	NoRemoveEndDate: interface{},
	RemoveEndDate: interface{},
	TagSpecifications: interface{},
	Tenancy: *string,
	TotalTargetCapacity: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#allocation_strategy Ec2CapacityReservationFleet#allocation_strategy}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.endDate">EndDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#end_date Ec2CapacityReservationFleet#end_date}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.instanceMatchCriteria">InstanceMatchCriteria</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#instance_match_criteria Ec2CapacityReservationFleet#instance_match_criteria}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.instanceTypeSpecifications">InstanceTypeSpecifications</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#instance_type_specifications Ec2CapacityReservationFleet#instance_type_specifications}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.noRemoveEndDate">NoRemoveEndDate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#no_remove_end_date Ec2CapacityReservationFleet#no_remove_end_date}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.removeEndDate">RemoveEndDate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#remove_end_date Ec2CapacityReservationFleet#remove_end_date}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.tagSpecifications">TagSpecifications</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#tag_specifications Ec2CapacityReservationFleet#tag_specifications}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.tenancy">Tenancy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#tenancy Ec2CapacityReservationFleet#tenancy}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.totalTargetCapacity">TotalTargetCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#total_target_capacity Ec2CapacityReservationFleet#total_target_capacity}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllocationStrategy`<sup>Optional</sup> <a name="AllocationStrategy" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.allocationStrategy"></a>

```go
AllocationStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#allocation_strategy Ec2CapacityReservationFleet#allocation_strategy}.

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.endDate"></a>

```go
EndDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#end_date Ec2CapacityReservationFleet#end_date}.

---

##### `InstanceMatchCriteria`<sup>Optional</sup> <a name="InstanceMatchCriteria" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.instanceMatchCriteria"></a>

```go
InstanceMatchCriteria *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#instance_match_criteria Ec2CapacityReservationFleet#instance_match_criteria}.

---

##### `InstanceTypeSpecifications`<sup>Optional</sup> <a name="InstanceTypeSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.instanceTypeSpecifications"></a>

```go
InstanceTypeSpecifications interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#instance_type_specifications Ec2CapacityReservationFleet#instance_type_specifications}.

---

##### `NoRemoveEndDate`<sup>Optional</sup> <a name="NoRemoveEndDate" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.noRemoveEndDate"></a>

```go
NoRemoveEndDate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#no_remove_end_date Ec2CapacityReservationFleet#no_remove_end_date}.

---

##### `RemoveEndDate`<sup>Optional</sup> <a name="RemoveEndDate" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.removeEndDate"></a>

```go
RemoveEndDate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#remove_end_date Ec2CapacityReservationFleet#remove_end_date}.

---

##### `TagSpecifications`<sup>Optional</sup> <a name="TagSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.tagSpecifications"></a>

```go
TagSpecifications interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#tag_specifications Ec2CapacityReservationFleet#tag_specifications}.

---

##### `Tenancy`<sup>Optional</sup> <a name="Tenancy" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.tenancy"></a>

```go
Tenancy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#tenancy Ec2CapacityReservationFleet#tenancy}.

---

##### `TotalTargetCapacity`<sup>Optional</sup> <a name="TotalTargetCapacity" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.totalTargetCapacity"></a>

```go
TotalTargetCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#total_target_capacity Ec2CapacityReservationFleet#total_target_capacity}.

---

### Ec2CapacityReservationFleetInstanceTypeSpecifications <a name="Ec2CapacityReservationFleetInstanceTypeSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2capacityreservationfleet"

&ec2capacityreservationfleet.Ec2CapacityReservationFleetInstanceTypeSpecifications {
	AvailabilityZone: *string,
	AvailabilityZoneId: *string,
	EbsOptimized: interface{},
	InstancePlatform: *string,
	InstanceType: *string,
	Priority: *f64,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#availability_zone Ec2CapacityReservationFleet#availability_zone}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#availability_zone_id Ec2CapacityReservationFleet#availability_zone_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.ebsOptimized">EbsOptimized</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#ebs_optimized Ec2CapacityReservationFleet#ebs_optimized}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.instancePlatform">InstancePlatform</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#instance_platform Ec2CapacityReservationFleet#instance_platform}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.instanceType">InstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#instance_type Ec2CapacityReservationFleet#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#priority Ec2CapacityReservationFleet#priority}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.weight">Weight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#weight Ec2CapacityReservationFleet#weight}. |

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#availability_zone Ec2CapacityReservationFleet#availability_zone}.

---

##### `AvailabilityZoneId`<sup>Optional</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.availabilityZoneId"></a>

```go
AvailabilityZoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#availability_zone_id Ec2CapacityReservationFleet#availability_zone_id}.

---

##### `EbsOptimized`<sup>Optional</sup> <a name="EbsOptimized" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.ebsOptimized"></a>

```go
EbsOptimized interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#ebs_optimized Ec2CapacityReservationFleet#ebs_optimized}.

---

##### `InstancePlatform`<sup>Optional</sup> <a name="InstancePlatform" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.instancePlatform"></a>

```go
InstancePlatform *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#instance_platform Ec2CapacityReservationFleet#instance_platform}.

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#instance_type Ec2CapacityReservationFleet#instance_type}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#priority Ec2CapacityReservationFleet#priority}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#weight Ec2CapacityReservationFleet#weight}.

---

### Ec2CapacityReservationFleetTagSpecifications <a name="Ec2CapacityReservationFleetTagSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2capacityreservationfleet"

&ec2capacityreservationfleet.Ec2CapacityReservationFleetTagSpecifications {
	ResourceType: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#resource_type Ec2CapacityReservationFleet#resource_type}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#tags Ec2CapacityReservationFleet#tags}. |

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#resource_type Ec2CapacityReservationFleet#resource_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#tags Ec2CapacityReservationFleet#tags}.

---

### Ec2CapacityReservationFleetTagSpecificationsTags <a name="Ec2CapacityReservationFleetTagSpecificationsTags" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2capacityreservationfleet"

&ec2capacityreservationfleet.Ec2CapacityReservationFleetTagSpecificationsTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#key Ec2CapacityReservationFleet#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#value Ec2CapacityReservationFleet#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#key Ec2CapacityReservationFleet#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_capacity_reservation_fleet#value Ec2CapacityReservationFleet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2CapacityReservationFleetInstanceTypeSpecificationsList <a name="Ec2CapacityReservationFleetInstanceTypeSpecificationsList" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2capacityreservationfleet"

ec2capacityreservationfleet.NewEc2CapacityReservationFleetInstanceTypeSpecificationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2CapacityReservationFleetInstanceTypeSpecificationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.get"></a>

```go
func Get(index *f64) Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference <a name="Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2capacityreservationfleet"

ec2capacityreservationfleet.NewEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetAvailabilityZoneId">ResetAvailabilityZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetEbsOptimized">ResetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetInstancePlatform">ResetInstancePlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetAvailabilityZoneId` <a name="ResetAvailabilityZoneId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetAvailabilityZoneId"></a>

```go
func ResetAvailabilityZoneId()
```

##### `ResetEbsOptimized` <a name="ResetEbsOptimized" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetEbsOptimized"></a>

```go
func ResetEbsOptimized()
```

##### `ResetInstancePlatform` <a name="ResetInstancePlatform" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetInstancePlatform"></a>

```go
func ResetInstancePlatform()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetInstanceType"></a>

```go
func ResetInstanceType()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZoneIdInput">AvailabilityZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.ebsOptimizedInput">EbsOptimizedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instancePlatformInput">InstancePlatformInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.ebsOptimized">EbsOptimized</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instancePlatform">InstancePlatform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZoneIdInput`<sup>Optional</sup> <a name="AvailabilityZoneIdInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZoneIdInput"></a>

```go
func AvailabilityZoneIdInput() *string
```

- *Type:* *string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `EbsOptimizedInput`<sup>Optional</sup> <a name="EbsOptimizedInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.ebsOptimizedInput"></a>

```go
func EbsOptimizedInput() interface{}
```

- *Type:* interface{}

---

##### `InstancePlatformInput`<sup>Optional</sup> <a name="InstancePlatformInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instancePlatformInput"></a>

```go
func InstancePlatformInput() *string
```

- *Type:* *string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZoneId"></a>

```go
func AvailabilityZoneId() *string
```

- *Type:* *string

---

##### `EbsOptimized`<sup>Required</sup> <a name="EbsOptimized" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.ebsOptimized"></a>

```go
func EbsOptimized() interface{}
```

- *Type:* interface{}

---

##### `InstancePlatform`<sup>Required</sup> <a name="InstancePlatform" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instancePlatform"></a>

```go
func InstancePlatform() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2CapacityReservationFleetTagSpecificationsList <a name="Ec2CapacityReservationFleetTagSpecificationsList" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2capacityreservationfleet"

ec2capacityreservationfleet.NewEc2CapacityReservationFleetTagSpecificationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2CapacityReservationFleetTagSpecificationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.get"></a>

```go
func Get(index *f64) Ec2CapacityReservationFleetTagSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2CapacityReservationFleetTagSpecificationsOutputReference <a name="Ec2CapacityReservationFleetTagSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2capacityreservationfleet"

ec2capacityreservationfleet.NewEc2CapacityReservationFleetTagSpecificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2CapacityReservationFleetTagSpecificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.resetResourceType"></a>

```go
func ResetResourceType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList">Ec2CapacityReservationFleetTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.tags"></a>

```go
func Tags() Ec2CapacityReservationFleetTagSpecificationsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList">Ec2CapacityReservationFleetTagSpecificationsTagsList</a>

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2CapacityReservationFleetTagSpecificationsTagsList <a name="Ec2CapacityReservationFleetTagSpecificationsTagsList" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2capacityreservationfleet"

ec2capacityreservationfleet.NewEc2CapacityReservationFleetTagSpecificationsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2CapacityReservationFleetTagSpecificationsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.get"></a>

```go
func Get(index *f64) Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference <a name="Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2capacityreservationfleet"

ec2capacityreservationfleet.NewEc2CapacityReservationFleetTagSpecificationsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



