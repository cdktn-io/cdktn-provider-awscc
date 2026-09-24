# `drsReplicationConfigurationTemplate` Submodule <a name="`drsReplicationConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DrsReplicationConfigurationTemplate <a name="DrsReplicationConfigurationTemplate" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template awscc_drs_replication_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import drs_replication_configuration_template

drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bandwidth_throttling: typing.Union[int, float],
  ebs_encryption: str,
  pit_policy: IResolvable | typing.List[DrsReplicationConfigurationTemplatePitPolicy],
  replication_servers_security_groups_i_ds: typing.List[str],
  staging_area_subnet_id: str,
  staging_area_tags: typing.Mapping[str],
  associate_default_security_group: bool | IResolvable = None,
  auto_replicate_new_disks: bool | IResolvable = None,
  create_public_ip: bool | IResolvable = None,
  data_plane_routing: str = None,
  default_large_staging_disk_type: str = None,
  ebs_encryption_key_arn: str = None,
  internet_protocol: str = None,
  replication_server_instance_type: str = None,
  tags: IResolvable | typing.List[DrsReplicationConfigurationTemplateTags] = None,
  use_dedicated_replication_server: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.bandwidthThrottling">bandwidth_throttling</a></code> | <code>typing.Union[int, float]</code> | Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.ebsEncryption">ebs_encryption</a></code> | <code>str</code> | The type of EBS encryption to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.pitPolicy">pit_policy</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>]</code> | The Point in time (PIT) policy to manage snapshots taken during replication. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.replicationServersSecurityGroupsIDs">replication_servers_security_groups_i_ds</a></code> | <code>typing.List[str]</code> | The security group IDs that will be used by the replication server. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.stagingAreaSubnetId">staging_area_subnet_id</a></code> | <code>str</code> | The subnet to be used by the replication staging area. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.stagingAreaTags">staging_area_tags</a></code> | <code>typing.Mapping[str]</code> | A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.associateDefaultSecurityGroup">associate_default_security_group</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.autoReplicateNewDisks">auto_replicate_new_disks</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to allow the AWS replication agent to automatically replicate newly added disks. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.createPublicIp">create_public_ip</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to create a Public IP for the Recovery Instance by default. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.dataPlaneRouting">data_plane_routing</a></code> | <code>str</code> | The data plane routing mechanism that will be used for replication. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.defaultLargeStagingDiskType">default_large_staging_disk_type</a></code> | <code>str</code> | The Staging Disk EBS volume type to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.ebsEncryptionKeyArn">ebs_encryption_key_arn</a></code> | <code>str</code> | The ARN of the EBS encryption key to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.internetProtocol">internet_protocol</a></code> | <code>str</code> | Which version of the Internet Protocol to use for replication of data. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.replicationServerInstanceType">replication_server_instance_type</a></code> | <code>str</code> | The instance type to be used for the replication server. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>]</code> | A set of tags to be associated with the Replication Configuration Template resource. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.useDedicatedReplicationServer">use_dedicated_replication_server</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to use a dedicated Replication Server in the replication staging area. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bandwidth_throttling`<sup>Required</sup> <a name="bandwidth_throttling" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.bandwidthThrottling"></a>

- *Type:* typing.Union[int, float]

Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#bandwidth_throttling DrsReplicationConfigurationTemplate#bandwidth_throttling}

---

##### `ebs_encryption`<sup>Required</sup> <a name="ebs_encryption" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.ebsEncryption"></a>

- *Type:* str

The type of EBS encryption to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#ebs_encryption DrsReplicationConfigurationTemplate#ebs_encryption}

---

##### `pit_policy`<sup>Required</sup> <a name="pit_policy" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.pitPolicy"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>]

The Point in time (PIT) policy to manage snapshots taken during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#pit_policy DrsReplicationConfigurationTemplate#pit_policy}

---

##### `replication_servers_security_groups_i_ds`<sup>Required</sup> <a name="replication_servers_security_groups_i_ds" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.replicationServersSecurityGroupsIDs"></a>

- *Type:* typing.List[str]

The security group IDs that will be used by the replication server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#replication_servers_security_groups_i_ds DrsReplicationConfigurationTemplate#replication_servers_security_groups_i_ds}

---

##### `staging_area_subnet_id`<sup>Required</sup> <a name="staging_area_subnet_id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.stagingAreaSubnetId"></a>

