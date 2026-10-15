# `rdsDeployment` Submodule <a name="`rdsDeployment` Submodule" id="@cdktn/provider-awscc.rdsDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDeployment <a name="RdsDeployment" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/rds_deployment awscc_rds_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer"></a>

```python
from cdktn_provider_awscc import rds_deployment

rdsDeployment.RdsDeployment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  blue_green_deployment_name: str,
  source: str,
  tags: IResolvable | typing.List[RdsDeploymentTags] = None,
  target_allocated_storage: typing.Union[int, float] = None,
  target_db_cluster_parameter_group_name: str = None,
  target_db_instance_class: str = None,
  target_db_parameter_group_name: str = None,
  target_engine_version: str = None,
  target_iops: typing.Union[int, float] = None,
  target_storage_throughput: typing.Union[int, float] = None,
  target_storage_type: str = None,
  upgrade_target_storage_config: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.blueGreenDeploymentName">blue_green_deployment_name</a></code> | <code>str</code> | The name of the Blue/Green Deployment. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.source">source</a></code> | <code>str</code> | The ARN of the source production database. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a>]</code> | The tags assigned to the Blue/Green Deployment. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetAllocatedStorage">target_allocated_storage</a></code> | <code>typing.Union[int, float]</code> | The allocated storage size in GiB for the target DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetDbClusterParameterGroupName">target_db_cluster_parameter_group_name</a></code> | <code>str</code> | The DB cluster parameter group for the target Aurora DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetDbInstanceClass">target_db_instance_class</a></code> | <code>str</code> | The DB instance class for target RDS DB instances. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetDbParameterGroupName">target_db_parameter_group_name</a></code> | <code>str</code> | The DB parameter group for the target DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetEngineVersion">target_engine_version</a></code> | <code>str</code> | The DB engine version for the target database. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetIops">target_iops</a></code> | <code>typing.Union[int, float]</code> | The Provisioned IOPS value for the target DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetStorageThroughput">target_storage_throughput</a></code> | <code>typing.Union[int, float]</code> | The storage throughput value for the target DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetStorageType">target_storage_type</a></code> | <code>str</code> | The storage type for the target DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.upgradeTargetStorageConfig">upgrade_target_storage_config</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to upgrade the storage file system configuration on the target database. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `blue_green_deployment_name`<sup>Required</sup> <a name="blue_green_deployment_name" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.blueGreenDeploymentName"></a>

- *Type:* str

The name of the Blue/Green Deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/rds_deployment#blue_green_deployment_name RdsDeployment#blue_green_deployment_name}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.source"></a>

- *Type:* str

The ARN of the source production database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/rds_deployment#source RdsDeployment#source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a>]

The tags assigned to the Blue/Green Deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/rds_deployment#tags RdsDeployment#tags}

---

##### `target_allocated_storage`<sup>Optional</sup> <a name="target_allocated_storage" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetAllocatedStorage"></a>

- *Type:* typing.Union[int, float]

The allocated storage size in GiB for the target DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/rds_deployment#target_allocated_storage RdsDeployment#target_allocated_storage}

---

##### `target_db_cluster_parameter_group_name`<sup>Optional</sup> <a name="target_db_cluster_parameter_group_name" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetDbClusterParameterGroupName"></a>

- *Type:* str

The DB cluster parameter group for the target Aurora DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/rds_deployment#target_db_cluster_parameter_group_name RdsDeployment#target_db_cluster_parameter_group_name}

---

##### `target_db_instance_class`<sup>Optional</sup> <a name="target_db_instance_class" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetDbInstanceClass"></a>

- *Type:* str

The DB instance class for target RDS DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/rds_deployment#target_db_instance_class RdsDeployment#target_db_instance_class}

---

##### `target_db_parameter_group_name`<sup>Optional</sup> <a name="target_db_parameter_group_name" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetDbParameterGroupName"></a>

- *Type:* str

The DB parameter group for the target DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/rds_deployment#target_db_parameter_group_name RdsDeployment#target_db_parameter_group_name}

---

##### `target_engine_version`<sup>Optional</sup> <a name="target_engine_version" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetEngineVersion"></a>

- *Type:* str

The DB engine version for the target database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/rds_deployment#target_engine_version RdsDeployment#target_engine_version}

---

##### `target_iops`<sup>Optional</sup> <a name="target_iops" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetIops"></a>

- *Type:* typing.Union[int, float]

The Provisioned IOPS value for the target DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/rds_deployment#target_iops RdsDeployment#target_iops}

---

##### `target_storage_throughput`<sup>Optional</sup> <a name="target_storage_throughput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetStorageThroughput"></a>

- *Type:* typing.Union[int, float]

The storage throughput value for the target DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/rds_deployment#target_storage_throughput RdsDeployment#target_storage_throughput}

---

##### `target_storage_type`<sup>Optional</sup> <a name="target_storage_type" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetStorageType"></a>

- *Type:* str

The storage type for the target DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/rds_deployment#target_storage_type RdsDeployment#target_storage_type}

---

##### `upgrade_target_storage_config`<sup>Optional</sup> <a name="upgrade_target_storage_config" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.upgradeTargetStorageConfig"></a>

- *Type:* bool | cdktn.IResolvable

Whether to upgrade the storage file system configuration on the target database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/rds_deployment#upgrade_target_storage_config RdsDeployment#upgrade_target_storage_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetAllocatedStorage">reset_target_allocated_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetDbClusterParameterGroupName">reset_target_db_cluster_parameter_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetDbInstanceClass">reset_target_db_instance_class</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetDbParameterGroupName">reset_target_db_parameter_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetEngineVersion">reset_target_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetIops">reset_target_iops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetStorageThroughput">reset_target_storage_throughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetStorageType">reset_target_storage_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetUpgradeTargetStorageConfig">reset_upgrade_target_storage_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[RdsDeploymentTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_target_allocated_storage` <a name="reset_target_allocated_storage" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetAllocatedStorage"></a>

