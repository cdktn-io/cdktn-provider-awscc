# `mgnReplicationConfigurationTemplate` Submodule <a name="`mgnReplicationConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MgnReplicationConfigurationTemplate <a name="MgnReplicationConfigurationTemplate" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template awscc_mgn_replication_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import mgn_replication_configuration_template

mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  associate_default_security_group: bool | IResolvable,
  bandwidth_throttling: typing.Union[int, float],
  create_public_ip: bool | IResolvable,
  data_plane_routing: str,
  default_large_staging_disk_type: str,
  ebs_encryption: str,
  replication_server_instance_type: str,
  replication_servers_security_groups_i_ds: typing.List[str],
  staging_area_subnet_id: str,
  staging_area_tags: typing.Mapping[str],
  use_dedicated_replication_server: bool | IResolvable,
  ebs_encryption_key_arn: str = None,
  internet_protocol: str = None,
  store_snapshot_on_local_zone: bool | IResolvable = None,
  tags: IResolvable | typing.List[MgnReplicationConfigurationTemplateTags] = None,
  use_fips_endpoint: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.associateDefaultSecurityGroup">associate_default_security_group</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to associate the default Application Migration Service Security Group with the Replication Configuration Template. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.bandwidthThrottling">bandwidth_throttling</a></code> | <code>typing.Union[int, float]</code> | Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.createPublicIp">create_public_ip</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to create a Public IP for the Recovery Instance by default. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.dataPlaneRouting">data_plane_routing</a></code> | <code>str</code> | The data plane routing mechanism that will be used for replication. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.defaultLargeStagingDiskType">default_large_staging_disk_type</a></code> | <code>str</code> | The Staging Disk EBS volume type to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.ebsEncryption">ebs_encryption</a></code> | <code>str</code> | The type of EBS encryption to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.replicationServerInstanceType">replication_server_instance_type</a></code> | <code>str</code> | The instance type to be used for the replication server. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.replicationServersSecurityGroupsIDs">replication_servers_security_groups_i_ds</a></code> | <code>typing.List[str]</code> | The security group IDs that will be used by the replication server. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.stagingAreaSubnetId">staging_area_subnet_id</a></code> | <code>str</code> | The subnet to be used by the replication staging area. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.stagingAreaTags">staging_area_tags</a></code> | <code>typing.Mapping[str]</code> | A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.useDedicatedReplicationServer">use_dedicated_replication_server</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to use a dedicated Replication Server in the replication staging area. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.ebsEncryptionKeyArn">ebs_encryption_key_arn</a></code> | <code>str</code> | The ARN of the EBS encryption key to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.internetProtocol">internet_protocol</a></code> | <code>str</code> | Which internet protocol to use for replication of data. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.storeSnapshotOnLocalZone">store_snapshot_on_local_zone</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to store the Snapshot in the Local Zone of the replication staging area subnet. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a>]</code> | A set of tags to be associated with the Replication Configuration Template resource. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.useFipsEndpoint">use_fips_endpoint</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to use a FIPS endpoint when initiating the agent connection to the Application Migration Service service. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `associate_default_security_group`<sup>Required</sup> <a name="associate_default_security_group" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.associateDefaultSecurityGroup"></a>

- *Type:* bool | cdktn.IResolvable

Whether to associate the default Application Migration Service Security Group with the Replication Configuration Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#associate_default_security_group MgnReplicationConfigurationTemplate#associate_default_security_group}

---

##### `bandwidth_throttling`<sup>Required</sup> <a name="bandwidth_throttling" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.bandwidthThrottling"></a>

- *Type:* typing.Union[int, float]

Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#bandwidth_throttling MgnReplicationConfigurationTemplate#bandwidth_throttling}

---

##### `create_public_ip`<sup>Required</sup> <a name="create_public_ip" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.createPublicIp"></a>

- *Type:* bool | cdktn.IResolvable

Whether to create a Public IP for the Recovery Instance by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#create_public_ip MgnReplicationConfigurationTemplate#create_public_ip}

---

##### `data_plane_routing`<sup>Required</sup> <a name="data_plane_routing" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.dataPlaneRouting"></a>

- *Type:* str

The data plane routing mechanism that will be used for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#data_plane_routing MgnReplicationConfigurationTemplate#data_plane_routing}

---