- *Type:* str

The subnet to be used by the replication staging area.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#staging_area_subnet_id DrsReplicationConfigurationTemplate#staging_area_subnet_id}

---

##### `staging_area_tags`<sup>Required</sup> <a name="staging_area_tags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.stagingAreaTags"></a>

- *Type:* typing.Mapping[str]

A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#staging_area_tags DrsReplicationConfigurationTemplate#staging_area_tags}

---

##### `associate_default_security_group`<sup>Optional</sup> <a name="associate_default_security_group" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.associateDefaultSecurityGroup"></a>

- *Type:* bool | cdktn.IResolvable

Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#associate_default_security_group DrsReplicationConfigurationTemplate#associate_default_security_group}

---

##### `auto_replicate_new_disks`<sup>Optional</sup> <a name="auto_replicate_new_disks" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.autoReplicateNewDisks"></a>

- *Type:* bool | cdktn.IResolvable

Whether to allow the AWS replication agent to automatically replicate newly added disks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#auto_replicate_new_disks DrsReplicationConfigurationTemplate#auto_replicate_new_disks}

---

##### `create_public_ip`<sup>Optional</sup> <a name="create_public_ip" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.createPublicIp"></a>

- *Type:* bool | cdktn.IResolvable

Whether to create a Public IP for the Recovery Instance by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#create_public_ip DrsReplicationConfigurationTemplate#create_public_ip}

---

##### `data_plane_routing`<sup>Optional</sup> <a name="data_plane_routing" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.dataPlaneRouting"></a>

- *Type:* str

The data plane routing mechanism that will be used for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#data_plane_routing DrsReplicationConfigurationTemplate#data_plane_routing}

---

##### `default_large_staging_disk_type`<sup>Optional</sup> <a name="default_large_staging_disk_type" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.defaultLargeStagingDiskType"></a>

- *Type:* str

The Staging Disk EBS volume type to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#default_large_staging_disk_type DrsReplicationConfigurationTemplate#default_large_staging_disk_type}

---

##### `ebs_encryption_key_arn`<sup>Optional</sup> <a name="ebs_encryption_key_arn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.ebsEncryptionKeyArn"></a>

- *Type:* str

The ARN of the EBS encryption key to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#ebs_encryption_key_arn DrsReplicationConfigurationTemplate#ebs_encryption_key_arn}

---

##### `internet_protocol`<sup>Optional</sup> <a name="internet_protocol" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.internetProtocol"></a>

- *Type:* str

Which version of the Internet Protocol to use for replication of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#internet_protocol DrsReplicationConfigurationTemplate#internet_protocol}

---

##### `replication_server_instance_type`<sup>Optional</sup> <a name="replication_server_instance_type" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.replicationServerInstanceType"></a>

- *Type:* str

The instance type to be used for the replication server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#replication_server_instance_type DrsReplicationConfigurationTemplate#replication_server_instance_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>]

A set of tags to be associated with the Replication Configuration Template resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#tags DrsReplicationConfigurationTemplate#tags}

---

##### `use_dedicated_replication_server`<sup>Optional</sup> <a name="use_dedicated_replication_server" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.useDedicatedReplicationServer"></a>

- *Type:* bool | cdktn.IResolvable

Whether to use a dedicated Replication Server in the replication staging area.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#use_dedicated_replication_server DrsReplicationConfigurationTemplate#use_dedicated_replication_server}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.putPitPolicy">put_pit_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetAssociateDefaultSecurityGroup">reset_associate_default_security_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetAutoReplicateNewDisks">reset_auto_replicate_new_disks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetCreatePublicIp">reset_create_public_ip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetDataPlaneRouting">reset_data_plane_routing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetDefaultLargeStagingDiskType">reset_default_large_staging_disk_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetEbsEncryptionKeyArn">reset_ebs_encryption_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetInternetProtocol">reset_internet_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetReplicationServerInstanceType">reset_replication_server_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetUseDedicatedReplicationServer">reset_use_dedicated_replication_server</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_pit_policy` <a name="put_pit_policy" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.putPitPolicy"></a>