```python
def reset_target_allocated_storage() -> None
```

##### `reset_target_db_cluster_parameter_group_name` <a name="reset_target_db_cluster_parameter_group_name" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetDbClusterParameterGroupName"></a>

```python
def reset_target_db_cluster_parameter_group_name() -> None
```

##### `reset_target_db_instance_class` <a name="reset_target_db_instance_class" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetDbInstanceClass"></a>

```python
def reset_target_db_instance_class() -> None
```

##### `reset_target_db_parameter_group_name` <a name="reset_target_db_parameter_group_name" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetDbParameterGroupName"></a>

```python
def reset_target_db_parameter_group_name() -> None
```

##### `reset_target_engine_version` <a name="reset_target_engine_version" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetEngineVersion"></a>

```python
def reset_target_engine_version() -> None
```

##### `reset_target_iops` <a name="reset_target_iops" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetIops"></a>

```python
def reset_target_iops() -> None
```

##### `reset_target_storage_throughput` <a name="reset_target_storage_throughput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetStorageThroughput"></a>

```python
def reset_target_storage_throughput() -> None
```

##### `reset_target_storage_type` <a name="reset_target_storage_type" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetStorageType"></a>

```python
def reset_target_storage_type() -> None
```

##### `reset_upgrade_target_storage_config` <a name="reset_upgrade_target_storage_config" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetUpgradeTargetStorageConfig"></a>

```python
def reset_upgrade_target_storage_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RdsDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.isConstruct"></a>

```python
from cdktn_provider_awscc import rds_deployment

rdsDeployment.RdsDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import rds_deployment

rdsDeployment.RdsDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.isTerraformResource"></a>

```python
from cdktn_provider_awscc import rds_deployment

rdsDeployment.RdsDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import rds_deployment

rdsDeployment.RdsDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RdsDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RdsDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RdsDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/rds_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RdsDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.blueGreenDeploymentIdentifier">blue_green_deployment_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.switchoverDetails">switchover_details</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList">RdsDeploymentSwitchoverDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList">RdsDeploymentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.tasks">tasks</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList">RdsDeploymentTasksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.blueGreenDeploymentNameInput">blue_green_deployment_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetAllocatedStorageInput">target_allocated_storage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbClusterParameterGroupNameInput">target_db_cluster_parameter_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbInstanceClassInput">target_db_instance_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbParameterGroupNameInput">target_db_parameter_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetEngineVersionInput">target_engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetIopsInput">target_iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetStorageThroughputInput">target_storage_throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetStorageTypeInput">target_storage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.upgradeTargetStorageConfigInput">upgrade_target_storage_config_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.blueGreenDeploymentName">blue_green_deployment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetAllocatedStorage">target_allocated_storage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbClusterParameterGroupName">target_db_cluster_parameter_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbInstanceClass">target_db_instance_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbParameterGroupName">target_db_parameter_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetEngineVersion">target_engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetIops">target_iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetStorageThroughput">target_storage_throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetStorageType">target_storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.upgradeTargetStorageConfig">upgrade_target_storage_config</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `blue_green_deployment_identifier`<sup>Required</sup> <a name="blue_green_deployment_identifier" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.blueGreenDeploymentIdentifier"></a>

```python
blue_green_deployment_identifier: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `switchover_details`<sup>Required</sup> <a name="switchover_details" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.switchoverDetails"></a>

