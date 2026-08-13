# `ec2CapacityReservationFleet` Submodule <a name="`ec2CapacityReservationFleet` Submodule" id="@cdktn/provider-awscc.ec2CapacityReservationFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2CapacityReservationFleet <a name="Ec2CapacityReservationFleet" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet awscc_ec2_capacity_reservation_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_capacity_reservation_fleet.Ec2CapacityReservationFleet;

Ec2CapacityReservationFleet.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .allocationStrategy(java.lang.String)
//  .endDate(java.lang.String)
//  .instanceMatchCriteria(java.lang.String)
//  .instanceTypeSpecifications(IResolvable|java.util.List<Ec2CapacityReservationFleetInstanceTypeSpecifications>)
//  .noRemoveEndDate(java.lang.Boolean|IResolvable)
//  .removeEndDate(java.lang.Boolean|IResolvable)
//  .tagSpecifications(IResolvable|java.util.List<Ec2CapacityReservationFleetTagSpecifications>)
//  .tenancy(java.lang.String)
//  .totalTargetCapacity(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.allocationStrategy">allocationStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#allocation_strategy Ec2CapacityReservationFleet#allocation_strategy}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.endDate">endDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#end_date Ec2CapacityReservationFleet#end_date}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.instanceMatchCriteria">instanceMatchCriteria</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#instance_match_criteria Ec2CapacityReservationFleet#instance_match_criteria}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.instanceTypeSpecifications">instanceTypeSpecifications</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#instance_type_specifications Ec2CapacityReservationFleet#instance_type_specifications}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.noRemoveEndDate">noRemoveEndDate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#no_remove_end_date Ec2CapacityReservationFleet#no_remove_end_date}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.removeEndDate">removeEndDate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#remove_end_date Ec2CapacityReservationFleet#remove_end_date}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.tagSpecifications">tagSpecifications</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#tag_specifications Ec2CapacityReservationFleet#tag_specifications}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.tenancy">tenancy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#tenancy Ec2CapacityReservationFleet#tenancy}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.totalTargetCapacity">totalTargetCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#total_target_capacity Ec2CapacityReservationFleet#total_target_capacity}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allocationStrategy`<sup>Optional</sup> <a name="allocationStrategy" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.allocationStrategy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#allocation_strategy Ec2CapacityReservationFleet#allocation_strategy}.

---

##### `endDate`<sup>Optional</sup> <a name="endDate" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.endDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#end_date Ec2CapacityReservationFleet#end_date}.

---

##### `instanceMatchCriteria`<sup>Optional</sup> <a name="instanceMatchCriteria" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.instanceMatchCriteria"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#instance_match_criteria Ec2CapacityReservationFleet#instance_match_criteria}.

---

##### `instanceTypeSpecifications`<sup>Optional</sup> <a name="instanceTypeSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.instanceTypeSpecifications"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#instance_type_specifications Ec2CapacityReservationFleet#instance_type_specifications}.

---

##### `noRemoveEndDate`<sup>Optional</sup> <a name="noRemoveEndDate" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.noRemoveEndDate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#no_remove_end_date Ec2CapacityReservationFleet#no_remove_end_date}.

---

##### `removeEndDate`<sup>Optional</sup> <a name="removeEndDate" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.removeEndDate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#remove_end_date Ec2CapacityReservationFleet#remove_end_date}.

---

##### `tagSpecifications`<sup>Optional</sup> <a name="tagSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.tagSpecifications"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#tag_specifications Ec2CapacityReservationFleet#tag_specifications}.

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.tenancy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#tenancy Ec2CapacityReservationFleet#tenancy}.

---

##### `totalTargetCapacity`<sup>Optional</sup> <a name="totalTargetCapacity" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.totalTargetCapacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#total_target_capacity Ec2CapacityReservationFleet#total_target_capacity}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.putInstanceTypeSpecifications">putInstanceTypeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.putTagSpecifications">putTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetAllocationStrategy">resetAllocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetEndDate">resetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetInstanceMatchCriteria">resetInstanceMatchCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetInstanceTypeSpecifications">resetInstanceTypeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetNoRemoveEndDate">resetNoRemoveEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetRemoveEndDate">resetRemoveEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetTagSpecifications">resetTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetTenancy">resetTenancy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetTotalTargetCapacity">resetTotalTargetCapacity</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInstanceTypeSpecifications` <a name="putInstanceTypeSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.putInstanceTypeSpecifications"></a>