```python
def put_pit_policy(
  value: IResolvable | typing.List[DrsReplicationConfigurationTemplatePitPolicy]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.putPitPolicy.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DrsReplicationConfigurationTemplateTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>]

---

##### `reset_associate_default_security_group` <a name="reset_associate_default_security_group" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetAssociateDefaultSecurityGroup"></a>

```python
def reset_associate_default_security_group() -> None
```

##### `reset_auto_replicate_new_disks` <a name="reset_auto_replicate_new_disks" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetAutoReplicateNewDisks"></a>

```python
def reset_auto_replicate_new_disks() -> None
```

##### `reset_create_public_ip` <a name="reset_create_public_ip" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetCreatePublicIp"></a>

```python
def reset_create_public_ip() -> None
```

##### `reset_data_plane_routing` <a name="reset_data_plane_routing" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetDataPlaneRouting"></a>

```python
def reset_data_plane_routing() -> None
```

##### `reset_default_large_staging_disk_type` <a name="reset_default_large_staging_disk_type" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetDefaultLargeStagingDiskType"></a>

```python
def reset_default_large_staging_disk_type() -> None
```

##### `reset_ebs_encryption_key_arn` <a name="reset_ebs_encryption_key_arn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetEbsEncryptionKeyArn"></a>

```python
def reset_ebs_encryption_key_arn() -> None
```

##### `reset_internet_protocol` <a name="reset_internet_protocol" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetInternetProtocol"></a>

```python
def reset_internet_protocol() -> None
```

##### `reset_replication_server_instance_type` <a name="reset_replication_server_instance_type" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetReplicationServerInstanceType"></a>

```python
def reset_replication_server_instance_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_use_dedicated_replication_server` <a name="reset_use_dedicated_replication_server" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetUseDedicatedReplicationServer"></a>

```python
def reset_use_dedicated_replication_server() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DrsReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import drs_replication_configuration_template

drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import drs_replication_configuration_template

drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformResource"></a>

```python
from cdktn_provider_awscc import drs_replication_configuration_template

drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import drs_replication_configuration_template

drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DrsReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DrsReplicationConfigurationTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DrsReplicationConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DrsReplicationConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.pitPolicy">pit_policy</a></code> | <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList">DrsReplicationConfigurationTemplatePitPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationConfigurationTemplateId">replication_configuration_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList">DrsReplicationConfigurationTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.associateDefaultSecurityGroupInput">associate_default_security_group_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.autoReplicateNewDisksInput">auto_replicate_new_disks_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.bandwidthThrottlingInput">bandwidth_throttling_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.createPublicIpInput">create_public_ip_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.dataPlaneRoutingInput">data_plane_routing_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.defaultLargeStagingDiskTypeInput">default_large_staging_disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryptionInput">ebs_encryption_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryptionKeyArnInput">ebs_encryption_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.internetProtocolInput">internet_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.pitPolicyInput">pit_policy_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServerInstanceTypeInput">replication_server_instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDsInput">replication_servers_security_groups_i_ds_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaSubnetIdInput">staging_area_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaTagsInput">staging_area_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.useDedicatedReplicationServerInput">use_dedicated_replication_server_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.associateDefaultSecurityGroup">associate_default_security_group</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.autoReplicateNewDisks">auto_replicate_new_disks</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.bandwidthThrottling">bandwidth_throttling</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.createPublicIp">create_public_ip</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.dataPlaneRouting">data_plane_routing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.defaultLargeStagingDiskType">default_large_staging_disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryption">ebs_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryptionKeyArn">ebs_encryption_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.internetProtocol">internet_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServerInstanceType">replication_server_instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs">replication_servers_security_groups_i_ds</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaSubnetId">staging_area_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaTags">staging_area_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.useDedicatedReplicationServer">use_dedicated_replication_server</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `pit_policy`<sup>Required</sup> <a name="pit_policy" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.pitPolicy"></a>

```python
pit_policy: DrsReplicationConfigurationTemplatePitPolicyList
```

- *Type:* <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList">DrsReplicationConfigurationTemplatePitPolicyList</a>

---

##### `replication_configuration_template_id`<sup>Required</sup> <a name="replication_configuration_template_id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationConfigurationTemplateId"></a>

```python
replication_configuration_template_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tags"></a>

```python
tags: DrsReplicationConfigurationTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList">DrsReplicationConfigurationTemplateTagsList</a>

---

##### `associate_default_security_group_input`<sup>Optional</sup> <a name="associate_default_security_group_input" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.associateDefaultSecurityGroupInput"></a>

```python
associate_default_security_group_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `auto_replicate_new_disks_input`<sup>Optional</sup> <a name="auto_replicate_new_disks_input" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.autoReplicateNewDisksInput"></a>

