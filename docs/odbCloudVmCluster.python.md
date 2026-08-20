# `odbCloudVmCluster` Submodule <a name="`odbCloudVmCluster` Submodule" id="@cdktn/provider-awscc.odbCloudVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbCloudVmCluster <a name="OdbCloudVmCluster" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster awscc_odb_cloud_vm_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer"></a>

```python
from cdktn_provider_awscc import odb_cloud_vm_cluster

odbCloudVmCluster.OdbCloudVmCluster(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cloud_exadata_infrastructure_id: str = None,
  cluster_name: str = None,
  cpu_core_count: typing.Union[int, float] = None,
  data_collection_options: OdbCloudVmClusterDataCollectionOptions = None,
  data_storage_size_in_t_bs: typing.Union[int, float] = None,
  db_nodes: IResolvable | typing.List[OdbCloudVmClusterDbNodes] = None,
  db_node_storage_size_in_g_bs: typing.Union[int, float] = None,
  db_servers: typing.List[str] = None,
  display_name: str = None,
  gi_version: str = None,
  hostname: str = None,
  iam_roles: IResolvable | typing.List[OdbCloudVmClusterIamRoles] = None,
  is_local_backup_enabled: bool | IResolvable = None,
  is_sparse_diskgroup_enabled: bool | IResolvable = None,
  license_model: str = None,
  memory_size_in_g_bs: typing.Union[int, float] = None,
  odb_network_id: str = None,
  scan_listener_port_tcp: typing.Union[int, float] = None,
  ssh_public_keys: typing.List[str] = None,
  system_version: str = None,
  tags: IResolvable | typing.List[OdbCloudVmClusterTags] = None,
  time_zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.cloudExadataInfrastructureId">cloud_exadata_infrastructure_id</a></code> | <code>str</code> | The unique identifier of the Exadata infrastructure that this VM cluster belongs to. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | The name of the Grid Infrastructure (GI) cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | The number of CPU cores enabled on the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.dataCollectionOptions">data_collection_options</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a></code> | The set of diagnostic collection options enabled for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.dataStorageSizeInTBs">data_storage_size_in_t_bs</a></code> | <code>typing.Union[int, float]</code> | The size of the data disk group, in terabytes (TB), that's allocated for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.dbNodes">db_nodes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>]</code> | The DB nodes that are implicitly created and managed as part of this VM Cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.dbNodeStorageSizeInGBs">db_node_storage_size_in_g_bs</a></code> | <code>typing.Union[int, float]</code> | The amount of local node storage, in gigabytes (GB), that's allocated for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.dbServers">db_servers</a></code> | <code>typing.List[str]</code> | The list of database servers for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The user-friendly name for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.giVersion">gi_version</a></code> | <code>str</code> | The software version of the Oracle Grid Infrastructure (GI) for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.hostname">hostname</a></code> | <code>str</code> | The host name for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.iamRoles">iam_roles</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>]</code> | The AWS Identity and Access Management (IAM) service roles associated with the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.isLocalBackupEnabled">is_local_backup_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether database backups to local Exadata storage is enabled for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.isSparseDiskgroupEnabled">is_sparse_diskgroup_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the VM cluster is configured with a sparse disk group. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.licenseModel">license_model</a></code> | <code>str</code> | The Oracle license model applied to the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.memorySizeInGBs">memory_size_in_g_bs</a></code> | <code>typing.Union[int, float]</code> | The amount of memory, in gigabytes (GB), that's allocated for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.odbNetworkId">odb_network_id</a></code> | <code>str</code> | The unique identifier of the ODB network for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.scanListenerPortTcp">scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | Property description not available. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | The public key portion of one or more key pairs used for SSH access to the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.systemVersion">system_version</a></code> | <code>str</code> | The operating system version of the image chosen for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>]</code> | Tags to assign to the Vm Cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | The time zone of the VM cluster. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cloud_exadata_infrastructure_id`<sup>Optional</sup> <a name="cloud_exadata_infrastructure_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.cloudExadataInfrastructureId"></a>

- *Type:* str

The unique identifier of the Exadata infrastructure that this VM cluster belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#cloud_exadata_infrastructure_id OdbCloudVmCluster#cloud_exadata_infrastructure_id}

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.clusterName"></a>

- *Type:* str

The name of the Grid Infrastructure (GI) cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#cluster_name OdbCloudVmCluster#cluster_name}

---

##### `cpu_core_count`<sup>Optional</sup> <a name="cpu_core_count" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.cpuCoreCount"></a>

- *Type:* typing.Union[int, float]

The number of CPU cores enabled on the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#cpu_core_count OdbCloudVmCluster#cpu_core_count}

---

##### `data_collection_options`<sup>Optional</sup> <a name="data_collection_options" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.dataCollectionOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a>

The set of diagnostic collection options enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#data_collection_options OdbCloudVmCluster#data_collection_options}

---

##### `data_storage_size_in_t_bs`<sup>Optional</sup> <a name="data_storage_size_in_t_bs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.dataStorageSizeInTBs"></a>

- *Type:* typing.Union[int, float]

The size of the data disk group, in terabytes (TB), that's allocated for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#data_storage_size_in_t_bs OdbCloudVmCluster#data_storage_size_in_t_bs}

---

##### `db_nodes`<sup>Optional</sup> <a name="db_nodes" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.dbNodes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>]

The DB nodes that are implicitly created and managed as part of this VM Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#db_nodes OdbCloudVmCluster#db_nodes}

---

##### `db_node_storage_size_in_g_bs`<sup>Optional</sup> <a name="db_node_storage_size_in_g_bs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.dbNodeStorageSizeInGBs"></a>

- *Type:* typing.Union[int, float]

The amount of local node storage, in gigabytes (GB), that's allocated for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#db_node_storage_size_in_g_bs OdbCloudVmCluster#db_node_storage_size_in_g_bs}

---

##### `db_servers`<sup>Optional</sup> <a name="db_servers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.dbServers"></a>

- *Type:* typing.List[str]

The list of database servers for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#db_servers OdbCloudVmCluster#db_servers}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.displayName"></a>

- *Type:* str

The user-friendly name for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#display_name OdbCloudVmCluster#display_name}

---

##### `gi_version`<sup>Optional</sup> <a name="gi_version" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.giVersion"></a>

- *Type:* str

The software version of the Oracle Grid Infrastructure (GI) for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#gi_version OdbCloudVmCluster#gi_version}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.hostname"></a>

- *Type:* str

The host name for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#hostname OdbCloudVmCluster#hostname}

---

##### `iam_roles`<sup>Optional</sup> <a name="iam_roles" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.iamRoles"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>]

The AWS Identity and Access Management (IAM) service roles associated with the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#iam_roles OdbCloudVmCluster#iam_roles}

---

##### `is_local_backup_enabled`<sup>Optional</sup> <a name="is_local_backup_enabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.isLocalBackupEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether database backups to local Exadata storage is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#is_local_backup_enabled OdbCloudVmCluster#is_local_backup_enabled}

---

