# `ec2CapacityReservationFleet` Submodule <a name="`ec2CapacityReservationFleet` Submodule" id="@cdktn/provider-awscc.ec2CapacityReservationFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2CapacityReservationFleet <a name="Ec2CapacityReservationFleet" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet awscc_ec2_capacity_reservation_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation_fleet

ec2CapacityReservationFleet.Ec2CapacityReservationFleet(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  allocation_strategy: str = None,
  end_date: str = None,
  instance_match_criteria: str = None,
  instance_type_specifications: IResolvable | typing.List[Ec2CapacityReservationFleetInstanceTypeSpecifications] = None,
  no_remove_end_date: bool | IResolvable = None,
  remove_end_date: bool | IResolvable = None,
  tag_specifications: IResolvable | typing.List[Ec2CapacityReservationFleetTagSpecifications] = None,
  tenancy: str = None,
  total_target_capacity: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.allocationStrategy">allocation_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#allocation_strategy Ec2CapacityReservationFleet#allocation_strategy}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.endDate">end_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#end_date Ec2CapacityReservationFleet#end_date}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.instanceMatchCriteria">instance_match_criteria</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#instance_match_criteria Ec2CapacityReservationFleet#instance_match_criteria}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.instanceTypeSpecifications">instance_type_specifications</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#instance_type_specifications Ec2CapacityReservationFleet#instance_type_specifications}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.noRemoveEndDate">no_remove_end_date</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#no_remove_end_date Ec2CapacityReservationFleet#no_remove_end_date}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.removeEndDate">remove_end_date</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#remove_end_date Ec2CapacityReservationFleet#remove_end_date}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.tagSpecifications">tag_specifications</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#tag_specifications Ec2CapacityReservationFleet#tag_specifications}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.tenancy">tenancy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#tenancy Ec2CapacityReservationFleet#tenancy}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.totalTargetCapacity">total_target_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#total_target_capacity Ec2CapacityReservationFleet#total_target_capacity}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allocation_strategy`<sup>Optional</sup> <a name="allocation_strategy" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.allocationStrategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#allocation_strategy Ec2CapacityReservationFleet#allocation_strategy}.

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.endDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#end_date Ec2CapacityReservationFleet#end_date}.

---

##### `instance_match_criteria`<sup>Optional</sup> <a name="instance_match_criteria" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.instanceMatchCriteria"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#instance_match_criteria Ec2CapacityReservationFleet#instance_match_criteria}.

---

##### `instance_type_specifications`<sup>Optional</sup> <a name="instance_type_specifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.instanceTypeSpecifications"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#instance_type_specifications Ec2CapacityReservationFleet#instance_type_specifications}.

---

##### `no_remove_end_date`<sup>Optional</sup> <a name="no_remove_end_date" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.noRemoveEndDate"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#no_remove_end_date Ec2CapacityReservationFleet#no_remove_end_date}.

---

##### `remove_end_date`<sup>Optional</sup> <a name="remove_end_date" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.removeEndDate"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#remove_end_date Ec2CapacityReservationFleet#remove_end_date}.

---

##### `tag_specifications`<sup>Optional</sup> <a name="tag_specifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.tagSpecifications"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#tag_specifications Ec2CapacityReservationFleet#tag_specifications}.

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.tenancy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#tenancy Ec2CapacityReservationFleet#tenancy}.

---

##### `total_target_capacity`<sup>Optional</sup> <a name="total_target_capacity" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.Initializer.parameter.totalTargetCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#total_target_capacity Ec2CapacityReservationFleet#total_target_capacity}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.putInstanceTypeSpecifications">put_instance_type_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.putTagSpecifications">put_tag_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetAllocationStrategy">reset_allocation_strategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetEndDate">reset_end_date</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetInstanceMatchCriteria">reset_instance_match_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetInstanceTypeSpecifications">reset_instance_type_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetNoRemoveEndDate">reset_no_remove_end_date</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetRemoveEndDate">reset_remove_end_date</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetTagSpecifications">reset_tag_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetTenancy">reset_tenancy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetTotalTargetCapacity">reset_total_target_capacity</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_instance_type_specifications` <a name="put_instance_type_specifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.putInstanceTypeSpecifications"></a>

```python
def put_instance_type_specifications(
  value: IResolvable | typing.List[Ec2CapacityReservationFleetInstanceTypeSpecifications]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.putInstanceTypeSpecifications.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a>]

---

##### `put_tag_specifications` <a name="put_tag_specifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.putTagSpecifications"></a>

```python
def put_tag_specifications(
  value: IResolvable | typing.List[Ec2CapacityReservationFleetTagSpecifications]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.putTagSpecifications.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a>]

---

##### `reset_allocation_strategy` <a name="reset_allocation_strategy" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetAllocationStrategy"></a>

```python
def reset_allocation_strategy() -> None
```

##### `reset_end_date` <a name="reset_end_date" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetEndDate"></a>

```python
def reset_end_date() -> None
```

##### `reset_instance_match_criteria` <a name="reset_instance_match_criteria" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetInstanceMatchCriteria"></a>

```python
def reset_instance_match_criteria() -> None
```

##### `reset_instance_type_specifications` <a name="reset_instance_type_specifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetInstanceTypeSpecifications"></a>

```python
def reset_instance_type_specifications() -> None
```

##### `reset_no_remove_end_date` <a name="reset_no_remove_end_date" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetNoRemoveEndDate"></a>

```python
def reset_no_remove_end_date() -> None
```

##### `reset_remove_end_date` <a name="reset_remove_end_date" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetRemoveEndDate"></a>

```python
def reset_remove_end_date() -> None
```

##### `reset_tag_specifications` <a name="reset_tag_specifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetTagSpecifications"></a>

```python
def reset_tag_specifications() -> None
```

##### `reset_tenancy` <a name="reset_tenancy" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetTenancy"></a>

```python
def reset_tenancy() -> None
```

##### `reset_total_target_capacity` <a name="reset_total_target_capacity" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.resetTotalTargetCapacity"></a>

```python
def reset_total_target_capacity() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2CapacityReservationFleet resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation_fleet

ec2CapacityReservationFleet.Ec2CapacityReservationFleet.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation_fleet

ec2CapacityReservationFleet.Ec2CapacityReservationFleet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation_fleet

ec2CapacityReservationFleet.Ec2CapacityReservationFleet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation_fleet

ec2CapacityReservationFleet.Ec2CapacityReservationFleet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2CapacityReservationFleet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2CapacityReservationFleet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2CapacityReservationFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2CapacityReservationFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.capacityReservationFleetId">capacity_reservation_fleet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceTypeSpecifications">instance_type_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList">Ec2CapacityReservationFleetInstanceTypeSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tagSpecifications">tag_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList">Ec2CapacityReservationFleetTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.allocationStrategyInput">allocation_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.endDateInput">end_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceMatchCriteriaInput">instance_match_criteria_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceTypeSpecificationsInput">instance_type_specifications_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.noRemoveEndDateInput">no_remove_end_date_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.removeEndDateInput">remove_end_date_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tagSpecificationsInput">tag_specifications_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tenancyInput">tenancy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.totalTargetCapacityInput">total_target_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.allocationStrategy">allocation_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.endDate">end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceMatchCriteria">instance_match_criteria</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.noRemoveEndDate">no_remove_end_date</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.removeEndDate">remove_end_date</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tenancy">tenancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.totalTargetCapacity">total_target_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `capacity_reservation_fleet_id`<sup>Required</sup> <a name="capacity_reservation_fleet_id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.capacityReservationFleetId"></a>

```python
capacity_reservation_fleet_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_type_specifications`<sup>Required</sup> <a name="instance_type_specifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceTypeSpecifications"></a>

```python
instance_type_specifications: Ec2CapacityReservationFleetInstanceTypeSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList">Ec2CapacityReservationFleetInstanceTypeSpecificationsList</a>

---

##### `tag_specifications`<sup>Required</sup> <a name="tag_specifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tagSpecifications"></a>

```python
tag_specifications: Ec2CapacityReservationFleetTagSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList">Ec2CapacityReservationFleetTagSpecificationsList</a>

---

##### `allocation_strategy_input`<sup>Optional</sup> <a name="allocation_strategy_input" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.allocationStrategyInput"></a>

```python
allocation_strategy_input: str
```

- *Type:* str

---

##### `end_date_input`<sup>Optional</sup> <a name="end_date_input" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.endDateInput"></a>

```python
end_date_input: str
```

- *Type:* str

---

##### `instance_match_criteria_input`<sup>Optional</sup> <a name="instance_match_criteria_input" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceMatchCriteriaInput"></a>

```python
instance_match_criteria_input: str
```

- *Type:* str

---

##### `instance_type_specifications_input`<sup>Optional</sup> <a name="instance_type_specifications_input" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceTypeSpecificationsInput"></a>

```python
instance_type_specifications_input: IResolvable | typing.List[Ec2CapacityReservationFleetInstanceTypeSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a>]

---

##### `no_remove_end_date_input`<sup>Optional</sup> <a name="no_remove_end_date_input" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.noRemoveEndDateInput"></a>

```python
no_remove_end_date_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `remove_end_date_input`<sup>Optional</sup> <a name="remove_end_date_input" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.removeEndDateInput"></a>

```python
remove_end_date_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tag_specifications_input`<sup>Optional</sup> <a name="tag_specifications_input" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tagSpecificationsInput"></a>

```python
tag_specifications_input: IResolvable | typing.List[Ec2CapacityReservationFleetTagSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a>]

---

##### `tenancy_input`<sup>Optional</sup> <a name="tenancy_input" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tenancyInput"></a>

```python
tenancy_input: str
```

- *Type:* str

---

##### `total_target_capacity_input`<sup>Optional</sup> <a name="total_target_capacity_input" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.totalTargetCapacityInput"></a>

```python
total_target_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allocation_strategy`<sup>Required</sup> <a name="allocation_strategy" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.allocationStrategy"></a>

```python
allocation_strategy: str
```

- *Type:* str

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

---

##### `instance_match_criteria`<sup>Required</sup> <a name="instance_match_criteria" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.instanceMatchCriteria"></a>

```python
instance_match_criteria: str
```

- *Type:* str

---

##### `no_remove_end_date`<sup>Required</sup> <a name="no_remove_end_date" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.noRemoveEndDate"></a>

```python
no_remove_end_date: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `remove_end_date`<sup>Required</sup> <a name="remove_end_date" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.removeEndDate"></a>

```python
remove_end_date: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tenancy"></a>

```python
tenancy: str
```

- *Type:* str

---

##### `total_target_capacity`<sup>Required</sup> <a name="total_target_capacity" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.totalTargetCapacity"></a>

```python
total_target_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2CapacityReservationFleetConfig <a name="Ec2CapacityReservationFleetConfig" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation_fleet

ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  allocation_strategy: str = None,
  end_date: str = None,
  instance_match_criteria: str = None,
  instance_type_specifications: IResolvable | typing.List[Ec2CapacityReservationFleetInstanceTypeSpecifications] = None,
  no_remove_end_date: bool | IResolvable = None,
  remove_end_date: bool | IResolvable = None,
  tag_specifications: IResolvable | typing.List[Ec2CapacityReservationFleetTagSpecifications] = None,
  tenancy: str = None,
  total_target_capacity: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.allocationStrategy">allocation_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#allocation_strategy Ec2CapacityReservationFleet#allocation_strategy}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.endDate">end_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#end_date Ec2CapacityReservationFleet#end_date}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.instanceMatchCriteria">instance_match_criteria</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#instance_match_criteria Ec2CapacityReservationFleet#instance_match_criteria}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.instanceTypeSpecifications">instance_type_specifications</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#instance_type_specifications Ec2CapacityReservationFleet#instance_type_specifications}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.noRemoveEndDate">no_remove_end_date</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#no_remove_end_date Ec2CapacityReservationFleet#no_remove_end_date}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.removeEndDate">remove_end_date</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#remove_end_date Ec2CapacityReservationFleet#remove_end_date}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.tagSpecifications">tag_specifications</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#tag_specifications Ec2CapacityReservationFleet#tag_specifications}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.tenancy">tenancy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#tenancy Ec2CapacityReservationFleet#tenancy}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.totalTargetCapacity">total_target_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#total_target_capacity Ec2CapacityReservationFleet#total_target_capacity}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allocation_strategy`<sup>Optional</sup> <a name="allocation_strategy" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.allocationStrategy"></a>

```python
allocation_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#allocation_strategy Ec2CapacityReservationFleet#allocation_strategy}.

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#end_date Ec2CapacityReservationFleet#end_date}.

---

##### `instance_match_criteria`<sup>Optional</sup> <a name="instance_match_criteria" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.instanceMatchCriteria"></a>

```python
instance_match_criteria: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#instance_match_criteria Ec2CapacityReservationFleet#instance_match_criteria}.

---

##### `instance_type_specifications`<sup>Optional</sup> <a name="instance_type_specifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.instanceTypeSpecifications"></a>

```python
instance_type_specifications: IResolvable | typing.List[Ec2CapacityReservationFleetInstanceTypeSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#instance_type_specifications Ec2CapacityReservationFleet#instance_type_specifications}.

---

##### `no_remove_end_date`<sup>Optional</sup> <a name="no_remove_end_date" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.noRemoveEndDate"></a>

```python
no_remove_end_date: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#no_remove_end_date Ec2CapacityReservationFleet#no_remove_end_date}.

---

##### `remove_end_date`<sup>Optional</sup> <a name="remove_end_date" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.removeEndDate"></a>

```python
remove_end_date: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#remove_end_date Ec2CapacityReservationFleet#remove_end_date}.

---

##### `tag_specifications`<sup>Optional</sup> <a name="tag_specifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.tagSpecifications"></a>

```python
tag_specifications: IResolvable | typing.List[Ec2CapacityReservationFleetTagSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#tag_specifications Ec2CapacityReservationFleet#tag_specifications}.

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.tenancy"></a>

```python
tenancy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#tenancy Ec2CapacityReservationFleet#tenancy}.

---

##### `total_target_capacity`<sup>Optional</sup> <a name="total_target_capacity" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetConfig.property.totalTargetCapacity"></a>

```python
total_target_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#total_target_capacity Ec2CapacityReservationFleet#total_target_capacity}.

---

### Ec2CapacityReservationFleetInstanceTypeSpecifications <a name="Ec2CapacityReservationFleetInstanceTypeSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation_fleet

ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications(
  availability_zone: str = None,
  availability_zone_id: str = None,
  ebs_optimized: bool | IResolvable = None,
  instance_platform: str = None,
  instance_type: str = None,
  priority: typing.Union[int, float] = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#availability_zone Ec2CapacityReservationFleet#availability_zone}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#availability_zone_id Ec2CapacityReservationFleet#availability_zone_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.ebsOptimized">ebs_optimized</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#ebs_optimized Ec2CapacityReservationFleet#ebs_optimized}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.instancePlatform">instance_platform</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#instance_platform Ec2CapacityReservationFleet#instance_platform}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#instance_type Ec2CapacityReservationFleet#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#priority Ec2CapacityReservationFleet#priority}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#weight Ec2CapacityReservationFleet#weight}. |

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#availability_zone Ec2CapacityReservationFleet#availability_zone}.

---

##### `availability_zone_id`<sup>Optional</sup> <a name="availability_zone_id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#availability_zone_id Ec2CapacityReservationFleet#availability_zone_id}.

---

##### `ebs_optimized`<sup>Optional</sup> <a name="ebs_optimized" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.ebsOptimized"></a>

```python
ebs_optimized: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#ebs_optimized Ec2CapacityReservationFleet#ebs_optimized}.

---

##### `instance_platform`<sup>Optional</sup> <a name="instance_platform" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.instancePlatform"></a>

```python
instance_platform: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#instance_platform Ec2CapacityReservationFleet#instance_platform}.

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#instance_type Ec2CapacityReservationFleet#instance_type}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#priority Ec2CapacityReservationFleet#priority}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#weight Ec2CapacityReservationFleet#weight}.

---

### Ec2CapacityReservationFleetTagSpecifications <a name="Ec2CapacityReservationFleetTagSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation_fleet

ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications(
  resource_type: str = None,
  tags: IResolvable | typing.List[Ec2CapacityReservationFleetTagSpecificationsTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#resource_type Ec2CapacityReservationFleet#resource_type}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags">Ec2CapacityReservationFleetTagSpecificationsTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#tags Ec2CapacityReservationFleet#tags}. |

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#resource_type Ec2CapacityReservationFleet#resource_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2CapacityReservationFleetTagSpecificationsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags">Ec2CapacityReservationFleetTagSpecificationsTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#tags Ec2CapacityReservationFleet#tags}.

---

### Ec2CapacityReservationFleetTagSpecificationsTags <a name="Ec2CapacityReservationFleetTagSpecificationsTags" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation_fleet

ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#key Ec2CapacityReservationFleet#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#value Ec2CapacityReservationFleet#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#key Ec2CapacityReservationFleet#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_reservation_fleet#value Ec2CapacityReservationFleet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2CapacityReservationFleetInstanceTypeSpecificationsList <a name="Ec2CapacityReservationFleetInstanceTypeSpecificationsList" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation_fleet

ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2CapacityReservationFleetInstanceTypeSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a>]

---


### Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference <a name="Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation_fleet

ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetAvailabilityZoneId">reset_availability_zone_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetEbsOptimized">reset_ebs_optimized</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetInstancePlatform">reset_instance_platform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_availability_zone_id` <a name="reset_availability_zone_id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetAvailabilityZoneId"></a>

```python
def reset_availability_zone_id() -> None
```

##### `reset_ebs_optimized` <a name="reset_ebs_optimized" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetEbsOptimized"></a>

```python
def reset_ebs_optimized() -> None
```

##### `reset_instance_platform` <a name="reset_instance_platform" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetInstancePlatform"></a>

```python
def reset_instance_platform() -> None
```

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZoneIdInput">availability_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.ebsOptimizedInput">ebs_optimized_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instancePlatformInput">instance_platform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.ebsOptimized">ebs_optimized</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instancePlatform">instance_platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone_id_input`<sup>Optional</sup> <a name="availability_zone_id_input" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZoneIdInput"></a>

```python
availability_zone_id_input: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `ebs_optimized_input`<sup>Optional</sup> <a name="ebs_optimized_input" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.ebsOptimizedInput"></a>

```python
ebs_optimized_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `instance_platform_input`<sup>Optional</sup> <a name="instance_platform_input" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instancePlatformInput"></a>

```python
instance_platform_input: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

---

##### `ebs_optimized`<sup>Required</sup> <a name="ebs_optimized" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.ebsOptimized"></a>

```python
ebs_optimized: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `instance_platform`<sup>Required</sup> <a name="instance_platform" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instancePlatform"></a>

```python
instance_platform: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2CapacityReservationFleetInstanceTypeSpecifications
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetInstanceTypeSpecifications">Ec2CapacityReservationFleetInstanceTypeSpecifications</a>

---


### Ec2CapacityReservationFleetTagSpecificationsList <a name="Ec2CapacityReservationFleetTagSpecificationsList" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation_fleet

ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2CapacityReservationFleetTagSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2CapacityReservationFleetTagSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a>]

---


### Ec2CapacityReservationFleetTagSpecificationsOutputReference <a name="Ec2CapacityReservationFleetTagSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation_fleet

ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.resetResourceType">reset_resource_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2CapacityReservationFleetTagSpecificationsTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags">Ec2CapacityReservationFleetTagSpecificationsTags</a>]

---

##### `reset_resource_type` <a name="reset_resource_type" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.resetResourceType"></a>

```python
def reset_resource_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList">Ec2CapacityReservationFleetTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags">Ec2CapacityReservationFleetTagSpecificationsTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.tags"></a>

```python
tags: Ec2CapacityReservationFleetTagSpecificationsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList">Ec2CapacityReservationFleetTagSpecificationsTagsList</a>

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2CapacityReservationFleetTagSpecificationsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags">Ec2CapacityReservationFleetTagSpecificationsTags</a>]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2CapacityReservationFleetTagSpecifications
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecifications">Ec2CapacityReservationFleetTagSpecifications</a>

---


### Ec2CapacityReservationFleetTagSpecificationsTagsList <a name="Ec2CapacityReservationFleetTagSpecificationsTagsList" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation_fleet

ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags">Ec2CapacityReservationFleetTagSpecificationsTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2CapacityReservationFleetTagSpecificationsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags">Ec2CapacityReservationFleetTagSpecificationsTags</a>]

---


### Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference <a name="Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation_fleet

ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags">Ec2CapacityReservationFleetTagSpecificationsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2CapacityReservationFleetTagSpecificationsTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2CapacityReservationFleet.Ec2CapacityReservationFleetTagSpecificationsTags">Ec2CapacityReservationFleetTagSpecificationsTags</a>

---