```python
auto_replicate_new_disks_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `bandwidth_throttling_input`<sup>Optional</sup> <a name="bandwidth_throttling_input" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.bandwidthThrottlingInput"></a>

```python
bandwidth_throttling_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_public_ip_input`<sup>Optional</sup> <a name="create_public_ip_input" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.createPublicIpInput"></a>

```python
create_public_ip_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `data_plane_routing_input`<sup>Optional</sup> <a name="data_plane_routing_input" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.dataPlaneRoutingInput"></a>

```python
data_plane_routing_input: str
```

- *Type:* str

---

##### `default_large_staging_disk_type_input`<sup>Optional</sup> <a name="default_large_staging_disk_type_input" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.defaultLargeStagingDiskTypeInput"></a>

```python
default_large_staging_disk_type_input: str
```

- *Type:* str

---

##### `ebs_encryption_input`<sup>Optional</sup> <a name="ebs_encryption_input" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryptionInput"></a>

```python
ebs_encryption_input: str
```

- *Type:* str

---

##### `ebs_encryption_key_arn_input`<sup>Optional</sup> <a name="ebs_encryption_key_arn_input" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryptionKeyArnInput"></a>

```python
ebs_encryption_key_arn_input: str
```

- *Type:* str

---

##### `internet_protocol_input`<sup>Optional</sup> <a name="internet_protocol_input" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.internetProtocolInput"></a>

```python
internet_protocol_input: str
```

- *Type:* str

---

##### `pit_policy_input`<sup>Optional</sup> <a name="pit_policy_input" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.pitPolicyInput"></a>

```python
pit_policy_input: IResolvable | typing.List[DrsReplicationConfigurationTemplatePitPolicy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>]

---

##### `replication_server_instance_type_input`<sup>Optional</sup> <a name="replication_server_instance_type_input" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServerInstanceTypeInput"></a>

```python
replication_server_instance_type_input: str
```

- *Type:* str

---

##### `replication_servers_security_groups_i_ds_input`<sup>Optional</sup> <a name="replication_servers_security_groups_i_ds_input" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDsInput"></a>

```python
replication_servers_security_groups_i_ds_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `staging_area_subnet_id_input`<sup>Optional</sup> <a name="staging_area_subnet_id_input" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaSubnetIdInput"></a>

```python
staging_area_subnet_id_input: str
```

- *Type:* str

---

##### `staging_area_tags_input`<sup>Optional</sup> <a name="staging_area_tags_input" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaTagsInput"></a>

```python
staging_area_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DrsReplicationConfigurationTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>]

---

##### `use_dedicated_replication_server_input`<sup>Optional</sup> <a name="use_dedicated_replication_server_input" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.useDedicatedReplicationServerInput"></a>

```python
use_dedicated_replication_server_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `associate_default_security_group`<sup>Required</sup> <a name="associate_default_security_group" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.associateDefaultSecurityGroup"></a>

```python
associate_default_security_group: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `auto_replicate_new_disks`<sup>Required</sup> <a name="auto_replicate_new_disks" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.autoReplicateNewDisks"></a>

```python
auto_replicate_new_disks: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `bandwidth_throttling`<sup>Required</sup> <a name="bandwidth_throttling" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.bandwidthThrottling"></a>

```python
bandwidth_throttling: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_public_ip`<sup>Required</sup> <a name="create_public_ip" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.createPublicIp"></a>