##### `is_sparse_diskgroup_enabled`<sup>Optional</sup> <a name="is_sparse_diskgroup_enabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.isSparseDiskgroupEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether the VM cluster is configured with a sparse disk group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#is_sparse_diskgroup_enabled OdbCloudVmCluster#is_sparse_diskgroup_enabled}

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.licenseModel"></a>

- *Type:* str

The Oracle license model applied to the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#license_model OdbCloudVmCluster#license_model}

---

##### `memory_size_in_g_bs`<sup>Optional</sup> <a name="memory_size_in_g_bs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.memorySizeInGBs"></a>

- *Type:* typing.Union[int, float]

The amount of memory, in gigabytes (GB), that's allocated for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#memory_size_in_g_bs OdbCloudVmCluster#memory_size_in_g_bs}

---

##### `odb_network_id`<sup>Optional</sup> <a name="odb_network_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.odbNetworkId"></a>

- *Type:* str

The unique identifier of the ODB network for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#odb_network_id OdbCloudVmCluster#odb_network_id}

---

##### `scan_listener_port_tcp`<sup>Optional</sup> <a name="scan_listener_port_tcp" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.scanListenerPortTcp"></a>

- *Type:* typing.Union[int, float]

Property description not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#scan_listener_port_tcp OdbCloudVmCluster#scan_listener_port_tcp}

---

##### `ssh_public_keys`<sup>Optional</sup> <a name="ssh_public_keys" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.sshPublicKeys"></a>

- *Type:* typing.List[str]

The public key portion of one or more key pairs used for SSH access to the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#ssh_public_keys OdbCloudVmCluster#ssh_public_keys}

---

##### `system_version`<sup>Optional</sup> <a name="system_version" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.systemVersion"></a>

- *Type:* str

The operating system version of the image chosen for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#system_version OdbCloudVmCluster#system_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>]

Tags to assign to the Vm Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#tags OdbCloudVmCluster#tags}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.timeZone"></a>

- *Type:* str

The time zone of the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#time_zone OdbCloudVmCluster#time_zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDataCollectionOptions">put_data_collection_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDbNodes">put_db_nodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putIamRoles">put_iam_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetCloudExadataInfrastructureId">reset_cloud_exadata_infrastructure_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetClusterName">reset_cluster_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetCpuCoreCount">reset_cpu_core_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDataCollectionOptions">reset_data_collection_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDataStorageSizeInTBs">reset_data_storage_size_in_t_bs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDbNodes">reset_db_nodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDbNodeStorageSizeInGBs">reset_db_node_storage_size_in_g_bs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDbServers">reset_db_servers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetGiVersion">reset_gi_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetIamRoles">reset_iam_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetIsLocalBackupEnabled">reset_is_local_backup_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetIsSparseDiskgroupEnabled">reset_is_sparse_diskgroup_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetLicenseModel">reset_license_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetMemorySizeInGBs">reset_memory_size_in_g_bs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetOdbNetworkId">reset_odb_network_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetScanListenerPortTcp">reset_scan_listener_port_tcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetSshPublicKeys">reset_ssh_public_keys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetSystemVersion">reset_system_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data_collection_options` <a name="put_data_collection_options" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDataCollectionOptions"></a>

```python
def put_data_collection_options(
  is_diagnostics_events_enabled: bool | IResolvable = None,
  is_health_monitoring_enabled: bool | IResolvable = None,
  is_incident_logs_enabled: bool | IResolvable = None
) -> None
```

###### `is_diagnostics_events_enabled`<sup>Optional</sup> <a name="is_diagnostics_events_enabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDataCollectionOptions.parameter.isDiagnosticsEventsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether diagnostic collection is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#is_diagnostics_events_enabled OdbCloudVmCluster#is_diagnostics_events_enabled}

---

###### `is_health_monitoring_enabled`<sup>Optional</sup> <a name="is_health_monitoring_enabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDataCollectionOptions.parameter.isHealthMonitoringEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether health monitoring is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#is_health_monitoring_enabled OdbCloudVmCluster#is_health_monitoring_enabled}

---

###### `is_incident_logs_enabled`<sup>Optional</sup> <a name="is_incident_logs_enabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDataCollectionOptions.parameter.isIncidentLogsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether incident logs are enabled for the cloud VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#is_incident_logs_enabled OdbCloudVmCluster#is_incident_logs_enabled}

---

##### `put_db_nodes` <a name="put_db_nodes" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDbNodes"></a>

