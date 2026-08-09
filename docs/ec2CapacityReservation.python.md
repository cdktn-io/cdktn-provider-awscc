# `ec2CapacityReservation` Submodule <a name="`ec2CapacityReservation` Submodule" id="@cdktn/provider-awscc.ec2CapacityReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2CapacityReservation <a name="Ec2CapacityReservation" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation awscc_ec2_capacity_reservation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation

ec2CapacityReservation.Ec2CapacityReservation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_count: typing.Union[int, float],
  instance_platform: str,
  instance_type: str,
  availability_zone: str = None,
  availability_zone_id: str = None,
  ebs_optimized: bool | IResolvable = None,
  end_date: str = None,
  end_date_type: str = None,
  ephemeral_storage: bool | IResolvable = None,
  instance_match_criteria: str = None,
  out_post_arn: str = None,
  placement_group_arn: str = None,
  tag_specifications: IResolvable | typing.List[Ec2CapacityReservationTagSpecifications] = None,
  tenancy: str = None,
  unused_reservation_billing_owner_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#instance_count Ec2CapacityReservation#instance_count}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.instancePlatform">instance_platform</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#instance_platform Ec2CapacityReservation#instance_platform}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#instance_type Ec2CapacityReservation#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#availability_zone Ec2CapacityReservation#availability_zone}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#availability_zone_id Ec2CapacityReservation#availability_zone_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.ebsOptimized">ebs_optimized</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#ebs_optimized Ec2CapacityReservation#ebs_optimized}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.endDate">end_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#end_date Ec2CapacityReservation#end_date}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.endDateType">end_date_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#end_date_type Ec2CapacityReservation#end_date_type}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.ephemeralStorage">ephemeral_storage</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#ephemeral_storage Ec2CapacityReservation#ephemeral_storage}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.instanceMatchCriteria">instance_match_criteria</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#instance_match_criteria Ec2CapacityReservation#instance_match_criteria}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.outPostArn">out_post_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#out_post_arn Ec2CapacityReservation#out_post_arn}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.placementGroupArn">placement_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#placement_group_arn Ec2CapacityReservation#placement_group_arn}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.tagSpecifications">tag_specifications</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications">Ec2CapacityReservationTagSpecifications</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#tag_specifications Ec2CapacityReservation#tag_specifications}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.tenancy">tenancy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#tenancy Ec2CapacityReservation#tenancy}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.unusedReservationBillingOwnerId">unused_reservation_billing_owner_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#unused_reservation_billing_owner_id Ec2CapacityReservation#unused_reservation_billing_owner_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.instanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#instance_count Ec2CapacityReservation#instance_count}.

---

##### `instance_platform`<sup>Required</sup> <a name="instance_platform" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.instancePlatform"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#instance_platform Ec2CapacityReservation#instance_platform}.

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#instance_type Ec2CapacityReservation#instance_type}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#availability_zone Ec2CapacityReservation#availability_zone}.

---

##### `availability_zone_id`<sup>Optional</sup> <a name="availability_zone_id" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.availabilityZoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#availability_zone_id Ec2CapacityReservation#availability_zone_id}.

---

##### `ebs_optimized`<sup>Optional</sup> <a name="ebs_optimized" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.ebsOptimized"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#ebs_optimized Ec2CapacityReservation#ebs_optimized}.

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.endDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#end_date Ec2CapacityReservation#end_date}.

---

##### `end_date_type`<sup>Optional</sup> <a name="end_date_type" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.endDateType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#end_date_type Ec2CapacityReservation#end_date_type}.

---

##### `ephemeral_storage`<sup>Optional</sup> <a name="ephemeral_storage" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.ephemeralStorage"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#ephemeral_storage Ec2CapacityReservation#ephemeral_storage}.

---

##### `instance_match_criteria`<sup>Optional</sup> <a name="instance_match_criteria" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.instanceMatchCriteria"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#instance_match_criteria Ec2CapacityReservation#instance_match_criteria}.

---

##### `out_post_arn`<sup>Optional</sup> <a name="out_post_arn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.outPostArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#out_post_arn Ec2CapacityReservation#out_post_arn}.

---

##### `placement_group_arn`<sup>Optional</sup> <a name="placement_group_arn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.placementGroupArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#placement_group_arn Ec2CapacityReservation#placement_group_arn}.