```python
switchover_details: RdsDeploymentSwitchoverDetailsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList">RdsDeploymentSwitchoverDetailsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.tags"></a>

```python
tags: RdsDeploymentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList">RdsDeploymentTagsList</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.tasks"></a>

```python
tasks: RdsDeploymentTasksList
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList">RdsDeploymentTasksList</a>

---

##### `blue_green_deployment_name_input`<sup>Optional</sup> <a name="blue_green_deployment_name_input" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.blueGreenDeploymentNameInput"></a>

```python
blue_green_deployment_name_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[RdsDeploymentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a>]

---

##### `target_allocated_storage_input`<sup>Optional</sup> <a name="target_allocated_storage_input" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetAllocatedStorageInput"></a>

```python
target_allocated_storage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_db_cluster_parameter_group_name_input`<sup>Optional</sup> <a name="target_db_cluster_parameter_group_name_input" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbClusterParameterGroupNameInput"></a>

```python
target_db_cluster_parameter_group_name_input: str
```

- *Type:* str

---

##### `target_db_instance_class_input`<sup>Optional</sup> <a name="target_db_instance_class_input" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbInstanceClassInput"></a>

```python
target_db_instance_class_input: str
```

- *Type:* str

---

##### `target_db_parameter_group_name_input`<sup>Optional</sup> <a name="target_db_parameter_group_name_input" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbParameterGroupNameInput"></a>

```python
target_db_parameter_group_name_input: str
```

- *Type:* str

---

##### `target_engine_version_input`<sup>Optional</sup> <a name="target_engine_version_input" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetEngineVersionInput"></a>

```python
target_engine_version_input: str
```

- *Type:* str

---

##### `target_iops_input`<sup>Optional</sup> <a name="target_iops_input" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetIopsInput"></a>

```python
target_iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_storage_throughput_input`<sup>Optional</sup> <a name="target_storage_throughput_input" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetStorageThroughputInput"></a>

```python
target_storage_throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_storage_type_input`<sup>Optional</sup> <a name="target_storage_type_input" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetStorageTypeInput"></a>

```python
target_storage_type_input: str
```

- *Type:* str

---

##### `upgrade_target_storage_config_input`<sup>Optional</sup> <a name="upgrade_target_storage_config_input" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.upgradeTargetStorageConfigInput"></a>

```python
upgrade_target_storage_config_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `blue_green_deployment_name`<sup>Required</sup> <a name="blue_green_deployment_name" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.blueGreenDeploymentName"></a>

```python
blue_green_deployment_name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `target_allocated_storage`<sup>Required</sup> <a name="target_allocated_storage" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetAllocatedStorage"></a>

```python
target_allocated_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_db_cluster_parameter_group_name`<sup>Required</sup> <a name="target_db_cluster_parameter_group_name" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbClusterParameterGroupName"></a>

```python
target_db_cluster_parameter_group_name: str
```

- *Type:* str

---

##### `target_db_instance_class`<sup>Required</sup> <a name="target_db_instance_class" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbInstanceClass"></a>

```python
target_db_instance_class: str
```

- *Type:* str

---

##### `target_db_parameter_group_name`<sup>Required</sup> <a name="target_db_parameter_group_name" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbParameterGroupName"></a>

```python
target_db_parameter_group_name: str
```

- *Type:* str

---

##### `target_engine_version`<sup>Required</sup> <a name="target_engine_version" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetEngineVersion"></a>

```python
target_engine_version: str
```

- *Type:* str

---

##### `target_iops`<sup>Required</sup> <a name="target_iops" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetIops"></a>

```python
target_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_storage_throughput`<sup>Required</sup> <a name="target_storage_throughput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetStorageThroughput"></a>

```python
target_storage_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_storage_type`<sup>Required</sup> <a name="target_storage_type" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetStorageType"></a>

```python
target_storage_type: str
```

- *Type:* str

---

##### `upgrade_target_storage_config`<sup>Required</sup> <a name="upgrade_target_storage_config" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.upgradeTargetStorageConfig"></a>