```python
create_public_ip: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `data_plane_routing`<sup>Required</sup> <a name="data_plane_routing" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.dataPlaneRouting"></a>

```python
data_plane_routing: str
```

- *Type:* str

---

##### `default_large_staging_disk_type`<sup>Required</sup> <a name="default_large_staging_disk_type" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.defaultLargeStagingDiskType"></a>

```python
default_large_staging_disk_type: str
```

- *Type:* str

---

##### `ebs_encryption`<sup>Required</sup> <a name="ebs_encryption" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryption"></a>

```python
ebs_encryption: str
```

- *Type:* str

---

##### `ebs_encryption_key_arn`<sup>Required</sup> <a name="ebs_encryption_key_arn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryptionKeyArn"></a>

```python
ebs_encryption_key_arn: str
```

- *Type:* str

---

##### `internet_protocol`<sup>Required</sup> <a name="internet_protocol" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.internetProtocol"></a>

```python
internet_protocol: str
```

- *Type:* str

---

##### `replication_server_instance_type`<sup>Required</sup> <a name="replication_server_instance_type" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServerInstanceType"></a>

```python
replication_server_instance_type: str
```

- *Type:* str

---

##### `replication_servers_security_groups_i_ds`<sup>Required</sup> <a name="replication_servers_security_groups_i_ds" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs"></a>

```python
replication_servers_security_groups_i_ds: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `staging_area_subnet_id`<sup>Required</sup> <a name="staging_area_subnet_id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaSubnetId"></a>

```python
staging_area_subnet_id: str
```

- *Type:* str

---

##### `staging_area_tags`<sup>Required</sup> <a name="staging_area_tags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaTags"></a>

```python
staging_area_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `use_dedicated_replication_server`<sup>Required</sup> <a name="use_dedicated_replication_server" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.useDedicatedReplicationServer"></a>

```python
use_dedicated_replication_server: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DrsReplicationConfigurationTemplateConfig <a name="DrsReplicationConfigurationTemplateConfig" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import drs_replication_configuration_template

drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bandwidth_throttling: typing.Union[int, float],
  ebs_encryption: str,
  pit_policy: IResolvable | typing.List[DrsReplicationConfigurationTemplatePitPolicy],
  replication_servers_security_groups_i_ds: typing.List[str],
  staging_area_subnet_id: str,
  staging_area_tags: typing.Mapping[str],
  associate_default_security_group: bool | IResolvable = None,
  auto_replicate_new_disks: bool | IResolvable = None,
  create_public_ip: bool | IResolvable = None,
  data_plane_routing: str = None,
  default_large_staging_disk_type: str = None,
  ebs_encryption_key_arn: str = None,
  internet_protocol: str = None,
  replication_server_instance_type: str = None,
  tags: IResolvable | typing.List[DrsReplicationConfigurationTemplateTags] = None,
  use_dedicated_replication_server: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.bandwidthThrottling">bandwidth_throttling</a></code> | <code>typing.Union[int, float]</code> | Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.ebsEncryption">ebs_encryption</a></code> | <code>str</code> | The type of EBS encryption to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.pitPolicy">pit_policy</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>]</code> | The Point in time (PIT) policy to manage snapshots taken during replication. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.replicationServersSecurityGroupsIDs">replication_servers_security_groups_i_ds</a></code> | <code>typing.List[str]</code> | The security group IDs that will be used by the replication server. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.stagingAreaSubnetId">staging_area_subnet_id</a></code> | <code>str</code> | The subnet to be used by the replication staging area. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.stagingAreaTags">staging_area_tags</a></code> | <code>typing.Mapping[str]</code> | A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.associateDefaultSecurityGroup">associate_default_security_group</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.autoReplicateNewDisks">auto_replicate_new_disks</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to allow the AWS replication agent to automatically replicate newly added disks. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.createPublicIp">create_public_ip</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to create a Public IP for the Recovery Instance by default. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.dataPlaneRouting">data_plane_routing</a></code> | <code>str</code> | The data plane routing mechanism that will be used for replication. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.defaultLargeStagingDiskType">default_large_staging_disk_type</a></code> | <code>str</code> | The Staging Disk EBS volume type to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.ebsEncryptionKeyArn">ebs_encryption_key_arn</a></code> | <code>str</code> | The ARN of the EBS encryption key to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.internetProtocol">internet_protocol</a></code> | <code>str</code> | Which version of the Internet Protocol to use for replication of data. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.replicationServerInstanceType">replication_server_instance_type</a></code> | <code>str</code> | The instance type to be used for the replication server. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>]</code> | A set of tags to be associated with the Replication Configuration Template resource. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.useDedicatedReplicationServer">use_dedicated_replication_server</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to use a dedicated Replication Server in the replication staging area. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bandwidth_throttling`<sup>Required</sup> <a name="bandwidth_throttling" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.bandwidthThrottling"></a>