---

##### `tag_specifications`<sup>Optional</sup> <a name="tag_specifications" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.tagSpecifications"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications">Ec2CapacityReservationTagSpecifications</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#tag_specifications Ec2CapacityReservation#tag_specifications}.

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.tenancy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#tenancy Ec2CapacityReservation#tenancy}.

---

##### `unused_reservation_billing_owner_id`<sup>Optional</sup> <a name="unused_reservation_billing_owner_id" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.unusedReservationBillingOwnerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#unused_reservation_billing_owner_id Ec2CapacityReservation#unused_reservation_billing_owner_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.putTagSpecifications">put_tag_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetAvailabilityZoneId">reset_availability_zone_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetEbsOptimized">reset_ebs_optimized</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetEndDate">reset_end_date</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetEndDateType">reset_end_date_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetEphemeralStorage">reset_ephemeral_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetInstanceMatchCriteria">reset_instance_match_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetOutPostArn">reset_out_post_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetPlacementGroupArn">reset_placement_group_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetTagSpecifications">reset_tag_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetTenancy">reset_tenancy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetUnusedReservationBillingOwnerId">reset_unused_reservation_billing_owner_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tag_specifications` <a name="put_tag_specifications" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.putTagSpecifications"></a>

```python
def put_tag_specifications(
  value: IResolvable | typing.List[Ec2CapacityReservationTagSpecifications]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.putTagSpecifications.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications">Ec2CapacityReservationTagSpecifications</a>]

---

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_availability_zone_id` <a name="reset_availability_zone_id" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetAvailabilityZoneId"></a>

```python
def reset_availability_zone_id() -> None
```

##### `reset_ebs_optimized` <a name="reset_ebs_optimized" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetEbsOptimized"></a>

```python
def reset_ebs_optimized() -> None
```

##### `reset_end_date` <a name="reset_end_date" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetEndDate"></a>

```python
def reset_end_date() -> None
```

##### `reset_end_date_type` <a name="reset_end_date_type" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetEndDateType"></a>

```python
def reset_end_date_type() -> None
```

##### `reset_ephemeral_storage` <a name="reset_ephemeral_storage" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetEphemeralStorage"></a>

```python
def reset_ephemeral_storage() -> None
```

##### `reset_instance_match_criteria` <a name="reset_instance_match_criteria" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetInstanceMatchCriteria"></a>

```python
def reset_instance_match_criteria() -> None
```

##### `reset_out_post_arn` <a name="reset_out_post_arn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetOutPostArn"></a>

```python
def reset_out_post_arn() -> None
```

##### `reset_placement_group_arn` <a name="reset_placement_group_arn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetPlacementGroupArn"></a>

```python
def reset_placement_group_arn() -> None
```

##### `reset_tag_specifications` <a name="reset_tag_specifications" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetTagSpecifications"></a>

```python
def reset_tag_specifications() -> None
```

##### `reset_tenancy` <a name="reset_tenancy" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetTenancy"></a>

```python
def reset_tenancy() -> None
```

##### `reset_unused_reservation_billing_owner_id` <a name="reset_unused_reservation_billing_owner_id" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.resetUnusedReservationBillingOwnerId"></a>