##### `default_large_staging_disk_type`<sup>Required</sup> <a name="default_large_staging_disk_type" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.defaultLargeStagingDiskType"></a>

- *Type:* str

The Staging Disk EBS volume type to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#default_large_staging_disk_type MgnReplicationConfigurationTemplate#default_large_staging_disk_type}

---

##### `ebs_encryption`<sup>Required</sup> <a name="ebs_encryption" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.ebsEncryption"></a>

- *Type:* str

The type of EBS encryption to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#ebs_encryption MgnReplicationConfigurationTemplate#ebs_encryption}

---

##### `replication_server_instance_type`<sup>Required</sup> <a name="replication_server_instance_type" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.replicationServerInstanceType"></a>

- *Type:* str

The instance type to be used for the replication server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#replication_server_instance_type MgnReplicationConfigurationTemplate#replication_server_instance_type}

---

##### `replication_servers_security_groups_i_ds`<sup>Required</sup> <a name="replication_servers_security_groups_i_ds" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.replicationServersSecurityGroupsIDs"></a>

- *Type:* typing.List[str]

The security group IDs that will be used by the replication server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#replication_servers_security_groups_i_ds MgnReplicationConfigurationTemplate#replication_servers_security_groups_i_ds}

---

##### `staging_area_subnet_id`<sup>Required</sup> <a name="staging_area_subnet_id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.stagingAreaSubnetId"></a>

- *Type:* str

The subnet to be used by the replication staging area.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#staging_area_subnet_id MgnReplicationConfigurationTemplate#staging_area_subnet_id}

---

##### `staging_area_tags`<sup>Required</sup> <a name="staging_area_tags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.stagingAreaTags"></a>

- *Type:* typing.Mapping[str]

A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#staging_area_tags MgnReplicationConfigurationTemplate#staging_area_tags}

---

##### `use_dedicated_replication_server`<sup>Required</sup> <a name="use_dedicated_replication_server" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.useDedicatedReplicationServer"></a>

- *Type:* bool | cdktn.IResolvable

Whether to use a dedicated Replication Server in the replication staging area.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#use_dedicated_replication_server MgnReplicationConfigurationTemplate#use_dedicated_replication_server}

---

##### `ebs_encryption_key_arn`<sup>Optional</sup> <a name="ebs_encryption_key_arn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.ebsEncryptionKeyArn"></a>

- *Type:* str

The ARN of the EBS encryption key to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#ebs_encryption_key_arn MgnReplicationConfigurationTemplate#ebs_encryption_key_arn}

---

##### `internet_protocol`<sup>Optional</sup> <a name="internet_protocol" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.internetProtocol"></a>

- *Type:* str

Which internet protocol to use for replication of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#internet_protocol MgnReplicationConfigurationTemplate#internet_protocol}

---

##### `store_snapshot_on_local_zone`<sup>Optional</sup> <a name="store_snapshot_on_local_zone" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.storeSnapshotOnLocalZone"></a>

- *Type:* bool | cdktn.IResolvable

Whether to store the Snapshot in the Local Zone of the replication staging area subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#store_snapshot_on_local_zone MgnReplicationConfigurationTemplate#store_snapshot_on_local_zone}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a>]

A set of tags to be associated with the Replication Configuration Template resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#tags MgnReplicationConfigurationTemplate#tags}

---

##### `use_fips_endpoint`<sup>Optional</sup> <a name="use_fips_endpoint" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.useFipsEndpoint"></a>

- *Type:* bool | cdktn.IResolvable

Whether to use a FIPS endpoint when initiating the agent connection to the Application Migration Service service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#use_fips_endpoint MgnReplicationConfigurationTemplate#use_fips_endpoint}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetEbsEncryptionKeyArn">reset_ebs_encryption_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetInternetProtocol">reset_internet_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetStoreSnapshotOnLocalZone">reset_store_snapshot_on_local_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetUseFipsEndpoint">reset_use_fips_endpoint</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[MgnReplicationConfigurationTemplateTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a>]

---

##### `reset_ebs_encryption_key_arn` <a name="reset_ebs_encryption_key_arn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetEbsEncryptionKeyArn"></a>

```python
def reset_ebs_encryption_key_arn() -> None
```

##### `reset_internet_protocol` <a name="reset_internet_protocol" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetInternetProtocol"></a>

```python
def reset_internet_protocol() -> None
```