```python
bandwidth_throttling: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#bandwidth_throttling DrsReplicationConfigurationTemplate#bandwidth_throttling}

---

##### `ebs_encryption`<sup>Required</sup> <a name="ebs_encryption" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.ebsEncryption"></a>

```python
ebs_encryption: str
```

- *Type:* str

The type of EBS encryption to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#ebs_encryption DrsReplicationConfigurationTemplate#ebs_encryption}

---

##### `pit_policy`<sup>Required</sup> <a name="pit_policy" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.pitPolicy"></a>

```python
pit_policy: IResolvable | typing.List[DrsReplicationConfigurationTemplatePitPolicy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>]

The Point in time (PIT) policy to manage snapshots taken during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#pit_policy DrsReplicationConfigurationTemplate#pit_policy}

---

##### `replication_servers_security_groups_i_ds`<sup>Required</sup> <a name="replication_servers_security_groups_i_ds" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.replicationServersSecurityGroupsIDs"></a>

```python
replication_servers_security_groups_i_ds: typing.List[str]
```

- *Type:* typing.List[str]

The security group IDs that will be used by the replication server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#replication_servers_security_groups_i_ds DrsReplicationConfigurationTemplate#replication_servers_security_groups_i_ds}

---

##### `staging_area_subnet_id`<sup>Required</sup> <a name="staging_area_subnet_id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.stagingAreaSubnetId"></a>

```python
staging_area_subnet_id: str
```

- *Type:* str

The subnet to be used by the replication staging area.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#staging_area_subnet_id DrsReplicationConfigurationTemplate#staging_area_subnet_id}

---

##### `staging_area_tags`<sup>Required</sup> <a name="staging_area_tags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.stagingAreaTags"></a>

```python
staging_area_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#staging_area_tags DrsReplicationConfigurationTemplate#staging_area_tags}

---

##### `associate_default_security_group`<sup>Optional</sup> <a name="associate_default_security_group" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.associateDefaultSecurityGroup"></a>

```python
associate_default_security_group: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#associate_default_security_group DrsReplicationConfigurationTemplate#associate_default_security_group}

---

##### `auto_replicate_new_disks`<sup>Optional</sup> <a name="auto_replicate_new_disks" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.autoReplicateNewDisks"></a>

```python
auto_replicate_new_disks: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to allow the AWS replication agent to automatically replicate newly added disks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#auto_replicate_new_disks DrsReplicationConfigurationTemplate#auto_replicate_new_disks}

---

##### `create_public_ip`<sup>Optional</sup> <a name="create_public_ip" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.createPublicIp"></a>

```python
create_public_ip: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to create a Public IP for the Recovery Instance by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#create_public_ip DrsReplicationConfigurationTemplate#create_public_ip}

---

##### `data_plane_routing`<sup>Optional</sup> <a name="data_plane_routing" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.dataPlaneRouting"></a>

```python
data_plane_routing: str
```

- *Type:* str

The data plane routing mechanism that will be used for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#data_plane_routing DrsReplicationConfigurationTemplate#data_plane_routing}

---

##### `default_large_staging_disk_type`<sup>Optional</sup> <a name="default_large_staging_disk_type" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.defaultLargeStagingDiskType"></a>

```python
default_large_staging_disk_type: str
```

- *Type:* str

The Staging Disk EBS volume type to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#default_large_staging_disk_type DrsReplicationConfigurationTemplate#default_large_staging_disk_type}

---

##### `ebs_encryption_key_arn`<sup>Optional</sup> <a name="ebs_encryption_key_arn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.ebsEncryptionKeyArn"></a>

```python
ebs_encryption_key_arn: str
```

- *Type:* str

The ARN of the EBS encryption key to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#ebs_encryption_key_arn DrsReplicationConfigurationTemplate#ebs_encryption_key_arn}

---

##### `internet_protocol`<sup>Optional</sup> <a name="internet_protocol" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.internetProtocol"></a>

```python
internet_protocol: str
```

- *Type:* str

Which version of the Internet Protocol to use for replication of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#internet_protocol DrsReplicationConfigurationTemplate#internet_protocol}

---

##### `replication_server_instance_type`<sup>Optional</sup> <a name="replication_server_instance_type" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.replicationServerInstanceType"></a>

```python
replication_server_instance_type: str
```

- *Type:* str

The instance type to be used for the replication server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#replication_server_instance_type DrsReplicationConfigurationTemplate#replication_server_instance_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[DrsReplicationConfigurationTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>]