```python
upgrade_target_storage_config: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDeploymentConfig <a name="RdsDeploymentConfig" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import rds_deployment

rdsDeployment.RdsDeploymentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  blue_green_deployment_name: str,
  source: str,
  tags: IResolvable | typing.List[RdsDeploymentTags] = None,
  target_allocated_storage: typing.Union[int, float] = None,
  target_db_cluster_parameter_group_name: str = None,
  target_db_instance_class: str = None,
  target_db_parameter_group_name: str = None,
  target_engine_version: str = None,
  target_iops: typing.Union[int, float] = None,
  target_storage_throughput: typing.Union[int, float] = None,
  target_storage_type: str = None,
  upgrade_target_storage_config: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.blueGreenDeploymentName">blue_green_deployment_name</a></code> | <code>str</code> | The name of the Blue/Green Deployment. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.source">source</a></code> | <code>str</code> | The ARN of the source production database. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a>]</code> | The tags assigned to the Blue/Green Deployment. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetAllocatedStorage">target_allocated_storage</a></code> | <code>typing.Union[int, float]</code> | The allocated storage size in GiB for the target DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetDbClusterParameterGroupName">target_db_cluster_parameter_group_name</a></code> | <code>str</code> | The DB cluster parameter group for the target Aurora DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetDbInstanceClass">target_db_instance_class</a></code> | <code>str</code> | The DB instance class for target RDS DB instances. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetDbParameterGroupName">target_db_parameter_group_name</a></code> | <code>str</code> | The DB parameter group for the target DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetEngineVersion">target_engine_version</a></code> | <code>str</code> | The DB engine version for the target database. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetIops">target_iops</a></code> | <code>typing.Union[int, float]</code> | The Provisioned IOPS value for the target DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetStorageThroughput">target_storage_throughput</a></code> | <code>typing.Union[int, float]</code> | The storage throughput value for the target DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetStorageType">target_storage_type</a></code> | <code>str</code> | The storage type for the target DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.upgradeTargetStorageConfig">upgrade_target_storage_config</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to upgrade the storage file system configuration on the target database. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `blue_green_deployment_name`<sup>Required</sup> <a name="blue_green_deployment_name" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.blueGreenDeploymentName"></a>

```python
blue_green_deployment_name: str
```

- *Type:* str

The name of the Blue/Green Deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/rds_deployment#blue_green_deployment_name RdsDeployment#blue_green_deployment_name}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.source"></a>

```python
source: str
```

- *Type:* str

The ARN of the source production database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/rds_deployment#source RdsDeployment#source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[RdsDeploymentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a>]

The tags assigned to the Blue/Green Deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/rds_deployment#tags RdsDeployment#tags}

---

##### `target_allocated_storage`<sup>Optional</sup> <a name="target_allocated_storage" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetAllocatedStorage"></a>

```python
target_allocated_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The allocated storage size in GiB for the target DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/rds_deployment#target_allocated_storage RdsDeployment#target_allocated_storage}

---

##### `target_db_cluster_parameter_group_name`<sup>Optional</sup> <a name="target_db_cluster_parameter_group_name" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetDbClusterParameterGroupName"></a>

```python
target_db_cluster_parameter_group_name: str
```

- *Type:* str

The DB cluster parameter group for the target Aurora DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/rds_deployment#target_db_cluster_parameter_group_name RdsDeployment#target_db_cluster_parameter_group_name}

---

##### `target_db_instance_class`<sup>Optional</sup> <a name="target_db_instance_class" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetDbInstanceClass"></a>

```python
target_db_instance_class: str
```

- *Type:* str

The DB instance class for target RDS DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/rds_deployment#target_db_instance_class RdsDeployment#target_db_instance_class}

---

##### `target_db_parameter_group_name`<sup>Optional</sup> <a name="target_db_parameter_group_name" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetDbParameterGroupName"></a>

```python
target_db_parameter_group_name: str
```

- *Type:* str

The DB parameter group for the target DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/rds_deployment#target_db_parameter_group_name RdsDeployment#target_db_parameter_group_name}

---

##### `target_engine_version`<sup>Optional</sup> <a name="target_engine_version" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetEngineVersion"></a>

```python
target_engine_version: str
```

- *Type:* str

The DB engine version for the target database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/rds_deployment#target_engine_version RdsDeployment#target_engine_version}

---