```python
def put_db_nodes(
  value: IResolvable | typing.List[OdbCloudVmClusterDbNodes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDbNodes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>]

---

##### `put_iam_roles` <a name="put_iam_roles" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putIamRoles"></a>

```python
def put_iam_roles(
  value: IResolvable | typing.List[OdbCloudVmClusterIamRoles]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putIamRoles.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[OdbCloudVmClusterTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>]

---

##### `reset_cloud_exadata_infrastructure_id` <a name="reset_cloud_exadata_infrastructure_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetCloudExadataInfrastructureId"></a>

```python
def reset_cloud_exadata_infrastructure_id() -> None
```

##### `reset_cluster_name` <a name="reset_cluster_name" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetClusterName"></a>

```python
def reset_cluster_name() -> None
```

##### `reset_cpu_core_count` <a name="reset_cpu_core_count" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetCpuCoreCount"></a>

```python
def reset_cpu_core_count() -> None
```

##### `reset_data_collection_options` <a name="reset_data_collection_options" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDataCollectionOptions"></a>

```python
def reset_data_collection_options() -> None
```

##### `reset_data_storage_size_in_t_bs` <a name="reset_data_storage_size_in_t_bs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDataStorageSizeInTBs"></a>

```python
def reset_data_storage_size_in_t_bs() -> None
```

##### `reset_db_nodes` <a name="reset_db_nodes" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDbNodes"></a>

```python
def reset_db_nodes() -> None
```

##### `reset_db_node_storage_size_in_g_bs` <a name="reset_db_node_storage_size_in_g_bs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDbNodeStorageSizeInGBs"></a>

```python
def reset_db_node_storage_size_in_g_bs() -> None
```

##### `reset_db_servers` <a name="reset_db_servers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDbServers"></a>

```python
def reset_db_servers() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_gi_version` <a name="reset_gi_version" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetGiVersion"></a>

```python
def reset_gi_version() -> None
```

##### `reset_hostname` <a name="reset_hostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_iam_roles` <a name="reset_iam_roles" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetIamRoles"></a>

```python
def reset_iam_roles() -> None
```

##### `reset_is_local_backup_enabled` <a name="reset_is_local_backup_enabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetIsLocalBackupEnabled"></a>

```python
def reset_is_local_backup_enabled() -> None
```

##### `reset_is_sparse_diskgroup_enabled` <a name="reset_is_sparse_diskgroup_enabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetIsSparseDiskgroupEnabled"></a>

```python
def reset_is_sparse_diskgroup_enabled() -> None
```

##### `reset_license_model` <a name="reset_license_model" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetLicenseModel"></a>

```python
def reset_license_model() -> None
```

##### `reset_memory_size_in_g_bs` <a name="reset_memory_size_in_g_bs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetMemorySizeInGBs"></a>

```python
def reset_memory_size_in_g_bs() -> None
```

##### `reset_odb_network_id` <a name="reset_odb_network_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetOdbNetworkId"></a>

```python
def reset_odb_network_id() -> None
```

##### `reset_scan_listener_port_tcp` <a name="reset_scan_listener_port_tcp" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetScanListenerPortTcp"></a>

```python
def reset_scan_listener_port_tcp() -> None
```

##### `reset_ssh_public_keys` <a name="reset_ssh_public_keys" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetSshPublicKeys"></a>

```python
def reset_ssh_public_keys() -> None
```

##### `reset_system_version` <a name="reset_system_version" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetSystemVersion"></a>

```python
def reset_system_version() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OdbCloudVmCluster resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isConstruct"></a>

```python
from cdktn_provider_awscc import odb_cloud_vm_cluster

odbCloudVmCluster.OdbCloudVmCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isTerraformElement"></a>

```python
from cdktn_provider_awscc import odb_cloud_vm_cluster

odbCloudVmCluster.OdbCloudVmCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isTerraformResource"></a>

```python
from cdktn_provider_awscc import odb_cloud_vm_cluster

odbCloudVmCluster.OdbCloudVmCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import odb_cloud_vm_cluster

odbCloudVmCluster.OdbCloudVmCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OdbCloudVmCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OdbCloudVmCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OdbCloudVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OdbCloudVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudVmClusterArn">cloud_vm_cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudVmClusterId">cloud_vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.computeModel">compute_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataCollectionOptions">data_collection_options</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference">OdbCloudVmClusterDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodes">db_nodes</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList">OdbCloudVmClusterDbNodesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.diskRedundancy">disk_redundancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.iamRoles">iam_roles</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList">OdbCloudVmClusterIamRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.listenerPort">listener_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.ociResourceAnchorName">oci_resource_anchor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.ociUrl">oci_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanDnsName">scan_dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanIpIds">scan_ip_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.storageSizeInGBs">storage_size_in_g_bs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList">OdbCloudVmClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.vipIds">vip_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudExadataInfrastructureIdInput">cloud_exadata_infrastructure_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cpuCoreCountInput">cpu_core_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataCollectionOptionsInput">data_collection_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataStorageSizeInTBsInput">data_storage_size_in_t_bs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodesInput">db_nodes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodeStorageSizeInGBsInput">db_node_storage_size_in_g_bs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbServersInput">db_servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.giVersionInput">gi_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.iamRolesInput">iam_roles_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isLocalBackupEnabledInput">is_local_backup_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isSparseDiskgroupEnabledInput">is_sparse_diskgroup_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.licenseModelInput">license_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.memorySizeInGBsInput">memory_size_in_g_bs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.odbNetworkIdInput">odb_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanListenerPortTcpInput">scan_listener_port_tcp_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.sshPublicKeysInput">ssh_public_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.systemVersionInput">system_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudExadataInfrastructureId">cloud_exadata_infrastructure_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataStorageSizeInTBs">data_storage_size_in_t_bs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodeStorageSizeInGBs">db_node_storage_size_in_g_bs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbServers">db_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.giVersion">gi_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isLocalBackupEnabled">is_local_backup_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isSparseDiskgroupEnabled">is_sparse_diskgroup_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.memorySizeInGBs">memory_size_in_g_bs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.odbNetworkId">odb_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanListenerPortTcp">scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.systemVersion">system_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cloud_vm_cluster_arn`<sup>Required</sup> <a name="cloud_vm_cluster_arn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudVmClusterArn"></a>

```python
cloud_vm_cluster_arn: str
```

- *Type:* str

---

##### `cloud_vm_cluster_id`<sup>Required</sup> <a name="cloud_vm_cluster_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudVmClusterId"></a>

```python
cloud_vm_cluster_id: str
```

- *Type:* str

---

##### `compute_model`<sup>Required</sup> <a name="compute_model" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.computeModel"></a>

```python
compute_model: str
```

- *Type:* str

---

##### `data_collection_options`<sup>Required</sup> <a name="data_collection_options" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataCollectionOptions"></a>

```python
data_collection_options: OdbCloudVmClusterDataCollectionOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference">OdbCloudVmClusterDataCollectionOptionsOutputReference</a>

---

##### `db_nodes`<sup>Required</sup> <a name="db_nodes" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodes"></a>

```python
db_nodes: OdbCloudVmClusterDbNodesList
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList">OdbCloudVmClusterDbNodesList</a>

---

##### `disk_redundancy`<sup>Required</sup> <a name="disk_redundancy" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.diskRedundancy"></a>

```python
disk_redundancy: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `iam_roles`<sup>Required</sup> <a name="iam_roles" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.iamRoles"></a>

```python
iam_roles: OdbCloudVmClusterIamRolesList
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList">OdbCloudVmClusterIamRolesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `listener_port`<sup>Required</sup> <a name="listener_port" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.listenerPort"></a>

```python
listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `oci_resource_anchor_name`<sup>Required</sup> <a name="oci_resource_anchor_name" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.ociResourceAnchorName"></a>

```python
oci_resource_anchor_name: str
```

- *Type:* str

---

##### `oci_url`<sup>Required</sup> <a name="oci_url" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.ociUrl"></a>

```python
oci_url: str
```

- *Type:* str

---

##### `scan_dns_name`<sup>Required</sup> <a name="scan_dns_name" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanDnsName"></a>

```python
scan_dns_name: str
```

- *Type:* str

---

##### `scan_ip_ids`<sup>Required</sup> <a name="scan_ip_ids" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanIpIds"></a>

```python
scan_ip_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `storage_size_in_g_bs`<sup>Required</sup> <a name="storage_size_in_g_bs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.storageSizeInGBs"></a>

```python
storage_size_in_g_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.tags"></a>

```python
tags: OdbCloudVmClusterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList">OdbCloudVmClusterTagsList</a>

---

##### `vip_ids`<sup>Required</sup> <a name="vip_ids" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.vipIds"></a>

```python
vip_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cloud_exadata_infrastructure_id_input`<sup>Optional</sup> <a name="cloud_exadata_infrastructure_id_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudExadataInfrastructureIdInput"></a>

```python
cloud_exadata_infrastructure_id_input: str
```

- *Type:* str

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `cpu_core_count_input`<sup>Optional</sup> <a name="cpu_core_count_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cpuCoreCountInput"></a>

```python
cpu_core_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_collection_options_input`<sup>Optional</sup> <a name="data_collection_options_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataCollectionOptionsInput"></a>

```python
data_collection_options_input: IResolvable | OdbCloudVmClusterDataCollectionOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a>

---

##### `data_storage_size_in_t_bs_input`<sup>Optional</sup> <a name="data_storage_size_in_t_bs_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataStorageSizeInTBsInput"></a>

```python
data_storage_size_in_t_bs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_nodes_input`<sup>Optional</sup> <a name="db_nodes_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodesInput"></a>

```python
db_nodes_input: IResolvable | typing.List[OdbCloudVmClusterDbNodes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>]

---

##### `db_node_storage_size_in_g_bs_input`<sup>Optional</sup> <a name="db_node_storage_size_in_g_bs_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodeStorageSizeInGBsInput"></a>

```python
db_node_storage_size_in_g_bs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_servers_input`<sup>Optional</sup> <a name="db_servers_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbServersInput"></a>

```python
db_servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `gi_version_input`<sup>Optional</sup> <a name="gi_version_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.giVersionInput"></a>

```python
gi_version_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `iam_roles_input`<sup>Optional</sup> <a name="iam_roles_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.iamRolesInput"></a>

```python
iam_roles_input: IResolvable | typing.List[OdbCloudVmClusterIamRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>]

---

##### `is_local_backup_enabled_input`<sup>Optional</sup> <a name="is_local_backup_enabled_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isLocalBackupEnabledInput"></a>

```python
is_local_backup_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_sparse_diskgroup_enabled_input`<sup>Optional</sup> <a name="is_sparse_diskgroup_enabled_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isSparseDiskgroupEnabledInput"></a>

```python
is_sparse_diskgroup_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `license_model_input`<sup>Optional</sup> <a name="license_model_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.licenseModelInput"></a>

```python
license_model_input: str
```

- *Type:* str

---

##### `memory_size_in_g_bs_input`<sup>Optional</sup> <a name="memory_size_in_g_bs_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.memorySizeInGBsInput"></a>

```python
memory_size_in_g_bs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `odb_network_id_input`<sup>Optional</sup> <a name="odb_network_id_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.odbNetworkIdInput"></a>

```python
odb_network_id_input: str
```

- *Type:* str

---

##### `scan_listener_port_tcp_input`<sup>Optional</sup> <a name="scan_listener_port_tcp_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanListenerPortTcpInput"></a>

```python
scan_listener_port_tcp_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssh_public_keys_input`<sup>Optional</sup> <a name="ssh_public_keys_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.sshPublicKeysInput"></a>

```python
ssh_public_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `system_version_input`<sup>Optional</sup> <a name="system_version_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.systemVersionInput"></a>

```python
system_version_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[OdbCloudVmClusterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `cloud_exadata_infrastructure_id`<sup>Required</sup> <a name="cloud_exadata_infrastructure_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudExadataInfrastructureId"></a>

```python
cloud_exadata_infrastructure_id: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_t_bs`<sup>Required</sup> <a name="data_storage_size_in_t_bs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataStorageSizeInTBs"></a>

```python
data_storage_size_in_t_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_node_storage_size_in_g_bs`<sup>Required</sup> <a name="db_node_storage_size_in_g_bs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodeStorageSizeInGBs"></a>

```python
db_node_storage_size_in_g_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_servers`<sup>Required</sup> <a name="db_servers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbServers"></a>

```python
db_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `gi_version`<sup>Required</sup> <a name="gi_version" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.giVersion"></a>

```python
gi_version: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `is_local_backup_enabled`<sup>Required</sup> <a name="is_local_backup_enabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isLocalBackupEnabled"></a>

```python
is_local_backup_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_sparse_diskgroup_enabled`<sup>Required</sup> <a name="is_sparse_diskgroup_enabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isSparseDiskgroupEnabled"></a>

```python
is_sparse_diskgroup_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `memory_size_in_g_bs`<sup>Required</sup> <a name="memory_size_in_g_bs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.memorySizeInGBs"></a>

```python
memory_size_in_g_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `odb_network_id`<sup>Required</sup> <a name="odb_network_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.odbNetworkId"></a>

```python
odb_network_id: str
```

- *Type:* str

---

##### `scan_listener_port_tcp`<sup>Required</sup> <a name="scan_listener_port_tcp" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanListenerPortTcp"></a>

```python
scan_listener_port_tcp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `system_version`<sup>Required</sup> <a name="system_version" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.systemVersion"></a>

```python
system_version: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OdbCloudVmClusterConfig <a name="OdbCloudVmClusterConfig" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import odb_cloud_vm_cluster

odbCloudVmCluster.OdbCloudVmClusterConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cloud_exadata_infrastructure_id: str = None,
  cluster_name: str = None,
  cpu_core_count: typing.Union[int, float] = None,
  data_collection_options: OdbCloudVmClusterDataCollectionOptions = None,
  data_storage_size_in_t_bs: typing.Union[int, float] = None,
  db_nodes: IResolvable | typing.List[OdbCloudVmClusterDbNodes] = None,
  db_node_storage_size_in_g_bs: typing.Union[int, float] = None,
  db_servers: typing.List[str] = None,
  display_name: str = None,
  gi_version: str = None,
  hostname: str = None,
  iam_roles: IResolvable | typing.List[OdbCloudVmClusterIamRoles] = None,
  is_local_backup_enabled: bool | IResolvable = None,
  is_sparse_diskgroup_enabled: bool | IResolvable = None,
  license_model: str = None,
  memory_size_in_g_bs: typing.Union[int, float] = None,
  odb_network_id: str = None,
  scan_listener_port_tcp: typing.Union[int, float] = None,
  ssh_public_keys: typing.List[str] = None,
  system_version: str = None,
  tags: IResolvable | typing.List[OdbCloudVmClusterTags] = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.cloudExadataInfrastructureId">cloud_exadata_infrastructure_id</a></code> | <code>str</code> | The unique identifier of the Exadata infrastructure that this VM cluster belongs to. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | The name of the Grid Infrastructure (GI) cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | The number of CPU cores enabled on the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dataCollectionOptions">data_collection_options</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a></code> | The set of diagnostic collection options enabled for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dataStorageSizeInTBs">data_storage_size_in_t_bs</a></code> | <code>typing.Union[int, float]</code> | The size of the data disk group, in terabytes (TB), that's allocated for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dbNodes">db_nodes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>]</code> | The DB nodes that are implicitly created and managed as part of this VM Cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dbNodeStorageSizeInGBs">db_node_storage_size_in_g_bs</a></code> | <code>typing.Union[int, float]</code> | The amount of local node storage, in gigabytes (GB), that's allocated for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dbServers">db_servers</a></code> | <code>typing.List[str]</code> | The list of database servers for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.displayName">display_name</a></code> | <code>str</code> | The user-friendly name for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.giVersion">gi_version</a></code> | <code>str</code> | The software version of the Oracle Grid Infrastructure (GI) for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.hostname">hostname</a></code> | <code>str</code> | The host name for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.iamRoles">iam_roles</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>]</code> | The AWS Identity and Access Management (IAM) service roles associated with the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.isLocalBackupEnabled">is_local_backup_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether database backups to local Exadata storage is enabled for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.isSparseDiskgroupEnabled">is_sparse_diskgroup_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the VM cluster is configured with a sparse disk group. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.licenseModel">license_model</a></code> | <code>str</code> | The Oracle license model applied to the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.memorySizeInGBs">memory_size_in_g_bs</a></code> | <code>typing.Union[int, float]</code> | The amount of memory, in gigabytes (GB), that's allocated for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.odbNetworkId">odb_network_id</a></code> | <code>str</code> | The unique identifier of the ODB network for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.scanListenerPortTcp">scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | Property description not available. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | The public key portion of one or more key pairs used for SSH access to the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.systemVersion">system_version</a></code> | <code>str</code> | The operating system version of the image chosen for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>]</code> | Tags to assign to the Vm Cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.timeZone">time_zone</a></code> | <code>str</code> | The time zone of the VM cluster. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cloud_exadata_infrastructure_id`<sup>Optional</sup> <a name="cloud_exadata_infrastructure_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.cloudExadataInfrastructureId"></a>