```java
public void putInstanceTypeSpecifications(IResolvable|java.util.List<Ec2CapacityReservationFleetInstanceTypeSpecifications> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.putInstanceTypeSpecifications.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a>>

---

##### `putTagSpecifications` <a name="putTagSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.putTagSpecifications"></a>

```java
public void putTagSpecifications(IResolvable|java.util.List<Ec2CapacityReservationFleetTagSpecifications> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.putTagSpecifications.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a>>

---

##### `resetAllocationStrategy` <a name="resetAllocationStrategy" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetAllocationStrategy"></a>

```java
public void resetAllocationStrategy()
```

##### `resetEndDate` <a name="resetEndDate" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetEndDate"></a>

```java
public void resetEndDate()
```

##### `resetInstanceMatchCriteria` <a name="resetInstanceMatchCriteria" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetInstanceMatchCriteria"></a>

```java
public void resetInstanceMatchCriteria()
```

##### `resetInstanceTypeSpecifications` <a name="resetInstanceTypeSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetInstanceTypeSpecifications"></a>

```java
public void resetInstanceTypeSpecifications()
```

##### `resetNoRemoveEndDate` <a name="resetNoRemoveEndDate" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetNoRemoveEndDate"></a>

```java
public void resetNoRemoveEndDate()
```

##### `resetRemoveEndDate` <a name="resetRemoveEndDate" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetRemoveEndDate"></a>

```java
public void resetRemoveEndDate()
```

##### `resetTagSpecifications` <a name="resetTagSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetTagSpecifications"></a>

```java
public void resetTagSpecifications()
```

##### `resetTenancy` <a name="resetTenancy" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetTenancy"></a>

```java
public void resetTenancy()
```

##### `resetTotalTargetCapacity` <a name="resetTotalTargetCapacity" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetTotalTargetCapacity"></a>

```java
public void resetTotalTargetCapacity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2CapacityReservationFleet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_capacity_reservation_fleet.Ec2CapacityReservationFleet;

Ec2CapacityReservationFleet.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_capacity_reservation_fleet.Ec2CapacityReservationFleet;

Ec2CapacityReservationFleet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_capacity_reservation_fleet.Ec2CapacityReservationFleet;

Ec2CapacityReservationFleet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_capacity_reservation_fleet.Ec2CapacityReservationFleet;

Ec2CapacityReservationFleet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2CapacityReservationFleet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2CapacityReservationFleet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2CapacityReservationFleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2CapacityReservationFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2CapacityReservationFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.capacityReservationFleetId">capacityReservationFleetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceTypeSpecifications">instanceTypeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList">Ec2CapacityReservationFleetInstanceTypeSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tagSpecifications">tagSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList">Ec2CapacityReservationFleetTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.allocationStrategyInput">allocationStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.endDateInput">endDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceMatchCriteriaInput">instanceMatchCriteriaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceTypeSpecificationsInput">instanceTypeSpecificationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.noRemoveEndDateInput">noRemoveEndDateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.removeEndDateInput">removeEndDateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tagSpecificationsInput">tagSpecificationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tenancyInput">tenancyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.totalTargetCapacityInput">totalTargetCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.allocationStrategy">allocationStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.endDate">endDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceMatchCriteria">instanceMatchCriteria</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.noRemoveEndDate">noRemoveEndDate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.removeEndDate">removeEndDate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tenancy">tenancy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.totalTargetCapacity">totalTargetCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `capacityReservationFleetId`<sup>Required</sup> <a name="capacityReservationFleetId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.capacityReservationFleetId"></a>

```java
public java.lang.String getCapacityReservationFleetId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceTypeSpecifications`<sup>Required</sup> <a name="instanceTypeSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceTypeSpecifications"></a>

```java
public Ec2CapacityReservationFleetInstanceTypeSpecificationsList getInstanceTypeSpecifications();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList">Ec2CapacityReservationFleetInstanceTypeSpecificationsList</a>

---

##### `tagSpecifications`<sup>Required</sup> <a name="tagSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tagSpecifications"></a>

```java
public Ec2CapacityReservationFleetTagSpecificationsList getTagSpecifications();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList">Ec2CapacityReservationFleetTagSpecificationsList</a>

---

##### `allocationStrategyInput`<sup>Optional</sup> <a name="allocationStrategyInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.allocationStrategyInput"></a>

```java
public java.lang.String getAllocationStrategyInput();
```

- *Type:* java.lang.String

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.endDateInput"></a>

```java
public java.lang.String getEndDateInput();
```

- *Type:* java.lang.String

---

##### `instanceMatchCriteriaInput`<sup>Optional</sup> <a name="instanceMatchCriteriaInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceMatchCriteriaInput"></a>

```java
public java.lang.String getInstanceMatchCriteriaInput();
```

- *Type:* java.lang.String

---

##### `instanceTypeSpecificationsInput`<sup>Optional</sup> <a name="instanceTypeSpecificationsInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceTypeSpecificationsInput"></a>

```java
public IResolvable|java.util.List<Ec2CapacityReservationFleetInstanceTypeSpecifications> getInstanceTypeSpecificationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a>>

---

##### `noRemoveEndDateInput`<sup>Optional</sup> <a name="noRemoveEndDateInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.noRemoveEndDateInput"></a>

```java
public java.lang.Boolean|IResolvable getNoRemoveEndDateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `removeEndDateInput`<sup>Optional</sup> <a name="removeEndDateInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.removeEndDateInput"></a>

```java
public java.lang.Boolean|IResolvable getRemoveEndDateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tagSpecificationsInput`<sup>Optional</sup> <a name="tagSpecificationsInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tagSpecificationsInput"></a>

```java
public IResolvable|java.util.List<Ec2CapacityReservationFleetTagSpecifications> getTagSpecificationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a>>

---

##### `tenancyInput`<sup>Optional</sup> <a name="tenancyInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tenancyInput"></a>

```java
public java.lang.String getTenancyInput();
```

- *Type:* java.lang.String

---

##### `totalTargetCapacityInput`<sup>Optional</sup> <a name="totalTargetCapacityInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.totalTargetCapacityInput"></a>

```java
public java.lang.Number getTotalTargetCapacityInput();
```

- *Type:* java.lang.Number

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.allocationStrategy"></a>

```java
public java.lang.String getAllocationStrategy();
```

- *Type:* java.lang.String

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.endDate"></a>

```java
public java.lang.String getEndDate();
```

- *Type:* java.lang.String

---

##### `instanceMatchCriteria`<sup>Required</sup> <a name="instanceMatchCriteria" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceMatchCriteria"></a>

```java
public java.lang.String getInstanceMatchCriteria();
```

- *Type:* java.lang.String

---

##### `noRemoveEndDate`<sup>Required</sup> <a name="noRemoveEndDate" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.noRemoveEndDate"></a>

```java
public java.lang.Boolean|IResolvable getNoRemoveEndDate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `removeEndDate`<sup>Required</sup> <a name="removeEndDate" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.removeEndDate"></a>

```java
public java.lang.Boolean|IResolvable getRemoveEndDate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tenancy"></a>

```java
public java.lang.String getTenancy();
```

- *Type:* java.lang.String

---

##### `totalTargetCapacity`<sup>Required</sup> <a name="totalTargetCapacity" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.totalTargetCapacity"></a>

```java
public java.lang.Number getTotalTargetCapacity();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2CapacityReservationFleetConfig <a name="Ec2CapacityReservationFleetConfig" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_capacity_reservation_fleet.Ec2CapacityReservationFleetConfig;

Ec2CapacityReservationFleetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .allocationStrategy(java.lang.String)
//  .endDate(java.lang.String)
//  .instanceMatchCriteria(java.lang.String)
//  .instanceTypeSpecifications(IResolvable|java.util.List<Ec2CapacityReservationFleetInstanceTypeSpecifications>)
//  .noRemoveEndDate(java.lang.Boolean|IResolvable)
//  .removeEndDate(java.lang.Boolean|IResolvable)
//  .tagSpecifications(IResolvable|java.util.List<Ec2CapacityReservationFleetTagSpecifications>)
//  .tenancy(java.lang.String)
//  .totalTargetCapacity(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.allocationStrategy">allocationStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#allocation_strategy Ec2CapacityReservationFleet#allocation_strategy}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.endDate">endDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#end_date Ec2CapacityReservationFleet#end_date}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.instanceMatchCriteria">instanceMatchCriteria</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#instance_match_criteria Ec2CapacityReservationFleet#instance_match_criteria}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.instanceTypeSpecifications">instanceTypeSpecifications</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#instance_type_specifications Ec2CapacityReservationFleet#instance_type_specifications}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.noRemoveEndDate">noRemoveEndDate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#no_remove_end_date Ec2CapacityReservationFleet#no_remove_end_date}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.removeEndDate">removeEndDate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#remove_end_date Ec2CapacityReservationFleet#remove_end_date}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.tagSpecifications">tagSpecifications</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#tag_specifications Ec2CapacityReservationFleet#tag_specifications}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.tenancy">tenancy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#tenancy Ec2CapacityReservationFleet#tenancy}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.totalTargetCapacity">totalTargetCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#total_target_capacity Ec2CapacityReservationFleet#total_target_capacity}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allocationStrategy`<sup>Optional</sup> <a name="allocationStrategy" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.allocationStrategy"></a>

```java
public java.lang.String getAllocationStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#allocation_strategy Ec2CapacityReservationFleet#allocation_strategy}.

---

##### `endDate`<sup>Optional</sup> <a name="endDate" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.endDate"></a>

```java
public java.lang.String getEndDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#end_date Ec2CapacityReservationFleet#end_date}.

---

##### `instanceMatchCriteria`<sup>Optional</sup> <a name="instanceMatchCriteria" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.instanceMatchCriteria"></a>

```java
public java.lang.String getInstanceMatchCriteria();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#instance_match_criteria Ec2CapacityReservationFleet#instance_match_criteria}.

---

##### `instanceTypeSpecifications`<sup>Optional</sup> <a name="instanceTypeSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.instanceTypeSpecifications"></a>

```java
public IResolvable|java.util.List<Ec2CapacityReservationFleetInstanceTypeSpecifications> getInstanceTypeSpecifications();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#instance_type_specifications Ec2CapacityReservationFleet#instance_type_specifications}.

---

##### `noRemoveEndDate`<sup>Optional</sup> <a name="noRemoveEndDate" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.noRemoveEndDate"></a>

```java
public java.lang.Boolean|IResolvable getNoRemoveEndDate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#no_remove_end_date Ec2CapacityReservationFleet#no_remove_end_date}.

---

##### `removeEndDate`<sup>Optional</sup> <a name="removeEndDate" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.removeEndDate"></a>

```java
public java.lang.Boolean|IResolvable getRemoveEndDate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#remove_end_date Ec2CapacityReservationFleet#remove_end_date}.

---

##### `tagSpecifications`<sup>Optional</sup> <a name="tagSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.tagSpecifications"></a>

```java
public IResolvable|java.util.List<Ec2CapacityReservationFleetTagSpecifications> getTagSpecifications();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#tag_specifications Ec2CapacityReservationFleet#tag_specifications}.

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.tenancy"></a>

```java
public java.lang.String getTenancy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#tenancy Ec2CapacityReservationFleet#tenancy}.

---

##### `totalTargetCapacity`<sup>Optional</sup> <a name="totalTargetCapacity" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.totalTargetCapacity"></a>

```java
public java.lang.Number getTotalTargetCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#total_target_capacity Ec2CapacityReservationFleet#total_target_capacity}.

---

### Ec2CapacityReservationFleetInstanceTypeSpecifications <a name="Ec2CapacityReservationFleetInstanceTypeSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_capacity_reservation_fleet.Ec2CapacityReservationFleetInstanceTypeSpecifications;

Ec2CapacityReservationFleetInstanceTypeSpecifications.builder()
//  .availabilityZone(java.lang.String)
//  .availabilityZoneId(java.lang.String)
//  .ebsOptimized(java.lang.Boolean|IResolvable)
//  .instancePlatform(java.lang.String)
//  .instanceType(java.lang.String)
//  .priority(java.lang.Number)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#availability_zone Ec2CapacityReservationFleet#availability_zone}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#availability_zone_id Ec2CapacityReservationFleet#availability_zone_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.ebsOptimized">ebsOptimized</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#ebs_optimized Ec2CapacityReservationFleet#ebs_optimized}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.instancePlatform">instancePlatform</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#instance_platform Ec2CapacityReservationFleet#instance_platform}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#instance_type Ec2CapacityReservationFleet#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#priority Ec2CapacityReservationFleet#priority}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#weight Ec2CapacityReservationFleet#weight}. |

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#availability_zone Ec2CapacityReservationFleet#availability_zone}.

---

##### `availabilityZoneId`<sup>Optional</sup> <a name="availabilityZoneId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.availabilityZoneId"></a>

```java
public java.lang.String getAvailabilityZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#availability_zone_id Ec2CapacityReservationFleet#availability_zone_id}.

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.ebsOptimized"></a>

```java
public java.lang.Boolean|IResolvable getEbsOptimized();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#ebs_optimized Ec2CapacityReservationFleet#ebs_optimized}.

---

##### `instancePlatform`<sup>Optional</sup> <a name="instancePlatform" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.instancePlatform"></a>

```java
public java.lang.String getInstancePlatform();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#instance_platform Ec2CapacityReservationFleet#instance_platform}.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#instance_type Ec2CapacityReservationFleet#instance_type}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#priority Ec2CapacityReservationFleet#priority}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#weight Ec2CapacityReservationFleet#weight}.

---

### Ec2CapacityReservationFleetTagSpecifications <a name="Ec2CapacityReservationFleetTagSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_capacity_reservation_fleet.Ec2CapacityReservationFleetTagSpecifications;

Ec2CapacityReservationFleetTagSpecifications.builder()
//  .resourceType(java.lang.String)
//  .tags(IResolvable|java.util.List<Ec2CapacityReservationFleetTagSpecificationsTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#resource_type Ec2CapacityReservationFleet#resource_type}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags">Ec2CapacityReservationFleetTagSpecificationsTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#tags Ec2CapacityReservationFleet#tags}. |

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#resource_type Ec2CapacityReservationFleet#resource_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications.property.tags"></a>

```java
public IResolvable|java.util.List<Ec2CapacityReservationFleetTagSpecificationsTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags">Ec2CapacityReservationFleetTagSpecificationsTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#tags Ec2CapacityReservationFleet#tags}.

---

### Ec2CapacityReservationFleetTagSpecificationsTags <a name="Ec2CapacityReservationFleetTagSpecificationsTags" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_capacity_reservation_fleet.Ec2CapacityReservationFleetTagSpecificationsTags;

Ec2CapacityReservationFleetTagSpecificationsTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#key Ec2CapacityReservationFleet#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#value Ec2CapacityReservationFleet#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#key Ec2CapacityReservationFleet#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_reservation_fleet#value Ec2CapacityReservationFleet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2CapacityReservationFleetInstanceTypeSpecificationsList <a name="Ec2CapacityReservationFleetInstanceTypeSpecificationsList" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_capacity_reservation_fleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList;

new Ec2CapacityReservationFleetInstanceTypeSpecificationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.get"></a>

```java
public Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2CapacityReservationFleetInstanceTypeSpecifications> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a>>

---


### Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference <a name="Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_capacity_reservation_fleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference;

new Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetAvailabilityZoneId">resetAvailabilityZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetEbsOptimized">resetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetInstancePlatform">resetInstancePlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetAvailabilityZoneId` <a name="resetAvailabilityZoneId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetAvailabilityZoneId"></a>

```java
public void resetAvailabilityZoneId()
```

##### `resetEbsOptimized` <a name="resetEbsOptimized" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetEbsOptimized"></a>

```java
public void resetEbsOptimized()
```

##### `resetInstancePlatform` <a name="resetInstancePlatform" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetInstancePlatform"></a>

```java
public void resetInstancePlatform()
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetWeight` <a name="resetWeight" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZoneIdInput">availabilityZoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.ebsOptimizedInput">ebsOptimizedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instancePlatformInput">instancePlatformInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.ebsOptimized">ebsOptimized</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instancePlatform">instancePlatform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZoneIdInput`<sup>Optional</sup> <a name="availabilityZoneIdInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZoneIdInput"></a>

```java
public java.lang.String getAvailabilityZoneIdInput();
```

- *Type:* java.lang.String

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `ebsOptimizedInput`<sup>Optional</sup> <a name="ebsOptimizedInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.ebsOptimizedInput"></a>

```java
public java.lang.Boolean|IResolvable getEbsOptimizedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `instancePlatformInput`<sup>Optional</sup> <a name="instancePlatformInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instancePlatformInput"></a>

```java
public java.lang.String getInstancePlatformInput();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZoneId"></a>

```java
public java.lang.String getAvailabilityZoneId();
```

- *Type:* java.lang.String

---

##### `ebsOptimized`<sup>Required</sup> <a name="ebsOptimized" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.ebsOptimized"></a>

```java
public java.lang.Boolean|IResolvable getEbsOptimized();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `instancePlatform`<sup>Required</sup> <a name="instancePlatform" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instancePlatform"></a>

```java
public java.lang.String getInstancePlatform();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2CapacityReservationFleetInstanceTypeSpecifications getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a>

---


### Ec2CapacityReservationFleetTagSpecificationsList <a name="Ec2CapacityReservationFleetTagSpecificationsList" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_capacity_reservation_fleet.Ec2CapacityReservationFleetTagSpecificationsList;

new Ec2CapacityReservationFleetTagSpecificationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.get"></a>

```java
public Ec2CapacityReservationFleetTagSpecificationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2CapacityReservationFleetTagSpecifications> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a>>

---


### Ec2CapacityReservationFleetTagSpecificationsOutputReference <a name="Ec2CapacityReservationFleetTagSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_capacity_reservation_fleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference;

new Ec2CapacityReservationFleetTagSpecificationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Ec2CapacityReservationFleetTagSpecificationsTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags">Ec2CapacityReservationFleetTagSpecificationsTags</a>>

---

##### `resetResourceType` <a name="resetResourceType" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.resetResourceType"></a>

```java
public void resetResourceType()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList">Ec2CapacityReservationFleetTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags">Ec2CapacityReservationFleetTagSpecificationsTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.tags"></a>

```java
public Ec2CapacityReservationFleetTagSpecificationsTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList">Ec2CapacityReservationFleetTagSpecificationsTagsList</a>

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Ec2CapacityReservationFleetTagSpecificationsTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags">Ec2CapacityReservationFleetTagSpecificationsTags</a>>

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2CapacityReservationFleetTagSpecifications getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a>

---


### Ec2CapacityReservationFleetTagSpecificationsTagsList <a name="Ec2CapacityReservationFleetTagSpecificationsTagsList" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_capacity_reservation_fleet.Ec2CapacityReservationFleetTagSpecificationsTagsList;

new Ec2CapacityReservationFleetTagSpecificationsTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.get"></a>

```java
public Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags">Ec2CapacityReservationFleetTagSpecificationsTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2CapacityReservationFleetTagSpecificationsTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags">Ec2CapacityReservationFleetTagSpecificationsTags</a>>

---


### Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference <a name="Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_capacity_reservation_fleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference;

new Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags">Ec2CapacityReservationFleetTagSpecificationsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2CapacityReservationFleetTagSpecificationsTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags">Ec2CapacityReservationFleetTagSpecificationsTags</a>

---