```python
def reset_unused_reservation_billing_owner_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2CapacityReservation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation

ec2CapacityReservation.Ec2CapacityReservation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation

ec2CapacityReservation.Ec2CapacityReservation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation

ec2CapacityReservation.Ec2CapacityReservation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation

ec2CapacityReservation.Ec2CapacityReservation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2CapacityReservation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2CapacityReservation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2CapacityReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2CapacityReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.availableInstanceCount">available_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.capacityAllocationSet">capacity_allocation_set</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList">Ec2CapacityReservationCapacityAllocationSetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.capacityReservationArn">capacity_reservation_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.capacityReservationFleetId">capacity_reservation_fleet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.capacityReservationId">capacity_reservation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.commitmentInfo">commitment_info</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference">Ec2CapacityReservationCommitmentInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.createDate">create_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.deliveryPreference">delivery_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.reservationType">reservation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.tagSpecifications">tag_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList">Ec2CapacityReservationTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.totalInstanceCount">total_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.availabilityZoneIdInput">availability_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.ebsOptimizedInput">ebs_optimized_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.endDateInput">end_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.endDateTypeInput">end_date_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.ephemeralStorageInput">ephemeral_storage_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instanceCountInput">instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instanceMatchCriteriaInput">instance_match_criteria_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instancePlatformInput">instance_platform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.outPostArnInput">out_post_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.placementGroupArnInput">placement_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.tagSpecificationsInput">tag_specifications_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications">Ec2CapacityReservationTagSpecifications</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.tenancyInput">tenancy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.unusedReservationBillingOwnerIdInput">unused_reservation_billing_owner_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.ebsOptimized">ebs_optimized</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.endDate">end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.endDateType">end_date_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.ephemeralStorage">ephemeral_storage</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instanceMatchCriteria">instance_match_criteria</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instancePlatform">instance_platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.outPostArn">out_post_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.placementGroupArn">placement_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.tenancy">tenancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.unusedReservationBillingOwnerId">unused_reservation_billing_owner_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `available_instance_count`<sup>Required</sup> <a name="available_instance_count" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.availableInstanceCount"></a>

```python
available_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_allocation_set`<sup>Required</sup> <a name="capacity_allocation_set" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.capacityAllocationSet"></a>

```python
capacity_allocation_set: Ec2CapacityReservationCapacityAllocationSetList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList">Ec2CapacityReservationCapacityAllocationSetList</a>

---

##### `capacity_reservation_arn`<sup>Required</sup> <a name="capacity_reservation_arn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.capacityReservationArn"></a>

```python
capacity_reservation_arn: str
```

- *Type:* str

---

##### `capacity_reservation_fleet_id`<sup>Required</sup> <a name="capacity_reservation_fleet_id" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.capacityReservationFleetId"></a>

```python
capacity_reservation_fleet_id: str
```

- *Type:* str

---

##### `capacity_reservation_id`<sup>Required</sup> <a name="capacity_reservation_id" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.capacityReservationId"></a>

```python
capacity_reservation_id: str
```

- *Type:* str

---

##### `commitment_info`<sup>Required</sup> <a name="commitment_info" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.commitmentInfo"></a>

```python
commitment_info: Ec2CapacityReservationCommitmentInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference">Ec2CapacityReservationCommitmentInfoOutputReference</a>

---

##### `create_date`<sup>Required</sup> <a name="create_date" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.createDate"></a>

```python
create_date: str
```

- *Type:* str

---

##### `delivery_preference`<sup>Required</sup> <a name="delivery_preference" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.deliveryPreference"></a>

```python
delivery_preference: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `reservation_type`<sup>Required</sup> <a name="reservation_type" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.reservationType"></a>

```python
reservation_type: str
```

- *Type:* str

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tag_specifications`<sup>Required</sup> <a name="tag_specifications" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.tagSpecifications"></a>

```python
tag_specifications: Ec2CapacityReservationTagSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList">Ec2CapacityReservationTagSpecificationsList</a>

---

##### `total_instance_count`<sup>Required</sup> <a name="total_instance_count" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.totalInstanceCount"></a>

```python
total_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability_zone_id_input`<sup>Optional</sup> <a name="availability_zone_id_input" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.availabilityZoneIdInput"></a>

```python
availability_zone_id_input: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `ebs_optimized_input`<sup>Optional</sup> <a name="ebs_optimized_input" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.ebsOptimizedInput"></a>

```python
ebs_optimized_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `end_date_input`<sup>Optional</sup> <a name="end_date_input" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.endDateInput"></a>

```python
end_date_input: str
```

- *Type:* str

---

##### `end_date_type_input`<sup>Optional</sup> <a name="end_date_type_input" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.endDateTypeInput"></a>

```python
end_date_type_input: str
```

- *Type:* str

---

##### `ephemeral_storage_input`<sup>Optional</sup> <a name="ephemeral_storage_input" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.ephemeralStorageInput"></a>