##### `reset_store_snapshot_on_local_zone` <a name="reset_store_snapshot_on_local_zone" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetStoreSnapshotOnLocalZone"></a>

```python
def reset_store_snapshot_on_local_zone() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_use_fips_endpoint` <a name="reset_use_fips_endpoint" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetUseFipsEndpoint"></a>

```python
def reset_use_fips_endpoint() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MgnReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import mgn_replication_configuration_template

mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import mgn_replication_configuration_template

mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isTerraformResource"></a>

```python
from cdktn_provider_awscc import mgn_replication_configuration_template

mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import mgn_replication_configuration_template

mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MgnReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MgnReplicationConfigurationTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MgnReplicationConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MgnReplicationConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationConfigurationTemplateId">replication_configuration_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList">MgnReplicationConfigurationTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.associateDefaultSecurityGroupInput">associate_default_security_group_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.bandwidthThrottlingInput">bandwidth_throttling_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.createPublicIpInput">create_public_ip_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.dataPlaneRoutingInput">data_plane_routing_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.defaultLargeStagingDiskTypeInput">default_large_staging_disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryptionInput">ebs_encryption_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryptionKeyArnInput">ebs_encryption_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.internetProtocolInput">internet_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServerInstanceTypeInput">replication_server_instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDsInput">replication_servers_security_groups_i_ds_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaSubnetIdInput">staging_area_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaTagsInput">staging_area_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.storeSnapshotOnLocalZoneInput">store_snapshot_on_local_zone_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useDedicatedReplicationServerInput">use_dedicated_replication_server_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useFipsEndpointInput">use_fips_endpoint_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.associateDefaultSecurityGroup">associate_default_security_group</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.bandwidthThrottling">bandwidth_throttling</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.createPublicIp">create_public_ip</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.dataPlaneRouting">data_plane_routing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.defaultLargeStagingDiskType">default_large_staging_disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryption">ebs_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryptionKeyArn">ebs_encryption_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.internetProtocol">internet_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServerInstanceType">replication_server_instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs">replication_servers_security_groups_i_ds</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaSubnetId">staging_area_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaTags">staging_area_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.storeSnapshotOnLocalZone">store_snapshot_on_local_zone</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useDedicatedReplicationServer">use_dedicated_replication_server</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useFipsEndpoint">use_fips_endpoint</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `replication_configuration_template_id`<sup>Required</sup> <a name="replication_configuration_template_id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationConfigurationTemplateId"></a>

```python
replication_configuration_template_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.tags"></a>

```python
tags: MgnReplicationConfigurationTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList">MgnReplicationConfigurationTemplateTagsList</a>

---

##### `associate_default_security_group_input`<sup>Optional</sup> <a name="associate_default_security_group_input" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.associateDefaultSecurityGroupInput"></a>

```python
associate_default_security_group_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `bandwidth_throttling_input`<sup>Optional</sup> <a name="bandwidth_throttling_input" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.bandwidthThrottlingInput"></a>

```python
bandwidth_throttling_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_public_ip_input`<sup>Optional</sup> <a name="create_public_ip_input" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.createPublicIpInput"></a>

```python
create_public_ip_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `data_plane_routing_input`<sup>Optional</sup> <a name="data_plane_routing_input" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.dataPlaneRoutingInput"></a>

```python
data_plane_routing_input: str
```

- *Type:* str

---

##### `default_large_staging_disk_type_input`<sup>Optional</sup> <a name="default_large_staging_disk_type_input" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.defaultLargeStagingDiskTypeInput"></a>

```python
default_large_staging_disk_type_input: str
```

- *Type:* str

---

##### `ebs_encryption_input`<sup>Optional</sup> <a name="ebs_encryption_input" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryptionInput"></a>

```python
ebs_encryption_input: str
```

- *Type:* str

---

##### `ebs_encryption_key_arn_input`<sup>Optional</sup> <a name="ebs_encryption_key_arn_input" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryptionKeyArnInput"></a>

```python
ebs_encryption_key_arn_input: str
```

- *Type:* str

---

##### `internet_protocol_input`<sup>Optional</sup> <a name="internet_protocol_input" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.internetProtocolInput"></a>

```python
internet_protocol_input: str
```

- *Type:* str

---