```python
cloud_exadata_infrastructure_id: str
```

- *Type:* str

The unique identifier of the Exadata infrastructure that this VM cluster belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#cloud_exadata_infrastructure_id OdbCloudVmCluster#cloud_exadata_infrastructure_id}

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

The name of the Grid Infrastructure (GI) cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#cluster_name OdbCloudVmCluster#cluster_name}

---

##### `cpu_core_count`<sup>Optional</sup> <a name="cpu_core_count" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of CPU cores enabled on the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#cpu_core_count OdbCloudVmCluster#cpu_core_count}

---

##### `data_collection_options`<sup>Optional</sup> <a name="data_collection_options" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dataCollectionOptions"></a>

```python
data_collection_options: OdbCloudVmClusterDataCollectionOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a>

The set of diagnostic collection options enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#data_collection_options OdbCloudVmCluster#data_collection_options}

---

##### `data_storage_size_in_t_bs`<sup>Optional</sup> <a name="data_storage_size_in_t_bs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dataStorageSizeInTBs"></a>

```python
data_storage_size_in_t_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size of the data disk group, in terabytes (TB), that's allocated for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#data_storage_size_in_t_bs OdbCloudVmCluster#data_storage_size_in_t_bs}

---

##### `db_nodes`<sup>Optional</sup> <a name="db_nodes" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dbNodes"></a>