A set of tags to be associated with the Replication Configuration Template resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#tags DrsReplicationConfigurationTemplate#tags}

---

##### `use_dedicated_replication_server`<sup>Optional</sup> <a name="use_dedicated_replication_server" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.useDedicatedReplicationServer"></a>

```python
use_dedicated_replication_server: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to use a dedicated Replication Server in the replication staging area.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#use_dedicated_replication_server DrsReplicationConfigurationTemplate#use_dedicated_replication_server}

---

### DrsReplicationConfigurationTemplatePitPolicy <a name="DrsReplicationConfigurationTemplatePitPolicy" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import drs_replication_configuration_template

drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy(
  interval: typing.Union[int, float],
  retention_duration: typing.Union[int, float],
  units: str,
  enabled: bool | IResolvable = None,
  rule_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | How often, in the chosen units, a snapshot should be taken. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.retentionDuration">retention_duration</a></code> | <code>typing.Union[int, float]</code> | The duration to retain a snapshot for, in the chosen units. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.units">units</a></code> | <code>str</code> | The units used to measure the interval and retentionDuration. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether this rule is enabled or not. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.ruleId">rule_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the rule. |

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How often, in the chosen units, a snapshot should be taken.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#interval DrsReplicationConfigurationTemplate#interval}

---

##### `retention_duration`<sup>Required</sup> <a name="retention_duration" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.retentionDuration"></a>

```python
retention_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration to retain a snapshot for, in the chosen units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#retention_duration DrsReplicationConfigurationTemplate#retention_duration}

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.units"></a>

```python
units: str
```

- *Type:* str

The units used to measure the interval and retentionDuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#units DrsReplicationConfigurationTemplate#units}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether this rule is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#enabled DrsReplicationConfigurationTemplate#enabled}

---

##### `rule_id`<sup>Optional</sup> <a name="rule_id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.ruleId"></a>

```python
rule_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#rule_id DrsReplicationConfigurationTemplate#rule_id}

---

### DrsReplicationConfigurationTemplateTags <a name="DrsReplicationConfigurationTemplateTags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags.Initializer"></a>

```python
from cdktn_provider_awscc import drs_replication_configuration_template

drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags.property.key">key</a></code> | <code>str</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags.property.value">value</a></code> | <code>str</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#key DrsReplicationConfigurationTemplate#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#value DrsReplicationConfigurationTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DrsReplicationConfigurationTemplatePitPolicyList <a name="DrsReplicationConfigurationTemplatePitPolicyList" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer"></a>

```python
from cdktn_provider_awscc import drs_replication_configuration_template

drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DrsReplicationConfigurationTemplatePitPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DrsReplicationConfigurationTemplatePitPolicy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>]

---


### DrsReplicationConfigurationTemplatePitPolicyOutputReference <a name="DrsReplicationConfigurationTemplatePitPolicyOutputReference" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import drs_replication_configuration_template

drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resetRuleId">reset_rule_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_rule_id` <a name="reset_rule_id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resetRuleId"></a>

```python
def reset_rule_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.intervalInput">interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.retentionDurationInput">retention_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.ruleIdInput">rule_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.unitsInput">units_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.retentionDuration">retention_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.ruleId">rule_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.units">units</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.intervalInput"></a>

```python
interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_duration_input`<sup>Optional</sup> <a name="retention_duration_input" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.retentionDurationInput"></a>

```python
retention_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_id_input`<sup>Optional</sup> <a name="rule_id_input" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.ruleIdInput"></a>

```python
rule_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `units_input`<sup>Optional</sup> <a name="units_input" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.unitsInput"></a>

```python
units_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_duration`<sup>Required</sup> <a name="retention_duration" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.retentionDuration"></a>

```python
retention_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.ruleId"></a>

```python
rule_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.units"></a>

```python
units: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DrsReplicationConfigurationTemplatePitPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>

---


### DrsReplicationConfigurationTemplateTagsList <a name="DrsReplicationConfigurationTemplateTagsList" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import drs_replication_configuration_template

drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DrsReplicationConfigurationTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DrsReplicationConfigurationTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>]

---


### DrsReplicationConfigurationTemplateTagsOutputReference <a name="DrsReplicationConfigurationTemplateTagsOutputReference" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import drs_replication_configuration_template

drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DrsReplicationConfigurationTemplateTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>

---