##### `replication_server_instance_type_input`<sup>Optional</sup> <a name="replication_server_instance_type_input" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServerInstanceTypeInput"></a>

```python
replication_server_instance_type_input: str
```

- *Type:* str

---

##### `replication_servers_security_groups_i_ds_input`<sup>Optional</sup> <a name="replication_servers_security_groups_i_ds_input" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDsInput"></a>

```python
replication_servers_security_groups_i_ds_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `staging_area_subnet_id_input`<sup>Optional</sup> <a name="staging_area_subnet_id_input" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaSubnetIdInput"></a>

```python
staging_area_subnet_id_input: str
```

- *Type:* str

---

##### `staging_area_tags_input`<sup>Optional</sup> <a name="staging_area_tags_input" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaTagsInput"></a>

```python
staging_area_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `store_snapshot_on_local_zone_input`<sup>Optional</sup> <a name="store_snapshot_on_local_zone_input" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.storeSnapshotOnLocalZoneInput"></a>

```python
store_snapshot_on_local_zone_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[MgnReplicationConfigurationTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a>]

---

##### `use_dedicated_replication_server_input`<sup>Optional</sup> <a name="use_dedicated_replication_server_input" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useDedicatedReplicationServerInput"></a>

```python
use_dedicated_replication_server_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `use_fips_endpoint_input`<sup>Optional</sup> <a name="use_fips_endpoint_input" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useFipsEndpointInput"></a>

```python
use_fips_endpoint_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `associate_default_security_group`<sup>Required</sup> <a name="associate_default_security_group" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.associateDefaultSecurityGroup"></a>

```python
associate_default_security_group: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `bandwidth_throttling`<sup>Required</sup> <a name="bandwidth_throttling" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.bandwidthThrottling"></a>

```python
bandwidth_throttling: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_public_ip`<sup>Required</sup> <a name="create_public_ip" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.createPublicIp"></a>

```python
create_public_ip: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `data_plane_routing`<sup>Required</sup> <a name="data_plane_routing" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.dataPlaneRouting"></a>

```python
data_plane_routing: str
```

- *Type:* str

---

##### `default_large_staging_disk_type`<sup>Required</sup> <a name="default_large_staging_disk_type" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.defaultLargeStagingDiskType"></a>

```python
default_large_staging_disk_type: str
```

- *Type:* str

---

##### `ebs_encryption`<sup>Required</sup> <a name="ebs_encryption" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryption"></a>

```python
ebs_encryption: str
```

- *Type:* str

---

##### `ebs_encryption_key_arn`<sup>Required</sup> <a name="ebs_encryption_key_arn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryptionKeyArn"></a>

```python
ebs_encryption_key_arn: str
```

- *Type:* str

---

##### `internet_protocol`<sup>Required</sup> <a name="internet_protocol" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.internetProtocol"></a>

```python
internet_protocol: str
```

- *Type:* str

---

##### `replication_server_instance_type`<sup>Required</sup> <a name="replication_server_instance_type" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServerInstanceType"></a>

```python
replication_server_instance_type: str
```

- *Type:* str

---

##### `replication_servers_security_groups_i_ds`<sup>Required</sup> <a name="replication_servers_security_groups_i_ds" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs"></a>

```python
replication_servers_security_groups_i_ds: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `staging_area_subnet_id`<sup>Required</sup> <a name="staging_area_subnet_id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaSubnetId"></a>

```python
staging_area_subnet_id: str
```

- *Type:* str

---

##### `staging_area_tags`<sup>Required</sup> <a name="staging_area_tags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaTags"></a>

```python
staging_area_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `store_snapshot_on_local_zone`<sup>Required</sup> <a name="store_snapshot_on_local_zone" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.storeSnapshotOnLocalZone"></a>

```python
store_snapshot_on_local_zone: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `use_dedicated_replication_server`<sup>Required</sup> <a name="use_dedicated_replication_server" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useDedicatedReplicationServer"></a>

```python
use_dedicated_replication_server: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `use_fips_endpoint`<sup>Required</sup> <a name="use_fips_endpoint" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useFipsEndpoint"></a>

```python
use_fips_endpoint: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MgnReplicationConfigurationTemplateConfig <a name="MgnReplicationConfigurationTemplateConfig" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import mgn_replication_configuration_template

mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  associate_default_security_group: bool | IResolvable,
  bandwidth_throttling: typing.Union[int, float],
  create_public_ip: bool | IResolvable,
  data_plane_routing: str,
  default_large_staging_disk_type: str,
  ebs_encryption: str,
  replication_server_instance_type: str,
  replication_servers_security_groups_i_ds: typing.List[str],
  staging_area_subnet_id: str,
  staging_area_tags: typing.Mapping[str],
  use_dedicated_replication_server: bool | IResolvable,
  ebs_encryption_key_arn: str = None,
  internet_protocol: str = None,
  store_snapshot_on_local_zone: bool | IResolvable = None,
  tags: IResolvable | typing.List[MgnReplicationConfigurationTemplateTags] = None,
  use_fips_endpoint: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.associateDefaultSecurityGroup">associate_default_security_group</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to associate the default Application Migration Service Security Group with the Replication Configuration Template. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.bandwidthThrottling">bandwidth_throttling</a></code> | <code>typing.Union[int, float]</code> | Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.createPublicIp">create_public_ip</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to create a Public IP for the Recovery Instance by default. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.dataPlaneRouting">data_plane_routing</a></code> | <code>str</code> | The data plane routing mechanism that will be used for replication. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.defaultLargeStagingDiskType">default_large_staging_disk_type</a></code> | <code>str</code> | The Staging Disk EBS volume type to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.ebsEncryption">ebs_encryption</a></code> | <code>str</code> | The type of EBS encryption to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.replicationServerInstanceType">replication_server_instance_type</a></code> | <code>str</code> | The instance type to be used for the replication server. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.replicationServersSecurityGroupsIDs">replication_servers_security_groups_i_ds</a></code> | <code>typing.List[str]</code> | The security group IDs that will be used by the replication server. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.stagingAreaSubnetId">staging_area_subnet_id</a></code> | <code>str</code> | The subnet to be used by the replication staging area. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.stagingAreaTags">staging_area_tags</a></code> | <code>typing.Mapping[str]</code> | A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.useDedicatedReplicationServer">use_dedicated_replication_server</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to use a dedicated Replication Server in the replication staging area. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.ebsEncryptionKeyArn">ebs_encryption_key_arn</a></code> | <code>str</code> | The ARN of the EBS encryption key to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.internetProtocol">internet_protocol</a></code> | <code>str</code> | Which internet protocol to use for replication of data. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.storeSnapshotOnLocalZone">store_snapshot_on_local_zone</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to store the Snapshot in the Local Zone of the replication staging area subnet. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a>]</code> | A set of tags to be associated with the Replication Configuration Template resource. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.useFipsEndpoint">use_fips_endpoint</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to use a FIPS endpoint when initiating the agent connection to the Application Migration Service service. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `associate_default_security_group`<sup>Required</sup> <a name="associate_default_security_group" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.associateDefaultSecurityGroup"></a>

```python
associate_default_security_group: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to associate the default Application Migration Service Security Group with the Replication Configuration Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#associate_default_security_group MgnReplicationConfigurationTemplate#associate_default_security_group}

---

##### `bandwidth_throttling`<sup>Required</sup> <a name="bandwidth_throttling" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.bandwidthThrottling"></a>

```python
bandwidth_throttling: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#bandwidth_throttling MgnReplicationConfigurationTemplate#bandwidth_throttling}

---

##### `create_public_ip`<sup>Required</sup> <a name="create_public_ip" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.createPublicIp"></a>