```python
db_nodes: IResolvable | typing.List[OdbCloudVmClusterDbNodes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>]

The DB nodes that are implicitly created and managed as part of this VM Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#db_nodes OdbCloudVmCluster#db_nodes}

---

##### `db_node_storage_size_in_g_bs`<sup>Optional</sup> <a name="db_node_storage_size_in_g_bs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dbNodeStorageSizeInGBs"></a>

```python
db_node_storage_size_in_g_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of local node storage, in gigabytes (GB), that's allocated for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#db_node_storage_size_in_g_bs OdbCloudVmCluster#db_node_storage_size_in_g_bs}

---

##### `db_servers`<sup>Optional</sup> <a name="db_servers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dbServers"></a>

```python
db_servers: typing.List[str]
```

- *Type:* typing.List[str]

The list of database servers for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#db_servers OdbCloudVmCluster#db_servers}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The user-friendly name for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#display_name OdbCloudVmCluster#display_name}

---

##### `gi_version`<sup>Optional</sup> <a name="gi_version" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.giVersion"></a>

```python
gi_version: str
```

- *Type:* str

The software version of the Oracle Grid Infrastructure (GI) for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#gi_version OdbCloudVmCluster#gi_version}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

The host name for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#hostname OdbCloudVmCluster#hostname}

---

##### `iam_roles`<sup>Optional</sup> <a name="iam_roles" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.iamRoles"></a>

```python
iam_roles: IResolvable | typing.List[OdbCloudVmClusterIamRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>]

The AWS Identity and Access Management (IAM) service roles associated with the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#iam_roles OdbCloudVmCluster#iam_roles}

---

##### `is_local_backup_enabled`<sup>Optional</sup> <a name="is_local_backup_enabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.isLocalBackupEnabled"></a>

```python
is_local_backup_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether database backups to local Exadata storage is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#is_local_backup_enabled OdbCloudVmCluster#is_local_backup_enabled}

---

##### `is_sparse_diskgroup_enabled`<sup>Optional</sup> <a name="is_sparse_diskgroup_enabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.isSparseDiskgroupEnabled"></a>

```python
is_sparse_diskgroup_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the VM cluster is configured with a sparse disk group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#is_sparse_diskgroup_enabled OdbCloudVmCluster#is_sparse_diskgroup_enabled}

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

The Oracle license model applied to the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#license_model OdbCloudVmCluster#license_model}

---

##### `memory_size_in_g_bs`<sup>Optional</sup> <a name="memory_size_in_g_bs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.memorySizeInGBs"></a>

```python
memory_size_in_g_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of memory, in gigabytes (GB), that's allocated for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#memory_size_in_g_bs OdbCloudVmCluster#memory_size_in_g_bs}

---

##### `odb_network_id`<sup>Optional</sup> <a name="odb_network_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.odbNetworkId"></a>

```python
odb_network_id: str
```

- *Type:* str

The unique identifier of the ODB network for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#odb_network_id OdbCloudVmCluster#odb_network_id}

---

##### `scan_listener_port_tcp`<sup>Optional</sup> <a name="scan_listener_port_tcp" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.scanListenerPortTcp"></a>

```python
scan_listener_port_tcp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Property description not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#scan_listener_port_tcp OdbCloudVmCluster#scan_listener_port_tcp}

---

##### `ssh_public_keys`<sup>Optional</sup> <a name="ssh_public_keys" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

The public key portion of one or more key pairs used for SSH access to the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#ssh_public_keys OdbCloudVmCluster#ssh_public_keys}

---

##### `system_version`<sup>Optional</sup> <a name="system_version" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.systemVersion"></a>

```python
system_version: str
```

- *Type:* str

The operating system version of the image chosen for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#system_version OdbCloudVmCluster#system_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[OdbCloudVmClusterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>]

Tags to assign to the Vm Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#tags OdbCloudVmCluster#tags}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

The time zone of the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#time_zone OdbCloudVmCluster#time_zone}

---

### OdbCloudVmClusterDataCollectionOptions <a name="OdbCloudVmClusterDataCollectionOptions" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.Initializer"></a>

```python
from cdktn_provider_awscc import odb_cloud_vm_cluster

odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions(
  is_diagnostics_events_enabled: bool | IResolvable = None,
  is_health_monitoring_enabled: bool | IResolvable = None,
  is_incident_logs_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.property.isDiagnosticsEventsEnabled">is_diagnostics_events_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether diagnostic collection is enabled for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.property.isHealthMonitoringEnabled">is_health_monitoring_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether health monitoring is enabled for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.property.isIncidentLogsEnabled">is_incident_logs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether incident logs are enabled for the cloud VM cluster. |

---

##### `is_diagnostics_events_enabled`<sup>Optional</sup> <a name="is_diagnostics_events_enabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```python
is_diagnostics_events_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether diagnostic collection is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#is_diagnostics_events_enabled OdbCloudVmCluster#is_diagnostics_events_enabled}

---

##### `is_health_monitoring_enabled`<sup>Optional</sup> <a name="is_health_monitoring_enabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.property.isHealthMonitoringEnabled"></a>

```python
is_health_monitoring_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether health monitoring is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#is_health_monitoring_enabled OdbCloudVmCluster#is_health_monitoring_enabled}

---

##### `is_incident_logs_enabled`<sup>Optional</sup> <a name="is_incident_logs_enabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```python
is_incident_logs_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether incident logs are enabled for the cloud VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#is_incident_logs_enabled OdbCloudVmCluster#is_incident_logs_enabled}

---

### OdbCloudVmClusterDbNodes <a name="OdbCloudVmClusterDbNodes" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.Initializer"></a>

```python
from cdktn_provider_awscc import odb_cloud_vm_cluster

odbCloudVmCluster.OdbCloudVmClusterDbNodes(
  backup_ip_id: str = None,
  backup_vnic2_id: str = None,
  cpu_core_count: typing.Union[int, float] = None,
  db_node_arn: str = None,
  db_node_id: str = None,
  db_node_storage_size_in_g_bs: typing.Union[int, float] = None,
  db_server_id: str = None,
  db_system_id: str = None,
  host_ip_id: str = None,
  hostname: str = None,
  memory_size_in_g_bs: typing.Union[int, float] = None,
  ocid: str = None,
  status: str = None,
  tags: IResolvable | typing.List[OdbCloudVmClusterDbNodesTags] = None,
  vnic2_id: str = None,
  vnic_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.backupIpId">backup_ip_id</a></code> | <code>str</code> | The Oracle Cloud ID (OCID) of the backup IP address that's associated with the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.backupVnic2Id">backup_vnic2_id</a></code> | <code>str</code> | The OCID of the second backup virtual network interface card (VNIC) for the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | The number of CPU cores enabled on the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbNodeArn">db_node_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbNodeId">db_node_id</a></code> | <code>str</code> | The unique identifier of the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbNodeStorageSizeInGBs">db_node_storage_size_in_g_bs</a></code> | <code>typing.Union[int, float]</code> | The amount of local node storage, in gigabytes (GB), that's allocated on the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbServerId">db_server_id</a></code> | <code>str</code> | The unique identifier of the database server that's associated with the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbSystemId">db_system_id</a></code> | <code>str</code> | The OCID of the DB system. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.hostIpId">host_ip_id</a></code> | <code>str</code> | The OCID of the host IP address that's associated with the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.hostname">hostname</a></code> | <code>str</code> | The host name for the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.memorySizeInGBs">memory_size_in_g_bs</a></code> | <code>typing.Union[int, float]</code> | The amount of memory, in gigabytes (GB), that allocated on the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.ocid">ocid</a></code> | <code>str</code> | The OCID of the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.status">status</a></code> | <code>str</code> | The current status of the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#tags OdbCloudVmCluster#tags}. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.vnic2Id">vnic2_id</a></code> | <code>str</code> | The OCID of the second VNIC. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.vnicId">vnic_id</a></code> | <code>str</code> | The OCID of the VNIC. |

---

##### `backup_ip_id`<sup>Optional</sup> <a name="backup_ip_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.backupIpId"></a>

```python
backup_ip_id: str
```

- *Type:* str

The Oracle Cloud ID (OCID) of the backup IP address that's associated with the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#backup_ip_id OdbCloudVmCluster#backup_ip_id}

---

##### `backup_vnic2_id`<sup>Optional</sup> <a name="backup_vnic2_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.backupVnic2Id"></a>

```python
backup_vnic2_id: str
```

- *Type:* str

The OCID of the second backup virtual network interface card (VNIC) for the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#backup_vnic_2_id OdbCloudVmCluster#backup_vnic_2_id}

---

##### `cpu_core_count`<sup>Optional</sup> <a name="cpu_core_count" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of CPU cores enabled on the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#cpu_core_count OdbCloudVmCluster#cpu_core_count}

---

##### `db_node_arn`<sup>Optional</sup> <a name="db_node_arn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbNodeArn"></a>

```python
db_node_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#db_node_arn OdbCloudVmCluster#db_node_arn}

---

##### `db_node_id`<sup>Optional</sup> <a name="db_node_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbNodeId"></a>

```python
db_node_id: str
```

- *Type:* str

The unique identifier of the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#db_node_id OdbCloudVmCluster#db_node_id}

---

##### `db_node_storage_size_in_g_bs`<sup>Optional</sup> <a name="db_node_storage_size_in_g_bs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbNodeStorageSizeInGBs"></a>

```python
db_node_storage_size_in_g_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of local node storage, in gigabytes (GB), that's allocated on the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#db_node_storage_size_in_g_bs OdbCloudVmCluster#db_node_storage_size_in_g_bs}

---

##### `db_server_id`<sup>Optional</sup> <a name="db_server_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbServerId"></a>

```python
db_server_id: str
```

- *Type:* str

The unique identifier of the database server that's associated with the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#db_server_id OdbCloudVmCluster#db_server_id}

---

##### `db_system_id`<sup>Optional</sup> <a name="db_system_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

The OCID of the DB system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#db_system_id OdbCloudVmCluster#db_system_id}

---

##### `host_ip_id`<sup>Optional</sup> <a name="host_ip_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.hostIpId"></a>

```python
host_ip_id: str
```

- *Type:* str

The OCID of the host IP address that's associated with the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#host_ip_id OdbCloudVmCluster#host_ip_id}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

The host name for the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#hostname OdbCloudVmCluster#hostname}

---

##### `memory_size_in_g_bs`<sup>Optional</sup> <a name="memory_size_in_g_bs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.memorySizeInGBs"></a>

```python
memory_size_in_g_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of memory, in gigabytes (GB), that allocated on the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#memory_size_in_g_bs OdbCloudVmCluster#memory_size_in_g_bs}

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

The OCID of the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#ocid OdbCloudVmCluster#ocid}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.status"></a>

```python
status: str
```

- *Type:* str

The current status of the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#status OdbCloudVmCluster#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.tags"></a>

```python
tags: IResolvable | typing.List[OdbCloudVmClusterDbNodesTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#tags OdbCloudVmCluster#tags}.

---

##### `vnic2_id`<sup>Optional</sup> <a name="vnic2_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.vnic2Id"></a>

```python
vnic2_id: str
```

- *Type:* str

The OCID of the second VNIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#vnic_2_id OdbCloudVmCluster#vnic_2_id}

---

##### `vnic_id`<sup>Optional</sup> <a name="vnic_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.vnicId"></a>

```python
vnic_id: str
```

- *Type:* str

The OCID of the VNIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#vnic_id OdbCloudVmCluster#vnic_id}

---

### OdbCloudVmClusterDbNodesTags <a name="OdbCloudVmClusterDbNodesTags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags.Initializer"></a>

```python
from cdktn_provider_awscc import odb_cloud_vm_cluster

odbCloudVmCluster.OdbCloudVmClusterDbNodesTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +,

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#value OdbCloudVmCluster#value}

---

### OdbCloudVmClusterIamRoles <a name="OdbCloudVmClusterIamRoles" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.Initializer"></a>

```python
from cdktn_provider_awscc import odb_cloud_vm_cluster

odbCloudVmCluster.OdbCloudVmClusterIamRoles(
  aws_integration: str = None,
  iam_role_arn: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.property.awsIntegration">aws_integration</a></code> | <code>str</code> | The AWS integration configuration settings for the AWS Identity and Access Management (IAM) service role. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) service role. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.property.status">status</a></code> | <code>str</code> | The current status of the AWS Identity and Access Management (IAM) service role. |

---

##### `aws_integration`<sup>Optional</sup> <a name="aws_integration" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.property.awsIntegration"></a>

```python
aws_integration: str
```

- *Type:* str

The AWS integration configuration settings for the AWS Identity and Access Management (IAM) service role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#aws_integration OdbCloudVmCluster#aws_integration}

---

##### `iam_role_arn`<sup>Optional</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) service role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#iam_role_arn OdbCloudVmCluster#iam_role_arn}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.property.status"></a>

```python
status: str
```

- *Type:* str

The current status of the AWS Identity and Access Management (IAM) service role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#status OdbCloudVmCluster#status}

---

### OdbCloudVmClusterTags <a name="OdbCloudVmClusterTags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags.Initializer"></a>

```python
from cdktn_provider_awscc import odb_cloud_vm_cluster

odbCloudVmCluster.OdbCloudVmClusterTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +,

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#value OdbCloudVmCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbCloudVmClusterDataCollectionOptionsOutputReference <a name="OdbCloudVmClusterDataCollectionOptionsOutputReference" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import odb_cloud_vm_cluster

odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">reset_is_diagnostics_events_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled">reset_is_health_monitoring_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">reset_is_incident_logs_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_diagnostics_events_enabled` <a name="reset_is_diagnostics_events_enabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```python
def reset_is_diagnostics_events_enabled() -> None
```

##### `reset_is_health_monitoring_enabled` <a name="reset_is_health_monitoring_enabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled"></a>

```python
def reset_is_health_monitoring_enabled() -> None
```

##### `reset_is_incident_logs_enabled` <a name="reset_is_incident_logs_enabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```python
def reset_is_incident_logs_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">is_diagnostics_events_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput">is_health_monitoring_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">is_incident_logs_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">is_diagnostics_events_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">is_health_monitoring_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">is_incident_logs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_diagnostics_events_enabled_input`<sup>Optional</sup> <a name="is_diagnostics_events_enabled_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```python
is_diagnostics_events_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_health_monitoring_enabled_input`<sup>Optional</sup> <a name="is_health_monitoring_enabled_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput"></a>

```python
is_health_monitoring_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_incident_logs_enabled_input`<sup>Optional</sup> <a name="is_incident_logs_enabled_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```python
is_incident_logs_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_diagnostics_events_enabled`<sup>Required</sup> <a name="is_diagnostics_events_enabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```python
is_diagnostics_events_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_health_monitoring_enabled`<sup>Required</sup> <a name="is_health_monitoring_enabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```python
is_health_monitoring_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_incident_logs_enabled`<sup>Required</sup> <a name="is_incident_logs_enabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```python
is_incident_logs_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OdbCloudVmClusterDataCollectionOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a>

---


### OdbCloudVmClusterDbNodesList <a name="OdbCloudVmClusterDbNodesList" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer"></a>

```python
from cdktn_provider_awscc import odb_cloud_vm_cluster

odbCloudVmCluster.OdbCloudVmClusterDbNodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbCloudVmClusterDbNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OdbCloudVmClusterDbNodes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>]

---


### OdbCloudVmClusterDbNodesOutputReference <a name="OdbCloudVmClusterDbNodesOutputReference" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import odb_cloud_vm_cluster

odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetBackupIpId">reset_backup_ip_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetBackupVnic2Id">reset_backup_vnic2_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetCpuCoreCount">reset_cpu_core_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbNodeArn">reset_db_node_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbNodeId">reset_db_node_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbNodeStorageSizeInGBs">reset_db_node_storage_size_in_g_bs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbServerId">reset_db_server_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbSystemId">reset_db_system_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetHostIpId">reset_host_ip_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetMemorySizeInGBs">reset_memory_size_in_g_bs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetOcid">reset_ocid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetVnic2Id">reset_vnic2_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetVnicId">reset_vnic_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[OdbCloudVmClusterDbNodesTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>]

---

##### `reset_backup_ip_id` <a name="reset_backup_ip_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetBackupIpId"></a>

```python
def reset_backup_ip_id() -> None
```

##### `reset_backup_vnic2_id` <a name="reset_backup_vnic2_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetBackupVnic2Id"></a>

```python
def reset_backup_vnic2_id() -> None
```

##### `reset_cpu_core_count` <a name="reset_cpu_core_count" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetCpuCoreCount"></a>

```python
def reset_cpu_core_count() -> None
```

##### `reset_db_node_arn` <a name="reset_db_node_arn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbNodeArn"></a>

```python
def reset_db_node_arn() -> None
```

##### `reset_db_node_id` <a name="reset_db_node_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbNodeId"></a>

```python
def reset_db_node_id() -> None
```

##### `reset_db_node_storage_size_in_g_bs` <a name="reset_db_node_storage_size_in_g_bs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbNodeStorageSizeInGBs"></a>

```python
def reset_db_node_storage_size_in_g_bs() -> None
```

##### `reset_db_server_id` <a name="reset_db_server_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbServerId"></a>

```python
def reset_db_server_id() -> None
```

##### `reset_db_system_id` <a name="reset_db_system_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbSystemId"></a>

```python
def reset_db_system_id() -> None
```

##### `reset_host_ip_id` <a name="reset_host_ip_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetHostIpId"></a>

```python
def reset_host_ip_id() -> None
```

##### `reset_hostname` <a name="reset_hostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_memory_size_in_g_bs` <a name="reset_memory_size_in_g_bs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetMemorySizeInGBs"></a>

```python
def reset_memory_size_in_g_bs() -> None
```

##### `reset_ocid` <a name="reset_ocid" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetOcid"></a>

```python
def reset_ocid() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vnic2_id` <a name="reset_vnic2_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetVnic2Id"></a>

```python
def reset_vnic2_id() -> None
```

##### `reset_vnic_id` <a name="reset_vnic_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetVnicId"></a>

```python
def reset_vnic_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList">OdbCloudVmClusterDbNodesTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupIpIdInput">backup_ip_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupVnic2IdInput">backup_vnic2_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.cpuCoreCountInput">cpu_core_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeArnInput">db_node_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeIdInput">db_node_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeStorageSizeInGBsInput">db_node_storage_size_in_g_bs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbServerIdInput">db_server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbSystemIdInput">db_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostIpIdInput">host_ip_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.memorySizeInGBsInput">memory_size_in_g_bs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.ocidInput">ocid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnic2IdInput">vnic2_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnicIdInput">vnic_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupIpId">backup_ip_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupVnic2Id">backup_vnic2_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeArn">db_node_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeId">db_node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeStorageSizeInGBs">db_node_storage_size_in_g_bs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbServerId">db_server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostIpId">host_ip_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.memorySizeInGBs">memory_size_in_g_bs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnic2Id">vnic2_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnicId">vnic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.tags"></a>

```python
tags: OdbCloudVmClusterDbNodesTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList">OdbCloudVmClusterDbNodesTagsList</a>

---

##### `backup_ip_id_input`<sup>Optional</sup> <a name="backup_ip_id_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupIpIdInput"></a>

```python
backup_ip_id_input: str
```

- *Type:* str

---

##### `backup_vnic2_id_input`<sup>Optional</sup> <a name="backup_vnic2_id_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupVnic2IdInput"></a>

```python
backup_vnic2_id_input: str
```

- *Type:* str

---

##### `cpu_core_count_input`<sup>Optional</sup> <a name="cpu_core_count_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.cpuCoreCountInput"></a>

```python
cpu_core_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_node_arn_input`<sup>Optional</sup> <a name="db_node_arn_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeArnInput"></a>

```python
db_node_arn_input: str
```

- *Type:* str

---

##### `db_node_id_input`<sup>Optional</sup> <a name="db_node_id_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeIdInput"></a>

```python
db_node_id_input: str
```

- *Type:* str

---

##### `db_node_storage_size_in_g_bs_input`<sup>Optional</sup> <a name="db_node_storage_size_in_g_bs_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeStorageSizeInGBsInput"></a>

```python
db_node_storage_size_in_g_bs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_server_id_input`<sup>Optional</sup> <a name="db_server_id_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbServerIdInput"></a>

```python
db_server_id_input: str
```

- *Type:* str

---

##### `db_system_id_input`<sup>Optional</sup> <a name="db_system_id_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbSystemIdInput"></a>

```python
db_system_id_input: str
```

- *Type:* str

---

##### `host_ip_id_input`<sup>Optional</sup> <a name="host_ip_id_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostIpIdInput"></a>

```python
host_ip_id_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `memory_size_in_g_bs_input`<sup>Optional</sup> <a name="memory_size_in_g_bs_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.memorySizeInGBsInput"></a>

```python
memory_size_in_g_bs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocid_input`<sup>Optional</sup> <a name="ocid_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.ocidInput"></a>

```python
ocid_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[OdbCloudVmClusterDbNodesTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>]

---

##### `vnic2_id_input`<sup>Optional</sup> <a name="vnic2_id_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnic2IdInput"></a>

```python
vnic2_id_input: str
```

- *Type:* str

---

##### `vnic_id_input`<sup>Optional</sup> <a name="vnic_id_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnicIdInput"></a>

```python
vnic_id_input: str
```

- *Type:* str

---

##### `backup_ip_id`<sup>Required</sup> <a name="backup_ip_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupIpId"></a>

```python
backup_ip_id: str
```

- *Type:* str

---

##### `backup_vnic2_id`<sup>Required</sup> <a name="backup_vnic2_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupVnic2Id"></a>

```python
backup_vnic2_id: str
```

- *Type:* str

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_node_arn`<sup>Required</sup> <a name="db_node_arn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeArn"></a>

```python
db_node_arn: str
```

- *Type:* str

---

##### `db_node_id`<sup>Required</sup> <a name="db_node_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeId"></a>

```python
db_node_id: str
```

- *Type:* str

---

##### `db_node_storage_size_in_g_bs`<sup>Required</sup> <a name="db_node_storage_size_in_g_bs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeStorageSizeInGBs"></a>

```python
db_node_storage_size_in_g_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_server_id`<sup>Required</sup> <a name="db_server_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbServerId"></a>

```python
db_server_id: str
```

- *Type:* str

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `host_ip_id`<sup>Required</sup> <a name="host_ip_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostIpId"></a>

```python
host_ip_id: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `memory_size_in_g_bs`<sup>Required</sup> <a name="memory_size_in_g_bs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.memorySizeInGBs"></a>

```python
memory_size_in_g_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `vnic2_id`<sup>Required</sup> <a name="vnic2_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnic2Id"></a>

```python
vnic2_id: str
```

- *Type:* str

---

##### `vnic_id`<sup>Required</sup> <a name="vnic_id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnicId"></a>

```python
vnic_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OdbCloudVmClusterDbNodes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>

---


### OdbCloudVmClusterDbNodesTagsList <a name="OdbCloudVmClusterDbNodesTagsList" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import odb_cloud_vm_cluster

odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbCloudVmClusterDbNodesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OdbCloudVmClusterDbNodesTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>]