##### `target_iops`<sup>Optional</sup> <a name="target_iops" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetIops"></a>

```python
target_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The Provisioned IOPS value for the target DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/rds_deployment#target_iops RdsDeployment#target_iops}

---

##### `target_storage_throughput`<sup>Optional</sup> <a name="target_storage_throughput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetStorageThroughput"></a>

```python
target_storage_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The storage throughput value for the target DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/rds_deployment#target_storage_throughput RdsDeployment#target_storage_throughput}

---

##### `target_storage_type`<sup>Optional</sup> <a name="target_storage_type" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetStorageType"></a>

```python
target_storage_type: str
```

- *Type:* str

The storage type for the target DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/rds_deployment#target_storage_type RdsDeployment#target_storage_type}

---

##### `upgrade_target_storage_config`<sup>Optional</sup> <a name="upgrade_target_storage_config" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.upgradeTargetStorageConfig"></a>

```python
upgrade_target_storage_config: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to upgrade the storage file system configuration on the target database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/rds_deployment#upgrade_target_storage_config RdsDeployment#upgrade_target_storage_config}

---

### RdsDeploymentSwitchoverDetails <a name="RdsDeploymentSwitchoverDetails" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetails.Initializer"></a>

```python
from cdktn_provider_awscc import rds_deployment

rdsDeployment.RdsDeploymentSwitchoverDetails()
```


### RdsDeploymentTags <a name="RdsDeploymentTags" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags.Initializer"></a>

```python
from cdktn_provider_awscc import rds_deployment

rdsDeployment.RdsDeploymentTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags.property.value">value</a></code> | <code>str</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/rds_deployment#key RdsDeployment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/rds_deployment#value RdsDeployment#value}

---

### RdsDeploymentTasks <a name="RdsDeploymentTasks" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasks.Initializer"></a>

```python
from cdktn_provider_awscc import rds_deployment

rdsDeployment.RdsDeploymentTasks()
```


## Classes <a name="Classes" id="Classes"></a>

### RdsDeploymentSwitchoverDetailsList <a name="RdsDeploymentSwitchoverDetailsList" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.Initializer"></a>

```python
from cdktn_provider_awscc import rds_deployment

rdsDeployment.RdsDeploymentSwitchoverDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RdsDeploymentSwitchoverDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### RdsDeploymentSwitchoverDetailsOutputReference <a name="RdsDeploymentSwitchoverDetailsOutputReference" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rds_deployment

rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.sourceMember">source_member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.switchoverDetailStatus">switchover_detail_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.targetMember">target_member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetails">RdsDeploymentSwitchoverDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_member`<sup>Required</sup> <a name="source_member" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.sourceMember"></a>

```python
source_member: str
```

- *Type:* str

---

##### `switchover_detail_status`<sup>Required</sup> <a name="switchover_detail_status" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.switchoverDetailStatus"></a>

```python
switchover_detail_status: str
```

- *Type:* str

---

##### `target_member`<sup>Required</sup> <a name="target_member" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.targetMember"></a>

```python
target_member: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.internalValue"></a>

```python
internal_value: RdsDeploymentSwitchoverDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetails">RdsDeploymentSwitchoverDetails</a>

---


### RdsDeploymentTagsList <a name="RdsDeploymentTagsList" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import rds_deployment

rdsDeployment.RdsDeploymentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RdsDeploymentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RdsDeploymentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a>]

---


### RdsDeploymentTagsOutputReference <a name="RdsDeploymentTagsOutputReference" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rds_deployment

rdsDeployment.RdsDeploymentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RdsDeploymentTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a>

---


### RdsDeploymentTasksList <a name="RdsDeploymentTasksList" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.Initializer"></a>

```python
from cdktn_provider_awscc import rds_deployment

rdsDeployment.RdsDeploymentTasksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RdsDeploymentTasksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### RdsDeploymentTasksOutputReference <a name="RdsDeploymentTasksOutputReference" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rds_deployment

rdsDeployment.RdsDeploymentTasksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.property.taskName">task_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.property.taskStatus">task_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasks">RdsDeploymentTasks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `task_name`<sup>Required</sup> <a name="task_name" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.property.taskName"></a>

```python
task_name: str
```

- *Type:* str

---

##### `task_status`<sup>Required</sup> <a name="task_status" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.property.taskStatus"></a>

```python
task_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.property.internalValue"></a>

```python
internal_value: RdsDeploymentTasks
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasks">RdsDeploymentTasks</a>

---