```python
create_public_ip: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to create a Public IP for the Recovery Instance by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#create_public_ip MgnReplicationConfigurationTemplate#create_public_ip}

---

##### `data_plane_routing`<sup>Required</sup> <a name="data_plane_routing" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.dataPlaneRouting"></a>

```python
data_plane_routing: str
```

- *Type:* str

The data plane routing mechanism that will be used for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#data_plane_routing MgnReplicationConfigurationTemplate#data_plane_routing}

---

##### `default_large_staging_disk_type`<sup>Required</sup> <a name="default_large_staging_disk_type" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.defaultLargeStagingDiskType"></a>

```python
default_large_staging_disk_type: str
```

- *Type:* str

The Staging Disk EBS volume type to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#default_large_staging_disk_type MgnReplicationConfigurationTemplate#default_large_staging_disk_type}

---

##### `ebs_encryption`<sup>Required</sup> <a name="ebs_encryption" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.ebsEncryption"></a>

```python
ebs_encryption: str
```

- *Type:* str

The type of EBS encryption to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#ebs_encryption MgnReplicationConfigurationTemplate#ebs_encryption}

---

##### `replication_server_instance_type`<sup>Required</sup> <a name="replication_server_instance_type" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.replicationServerInstanceType"></a>

```python
replication_server_instance_type: str
```

- *Type:* str

The instance type to be used for the replication server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#replication_server_instance_type MgnReplicationConfigurationTemplate#replication_server_instance_type}

---

##### `replication_servers_security_groups_i_ds`<sup>Required</sup> <a name="replication_servers_security_groups_i_ds" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.replicationServersSecurityGroupsIDs"></a>

```python
replication_servers_security_groups_i_ds: typing.List[str]
```

- *Type:* typing.List[str]

The security group IDs that will be used by the replication server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#replication_servers_security_groups_i_ds MgnReplicationConfigurationTemplate#replication_servers_security_groups_i_ds}

---

##### `staging_area_subnet_id`<sup>Required</sup> <a name="staging_area_subnet_id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.stagingAreaSubnetId"></a>

```python
staging_area_subnet_id: str
```

- *Type:* str

The subnet to be used by the replication staging area.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#staging_area_subnet_id MgnReplicationConfigurationTemplate#staging_area_subnet_id}

---

##### `staging_area_tags`<sup>Required</sup> <a name="staging_area_tags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.stagingAreaTags"></a>

```python
staging_area_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#staging_area_tags MgnReplicationConfigurationTemplate#staging_area_tags}

---

##### `use_dedicated_replication_server`<sup>Required</sup> <a name="use_dedicated_replication_server" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.useDedicatedReplicationServer"></a>

```python
use_dedicated_replication_server: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to use a dedicated Replication Server in the replication staging area.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#use_dedicated_replication_server MgnReplicationConfigurationTemplate#use_dedicated_replication_server}

---

##### `ebs_encryption_key_arn`<sup>Optional</sup> <a name="ebs_encryption_key_arn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.ebsEncryptionKeyArn"></a>

```python
ebs_encryption_key_arn: str
```

- *Type:* str

The ARN of the EBS encryption key to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#ebs_encryption_key_arn MgnReplicationConfigurationTemplate#ebs_encryption_key_arn}

---

##### `internet_protocol`<sup>Optional</sup> <a name="internet_protocol" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.internetProtocol"></a>

```python
internet_protocol: str
```

- *Type:* str

Which internet protocol to use for replication of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#internet_protocol MgnReplicationConfigurationTemplate#internet_protocol}

---

##### `store_snapshot_on_local_zone`<sup>Optional</sup> <a name="store_snapshot_on_local_zone" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.storeSnapshotOnLocalZone"></a>

```python
store_snapshot_on_local_zone: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to store the Snapshot in the Local Zone of the replication staging area subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#store_snapshot_on_local_zone MgnReplicationConfigurationTemplate#store_snapshot_on_local_zone}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[MgnReplicationConfigurationTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a>]

A set of tags to be associated with the Replication Configuration Template resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#tags MgnReplicationConfigurationTemplate#tags}

---

##### `use_fips_endpoint`<sup>Optional</sup> <a name="use_fips_endpoint" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.useFipsEndpoint"></a>

```python
use_fips_endpoint: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to use a FIPS endpoint when initiating the agent connection to the Application Migration Service service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#use_fips_endpoint MgnReplicationConfigurationTemplate#use_fips_endpoint}

---

### MgnReplicationConfigurationTemplateTags <a name="MgnReplicationConfigurationTemplateTags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags.Initializer"></a>

```python
from cdktn_provider_awscc import mgn_replication_configuration_template

mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#key MgnReplicationConfigurationTemplate#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#value MgnReplicationConfigurationTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### MgnReplicationConfigurationTemplateTagsList <a name="MgnReplicationConfigurationTemplateTagsList" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import mgn_replication_configuration_template

mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MgnReplicationConfigurationTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MgnReplicationConfigurationTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a>]

---


### MgnReplicationConfigurationTemplateTagsOutputReference <a name="MgnReplicationConfigurationTemplateTagsOutputReference" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mgn_replication_configuration_template

mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MgnReplicationConfigurationTemplateTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a>

---