---


### OdbCloudVmClusterDbNodesTagsOutputReference <a name="OdbCloudVmClusterDbNodesTagsOutputReference" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import odb_cloud_vm_cluster

odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OdbCloudVmClusterDbNodesTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>

---


### OdbCloudVmClusterIamRolesList <a name="OdbCloudVmClusterIamRolesList" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer"></a>

```python
from cdktn_provider_awscc import odb_cloud_vm_cluster

odbCloudVmCluster.OdbCloudVmClusterIamRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbCloudVmClusterIamRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OdbCloudVmClusterIamRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>]

---


### OdbCloudVmClusterIamRolesOutputReference <a name="OdbCloudVmClusterIamRolesOutputReference" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import odb_cloud_vm_cluster

odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resetAwsIntegration">reset_aws_integration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resetIamRoleArn">reset_iam_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_integration` <a name="reset_aws_integration" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resetAwsIntegration"></a>

```python
def reset_aws_integration() -> None
```

##### `reset_iam_role_arn` <a name="reset_iam_role_arn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resetIamRoleArn"></a>

```python
def reset_iam_role_arn() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.awsIntegrationInput">aws_integration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.iamRoleArnInput">iam_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.awsIntegration">aws_integration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_integration_input`<sup>Optional</sup> <a name="aws_integration_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.awsIntegrationInput"></a>

```python
aws_integration_input: str
```

- *Type:* str

---

##### `iam_role_arn_input`<sup>Optional</sup> <a name="iam_role_arn_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.iamRoleArnInput"></a>

```python
iam_role_arn_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `aws_integration`<sup>Required</sup> <a name="aws_integration" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.awsIntegration"></a>

```python
aws_integration: str
```

- *Type:* str

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OdbCloudVmClusterIamRoles
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>

---


### OdbCloudVmClusterTagsList <a name="OdbCloudVmClusterTagsList" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import odb_cloud_vm_cluster

odbCloudVmCluster.OdbCloudVmClusterTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbCloudVmClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OdbCloudVmClusterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>]

---


### OdbCloudVmClusterTagsOutputReference <a name="OdbCloudVmClusterTagsOutputReference" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import odb_cloud_vm_cluster

odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OdbCloudVmClusterTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>

---