```python
ephemeral_storage_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `instance_count_input`<sup>Optional</sup> <a name="instance_count_input" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instanceCountInput"></a>

```python
instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_match_criteria_input`<sup>Optional</sup> <a name="instance_match_criteria_input" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instanceMatchCriteriaInput"></a>

```python
instance_match_criteria_input: str
```

- *Type:* str

---

##### `instance_platform_input`<sup>Optional</sup> <a name="instance_platform_input" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instancePlatformInput"></a>

```python
instance_platform_input: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `out_post_arn_input`<sup>Optional</sup> <a name="out_post_arn_input" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.outPostArnInput"></a>

```python
out_post_arn_input: str
```

- *Type:* str

---

##### `placement_group_arn_input`<sup>Optional</sup> <a name="placement_group_arn_input" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.placementGroupArnInput"></a>

```python
placement_group_arn_input: str
```

- *Type:* str

---

##### `tag_specifications_input`<sup>Optional</sup> <a name="tag_specifications_input" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.tagSpecificationsInput"></a>

```python
tag_specifications_input: IResolvable | typing.List[Ec2CapacityReservationTagSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications">Ec2CapacityReservationTagSpecifications</a>]

---

##### `tenancy_input`<sup>Optional</sup> <a name="tenancy_input" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.tenancyInput"></a>

```python
tenancy_input: str
```

- *Type:* str

---

##### `unused_reservation_billing_owner_id_input`<sup>Optional</sup> <a name="unused_reservation_billing_owner_id_input" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.unusedReservationBillingOwnerIdInput"></a>

```python
unused_reservation_billing_owner_id_input: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

---

##### `ebs_optimized`<sup>Required</sup> <a name="ebs_optimized" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.ebsOptimized"></a>

```python
ebs_optimized: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

---

##### `end_date_type`<sup>Required</sup> <a name="end_date_type" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.endDateType"></a>

```python
end_date_type: str
```

- *Type:* str

---

##### `ephemeral_storage`<sup>Required</sup> <a name="ephemeral_storage" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.ephemeralStorage"></a>

```python
ephemeral_storage: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_match_criteria`<sup>Required</sup> <a name="instance_match_criteria" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instanceMatchCriteria"></a>

```python
instance_match_criteria: str
```

- *Type:* str

---

##### `instance_platform`<sup>Required</sup> <a name="instance_platform" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instancePlatform"></a>

```python
instance_platform: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `out_post_arn`<sup>Required</sup> <a name="out_post_arn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.outPostArn"></a>

```python
out_post_arn: str
```

- *Type:* str

---

##### `placement_group_arn`<sup>Required</sup> <a name="placement_group_arn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.placementGroupArn"></a>

```python
placement_group_arn: str
```

- *Type:* str

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.tenancy"></a>

```python
tenancy: str
```

- *Type:* str

---

##### `unused_reservation_billing_owner_id`<sup>Required</sup> <a name="unused_reservation_billing_owner_id" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.unusedReservationBillingOwnerId"></a>

```python
unused_reservation_billing_owner_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2CapacityReservationCapacityAllocationSet <a name="Ec2CapacityReservationCapacityAllocationSet" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSet.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation

ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSet()
```


### Ec2CapacityReservationCommitmentInfo <a name="Ec2CapacityReservationCommitmentInfo" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfo.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation

ec2CapacityReservation.Ec2CapacityReservationCommitmentInfo()
```


### Ec2CapacityReservationConfig <a name="Ec2CapacityReservationConfig" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation

ec2CapacityReservation.Ec2CapacityReservationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_count: typing.Union[int, float],
  instance_platform: str,
  instance_type: str,
  availability_zone: str = None,
  availability_zone_id: str = None,
  ebs_optimized: bool | IResolvable = None,
  end_date: str = None,
  end_date_type: str = None,
  ephemeral_storage: bool | IResolvable = None,
  instance_match_criteria: str = None,
  out_post_arn: str = None,
  placement_group_arn: str = None,
  tag_specifications: IResolvable | typing.List[Ec2CapacityReservationTagSpecifications] = None,
  tenancy: str = None,
  unused_reservation_billing_owner_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#instance_count Ec2CapacityReservation#instance_count}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.instancePlatform">instance_platform</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#instance_platform Ec2CapacityReservation#instance_platform}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#instance_type Ec2CapacityReservation#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#availability_zone Ec2CapacityReservation#availability_zone}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#availability_zone_id Ec2CapacityReservation#availability_zone_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.ebsOptimized">ebs_optimized</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#ebs_optimized Ec2CapacityReservation#ebs_optimized}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.endDate">end_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#end_date Ec2CapacityReservation#end_date}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.endDateType">end_date_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#end_date_type Ec2CapacityReservation#end_date_type}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.ephemeralStorage">ephemeral_storage</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#ephemeral_storage Ec2CapacityReservation#ephemeral_storage}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.instanceMatchCriteria">instance_match_criteria</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#instance_match_criteria Ec2CapacityReservation#instance_match_criteria}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.outPostArn">out_post_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#out_post_arn Ec2CapacityReservation#out_post_arn}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.placementGroupArn">placement_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#placement_group_arn Ec2CapacityReservation#placement_group_arn}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.tagSpecifications">tag_specifications</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications">Ec2CapacityReservationTagSpecifications</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#tag_specifications Ec2CapacityReservation#tag_specifications}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.tenancy">tenancy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#tenancy Ec2CapacityReservation#tenancy}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.unusedReservationBillingOwnerId">unused_reservation_billing_owner_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#unused_reservation_billing_owner_id Ec2CapacityReservation#unused_reservation_billing_owner_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#instance_count Ec2CapacityReservation#instance_count}.

---

##### `instance_platform`<sup>Required</sup> <a name="instance_platform" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.instancePlatform"></a>

```python
instance_platform: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#instance_platform Ec2CapacityReservation#instance_platform}.

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#instance_type Ec2CapacityReservation#instance_type}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#availability_zone Ec2CapacityReservation#availability_zone}.

---

##### `availability_zone_id`<sup>Optional</sup> <a name="availability_zone_id" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#availability_zone_id Ec2CapacityReservation#availability_zone_id}.

---

##### `ebs_optimized`<sup>Optional</sup> <a name="ebs_optimized" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.ebsOptimized"></a>

```python
ebs_optimized: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#ebs_optimized Ec2CapacityReservation#ebs_optimized}.

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#end_date Ec2CapacityReservation#end_date}.

---

##### `end_date_type`<sup>Optional</sup> <a name="end_date_type" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.endDateType"></a>

```python
end_date_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#end_date_type Ec2CapacityReservation#end_date_type}.

---

##### `ephemeral_storage`<sup>Optional</sup> <a name="ephemeral_storage" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.ephemeralStorage"></a>

```python
ephemeral_storage: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#ephemeral_storage Ec2CapacityReservation#ephemeral_storage}.

---

##### `instance_match_criteria`<sup>Optional</sup> <a name="instance_match_criteria" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.instanceMatchCriteria"></a>

```python
instance_match_criteria: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#instance_match_criteria Ec2CapacityReservation#instance_match_criteria}.

---

##### `out_post_arn`<sup>Optional</sup> <a name="out_post_arn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.outPostArn"></a>

```python
out_post_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#out_post_arn Ec2CapacityReservation#out_post_arn}.

---

##### `placement_group_arn`<sup>Optional</sup> <a name="placement_group_arn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.placementGroupArn"></a>

```python
placement_group_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#placement_group_arn Ec2CapacityReservation#placement_group_arn}.

---

##### `tag_specifications`<sup>Optional</sup> <a name="tag_specifications" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.tagSpecifications"></a>

```python
tag_specifications: IResolvable | typing.List[Ec2CapacityReservationTagSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications">Ec2CapacityReservationTagSpecifications</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#tag_specifications Ec2CapacityReservation#tag_specifications}.

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.tenancy"></a>

```python
tenancy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#tenancy Ec2CapacityReservation#tenancy}.

---

##### `unused_reservation_billing_owner_id`<sup>Optional</sup> <a name="unused_reservation_billing_owner_id" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationConfig.property.unusedReservationBillingOwnerId"></a>

```python
unused_reservation_billing_owner_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#unused_reservation_billing_owner_id Ec2CapacityReservation#unused_reservation_billing_owner_id}.

---

### Ec2CapacityReservationTagSpecifications <a name="Ec2CapacityReservationTagSpecifications" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation

ec2CapacityReservation.Ec2CapacityReservationTagSpecifications(
  resource_type: str = None,
  tags: IResolvable | typing.List[Ec2CapacityReservationTagSpecificationsTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#resource_type Ec2CapacityReservation#resource_type}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags">Ec2CapacityReservationTagSpecificationsTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#tags Ec2CapacityReservation#tags}. |

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#resource_type Ec2CapacityReservation#resource_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2CapacityReservationTagSpecificationsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags">Ec2CapacityReservationTagSpecificationsTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#tags Ec2CapacityReservation#tags}.

---

### Ec2CapacityReservationTagSpecificationsTags <a name="Ec2CapacityReservationTagSpecificationsTags" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation

ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#key Ec2CapacityReservation#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#value Ec2CapacityReservation#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#key Ec2CapacityReservation#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_reservation#value Ec2CapacityReservation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2CapacityReservationCapacityAllocationSetList <a name="Ec2CapacityReservationCapacityAllocationSetList" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation

ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2CapacityReservationCapacityAllocationSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### Ec2CapacityReservationCapacityAllocationSetOutputReference <a name="Ec2CapacityReservationCapacityAllocationSetOutputReference" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation

ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.property.allocationType">allocation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSet">Ec2CapacityReservationCapacityAllocationSet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocation_type`<sup>Required</sup> <a name="allocation_type" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.property.allocationType"></a>

```python
allocation_type: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSetOutputReference.property.internalValue"></a>

```python
internal_value: Ec2CapacityReservationCapacityAllocationSet
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCapacityAllocationSet">Ec2CapacityReservationCapacityAllocationSet</a>

---


### Ec2CapacityReservationCommitmentInfoOutputReference <a name="Ec2CapacityReservationCommitmentInfoOutputReference" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation

ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.property.commitmentEndDate">commitment_end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.property.committedInstanceCount">committed_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfo">Ec2CapacityReservationCommitmentInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `commitment_end_date`<sup>Required</sup> <a name="commitment_end_date" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.property.commitmentEndDate"></a>

```python
commitment_end_date: str
```

- *Type:* str

---

##### `committed_instance_count`<sup>Required</sup> <a name="committed_instance_count" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.property.committedInstanceCount"></a>

```python
committed_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfoOutputReference.property.internalValue"></a>

```python
internal_value: Ec2CapacityReservationCommitmentInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationCommitmentInfo">Ec2CapacityReservationCommitmentInfo</a>

---


### Ec2CapacityReservationTagSpecificationsList <a name="Ec2CapacityReservationTagSpecificationsList" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation

ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2CapacityReservationTagSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications">Ec2CapacityReservationTagSpecifications</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2CapacityReservationTagSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications">Ec2CapacityReservationTagSpecifications</a>]

---


### Ec2CapacityReservationTagSpecificationsOutputReference <a name="Ec2CapacityReservationTagSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation

ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.resetResourceType">reset_resource_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2CapacityReservationTagSpecificationsTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags">Ec2CapacityReservationTagSpecificationsTags</a>]

---

##### `reset_resource_type` <a name="reset_resource_type" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.resetResourceType"></a>

```python
def reset_resource_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList">Ec2CapacityReservationTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags">Ec2CapacityReservationTagSpecificationsTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications">Ec2CapacityReservationTagSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.property.tags"></a>

```python
tags: Ec2CapacityReservationTagSpecificationsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList">Ec2CapacityReservationTagSpecificationsTagsList</a>

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2CapacityReservationTagSpecificationsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags">Ec2CapacityReservationTagSpecificationsTags</a>]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2CapacityReservationTagSpecifications
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecifications">Ec2CapacityReservationTagSpecifications</a>

---


### Ec2CapacityReservationTagSpecificationsTagsList <a name="Ec2CapacityReservationTagSpecificationsTagsList" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation

ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2CapacityReservationTagSpecificationsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags">Ec2CapacityReservationTagSpecificationsTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2CapacityReservationTagSpecificationsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags">Ec2CapacityReservationTagSpecificationsTags</a>]

---


### Ec2CapacityReservationTagSpecificationsTagsOutputReference <a name="Ec2CapacityReservationTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_capacity_reservation

ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags">Ec2CapacityReservationTagSpecificationsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2CapacityReservationTagSpecificationsTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2CapacityReservation.Ec2CapacityReservationTagSpecificationsTags">Ec2CapacityReservationTagSpecificationsTags</a>

---



