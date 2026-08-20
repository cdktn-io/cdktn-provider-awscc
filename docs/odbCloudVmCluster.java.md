# `odbCloudVmCluster` Submodule <a name="`odbCloudVmCluster` Submodule" id="@cdktn/provider-awscc.odbCloudVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbCloudVmCluster <a name="OdbCloudVmCluster" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster awscc_odb_cloud_vm_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_vm_cluster.OdbCloudVmCluster;

OdbCloudVmCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .cloudExadataInfrastructureId(java.lang.String)
//  .clusterName(java.lang.String)
//  .cpuCoreCount(java.lang.Number)
//  .dataCollectionOptions(OdbCloudVmClusterDataCollectionOptions)
//  .dataStorageSizeInTBs(java.lang.Number)
//  .dbNodes(IResolvable|java.util.List<OdbCloudVmClusterDbNodes>)
//  .dbNodeStorageSizeInGBs(java.lang.Number)
//  .dbServers(java.util.List<java.lang.String>)
//  .displayName(java.lang.String)
//  .giVersion(java.lang.String)
//  .hostname(java.lang.String)
//  .iamRoles(IResolvable|java.util.List<OdbCloudVmClusterIamRoles>)
//  .isLocalBackupEnabled(java.lang.Boolean|IResolvable)
//  .isSparseDiskgroupEnabled(java.lang.Boolean|IResolvable)
//  .licenseModel(java.lang.String)
//  .memorySizeInGBs(java.lang.Number)
//  .odbNetworkId(java.lang.String)
//  .scanListenerPortTcp(java.lang.Number)
//  .sshPublicKeys(java.util.List<java.lang.String>)
//  .systemVersion(java.lang.String)
//  .tags(IResolvable|java.util.List<OdbCloudVmClusterTags>)
//  .timeZone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>java.lang.String</code> | The unique identifier of the Exadata infrastructure that this VM cluster belongs to. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | The name of the Grid Infrastructure (GI) cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | The number of CPU cores enabled on the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a></code> | The set of diagnostic collection options enabled for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.dataStorageSizeInTBs">dataStorageSizeInTBs</a></code> | <code>java.lang.Number</code> | The size of the data disk group, in terabytes (TB), that's allocated for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.dbNodes">dbNodes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>></code> | The DB nodes that are implicitly created and managed as part of this VM Cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.dbNodeStorageSizeInGBs">dbNodeStorageSizeInGBs</a></code> | <code>java.lang.Number</code> | The amount of local node storage, in gigabytes (GB), that's allocated for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.dbServers">dbServers</a></code> | <code>java.util.List<java.lang.String></code> | The list of database servers for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The user-friendly name for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.giVersion">giVersion</a></code> | <code>java.lang.String</code> | The software version of the Oracle Grid Infrastructure (GI) for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.hostname">hostname</a></code> | <code>java.lang.String</code> | The host name for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.iamRoles">iamRoles</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>></code> | The AWS Identity and Access Management (IAM) service roles associated with the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.isLocalBackupEnabled">isLocalBackupEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether database backups to local Exadata storage is enabled for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.isSparseDiskgroupEnabled">isSparseDiskgroupEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the VM cluster is configured with a sparse disk group. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | The Oracle license model applied to the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.memorySizeInGBs">memorySizeInGBs</a></code> | <code>java.lang.Number</code> | The amount of memory, in gigabytes (GB), that's allocated for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.odbNetworkId">odbNetworkId</a></code> | <code>java.lang.String</code> | The unique identifier of the ODB network for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>java.lang.Number</code> | Property description not available. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | The public key portion of one or more key pairs used for SSH access to the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.systemVersion">systemVersion</a></code> | <code>java.lang.String</code> | The operating system version of the image chosen for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>></code> | Tags to assign to the Vm Cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.timeZone">timeZone</a></code> | <code>java.lang.String</code> | The time zone of the VM cluster. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudExadataInfrastructureId`<sup>Optional</sup> <a name="cloudExadataInfrastructureId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.cloudExadataInfrastructureId"></a>

- *Type:* java.lang.String

The unique identifier of the Exadata infrastructure that this VM cluster belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#cloud_exadata_infrastructure_id OdbCloudVmCluster#cloud_exadata_infrastructure_id}

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

The name of the Grid Infrastructure (GI) cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#cluster_name OdbCloudVmCluster#cluster_name}

---

##### `cpuCoreCount`<sup>Optional</sup> <a name="cpuCoreCount" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.cpuCoreCount"></a>

- *Type:* java.lang.Number

The number of CPU cores enabled on the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#cpu_core_count OdbCloudVmCluster#cpu_core_count}

---

##### `dataCollectionOptions`<sup>Optional</sup> <a name="dataCollectionOptions" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.dataCollectionOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a>

The set of diagnostic collection options enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#data_collection_options OdbCloudVmCluster#data_collection_options}

---

##### `dataStorageSizeInTBs`<sup>Optional</sup> <a name="dataStorageSizeInTBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.dataStorageSizeInTBs"></a>

- *Type:* java.lang.Number

The size of the data disk group, in terabytes (TB), that's allocated for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#data_storage_size_in_t_bs OdbCloudVmCluster#data_storage_size_in_t_bs}

---

##### `dbNodes`<sup>Optional</sup> <a name="dbNodes" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.dbNodes"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>>

The DB nodes that are implicitly created and managed as part of this VM Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#db_nodes OdbCloudVmCluster#db_nodes}

---

##### `dbNodeStorageSizeInGBs`<sup>Optional</sup> <a name="dbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.dbNodeStorageSizeInGBs"></a>

- *Type:* java.lang.Number

The amount of local node storage, in gigabytes (GB), that's allocated for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#db_node_storage_size_in_g_bs OdbCloudVmCluster#db_node_storage_size_in_g_bs}

---

##### `dbServers`<sup>Optional</sup> <a name="dbServers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.dbServers"></a>

- *Type:* java.util.List<java.lang.String>

The list of database servers for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#db_servers OdbCloudVmCluster#db_servers}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The user-friendly name for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#display_name OdbCloudVmCluster#display_name}

---

##### `giVersion`<sup>Optional</sup> <a name="giVersion" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.giVersion"></a>

- *Type:* java.lang.String

The software version of the Oracle Grid Infrastructure (GI) for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#gi_version OdbCloudVmCluster#gi_version}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.hostname"></a>

- *Type:* java.lang.String

The host name for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#hostname OdbCloudVmCluster#hostname}

---

##### `iamRoles`<sup>Optional</sup> <a name="iamRoles" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.iamRoles"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>>

The AWS Identity and Access Management (IAM) service roles associated with the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#iam_roles OdbCloudVmCluster#iam_roles}

---

##### `isLocalBackupEnabled`<sup>Optional</sup> <a name="isLocalBackupEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.isLocalBackupEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether database backups to local Exadata storage is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#is_local_backup_enabled OdbCloudVmCluster#is_local_backup_enabled}

---

##### `isSparseDiskgroupEnabled`<sup>Optional</sup> <a name="isSparseDiskgroupEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.isSparseDiskgroupEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the VM cluster is configured with a sparse disk group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#is_sparse_diskgroup_enabled OdbCloudVmCluster#is_sparse_diskgroup_enabled}

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.licenseModel"></a>

- *Type:* java.lang.String

The Oracle license model applied to the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#license_model OdbCloudVmCluster#license_model}

---

##### `memorySizeInGBs`<sup>Optional</sup> <a name="memorySizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.memorySizeInGBs"></a>

- *Type:* java.lang.Number

The amount of memory, in gigabytes (GB), that's allocated for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#memory_size_in_g_bs OdbCloudVmCluster#memory_size_in_g_bs}

---

##### `odbNetworkId`<sup>Optional</sup> <a name="odbNetworkId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.odbNetworkId"></a>

- *Type:* java.lang.String

The unique identifier of the ODB network for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#odb_network_id OdbCloudVmCluster#odb_network_id}

---

##### `scanListenerPortTcp`<sup>Optional</sup> <a name="scanListenerPortTcp" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.scanListenerPortTcp"></a>

- *Type:* java.lang.Number

Property description not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#scan_listener_port_tcp OdbCloudVmCluster#scan_listener_port_tcp}

---

##### `sshPublicKeys`<sup>Optional</sup> <a name="sshPublicKeys" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.sshPublicKeys"></a>

- *Type:* java.util.List<java.lang.String>

The public key portion of one or more key pairs used for SSH access to the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#ssh_public_keys OdbCloudVmCluster#ssh_public_keys}

---

##### `systemVersion`<sup>Optional</sup> <a name="systemVersion" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.systemVersion"></a>

- *Type:* java.lang.String

The operating system version of the image chosen for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#system_version OdbCloudVmCluster#system_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>>

Tags to assign to the Vm Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#tags OdbCloudVmCluster#tags}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.timeZone"></a>

- *Type:* java.lang.String

The time zone of the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#time_zone OdbCloudVmCluster#time_zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDataCollectionOptions">putDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDbNodes">putDbNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putIamRoles">putIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetCloudExadataInfrastructureId">resetCloudExadataInfrastructureId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetClusterName">resetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetCpuCoreCount">resetCpuCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDataCollectionOptions">resetDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDataStorageSizeInTBs">resetDataStorageSizeInTBs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDbNodes">resetDbNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDbNodeStorageSizeInGBs">resetDbNodeStorageSizeInGBs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDbServers">resetDbServers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetGiVersion">resetGiVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetIamRoles">resetIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetIsLocalBackupEnabled">resetIsLocalBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetIsSparseDiskgroupEnabled">resetIsSparseDiskgroupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetMemorySizeInGBs">resetMemorySizeInGBs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetOdbNetworkId">resetOdbNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetScanListenerPortTcp">resetScanListenerPortTcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetSshPublicKeys">resetSshPublicKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetSystemVersion">resetSystemVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataCollectionOptions` <a name="putDataCollectionOptions" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDataCollectionOptions"></a>

```java
public void putDataCollectionOptions(OdbCloudVmClusterDataCollectionOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a>

---

##### `putDbNodes` <a name="putDbNodes" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDbNodes"></a>

```java
public void putDbNodes(IResolvable|java.util.List<OdbCloudVmClusterDbNodes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDbNodes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>>

---

##### `putIamRoles` <a name="putIamRoles" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putIamRoles"></a>

```java
public void putIamRoles(IResolvable|java.util.List<OdbCloudVmClusterIamRoles> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putIamRoles.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<OdbCloudVmClusterTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>>

---

##### `resetCloudExadataInfrastructureId` <a name="resetCloudExadataInfrastructureId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetCloudExadataInfrastructureId"></a>

```java
public void resetCloudExadataInfrastructureId()
```

##### `resetClusterName` <a name="resetClusterName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetClusterName"></a>

```java
public void resetClusterName()
```

##### `resetCpuCoreCount` <a name="resetCpuCoreCount" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetCpuCoreCount"></a>

```java
public void resetCpuCoreCount()
```

##### `resetDataCollectionOptions` <a name="resetDataCollectionOptions" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDataCollectionOptions"></a>

```java
public void resetDataCollectionOptions()
```

##### `resetDataStorageSizeInTBs` <a name="resetDataStorageSizeInTBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDataStorageSizeInTBs"></a>

```java
public void resetDataStorageSizeInTBs()
```

##### `resetDbNodes` <a name="resetDbNodes" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDbNodes"></a>

```java
public void resetDbNodes()
```

##### `resetDbNodeStorageSizeInGBs` <a name="resetDbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDbNodeStorageSizeInGBs"></a>

```java
public void resetDbNodeStorageSizeInGBs()
```

##### `resetDbServers` <a name="resetDbServers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDbServers"></a>

```java
public void resetDbServers()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetGiVersion` <a name="resetGiVersion" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetGiVersion"></a>

```java
public void resetGiVersion()
```

##### `resetHostname` <a name="resetHostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetIamRoles` <a name="resetIamRoles" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetIamRoles"></a>

```java
public void resetIamRoles()
```

##### `resetIsLocalBackupEnabled` <a name="resetIsLocalBackupEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetIsLocalBackupEnabled"></a>

```java
public void resetIsLocalBackupEnabled()
```

##### `resetIsSparseDiskgroupEnabled` <a name="resetIsSparseDiskgroupEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetIsSparseDiskgroupEnabled"></a>

```java
public void resetIsSparseDiskgroupEnabled()
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetLicenseModel"></a>

```java
public void resetLicenseModel()
```

##### `resetMemorySizeInGBs` <a name="resetMemorySizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetMemorySizeInGBs"></a>

```java
public void resetMemorySizeInGBs()
```

##### `resetOdbNetworkId` <a name="resetOdbNetworkId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetOdbNetworkId"></a>

```java
public void resetOdbNetworkId()
```

##### `resetScanListenerPortTcp` <a name="resetScanListenerPortTcp" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetScanListenerPortTcp"></a>

```java
public void resetScanListenerPortTcp()
```

##### `resetSshPublicKeys` <a name="resetSshPublicKeys" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetSshPublicKeys"></a>

```java
public void resetSshPublicKeys()
```

##### `resetSystemVersion` <a name="resetSystemVersion" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetSystemVersion"></a>

```java
public void resetSystemVersion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetTimeZone"></a>

```java
public void resetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OdbCloudVmCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isConstruct"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_vm_cluster.OdbCloudVmCluster;

OdbCloudVmCluster.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_vm_cluster.OdbCloudVmCluster;

OdbCloudVmCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_vm_cluster.OdbCloudVmCluster;

OdbCloudVmCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_vm_cluster.OdbCloudVmCluster;

OdbCloudVmCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OdbCloudVmCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OdbCloudVmCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OdbCloudVmCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OdbCloudVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OdbCloudVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudVmClusterArn">cloudVmClusterArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudVmClusterId">cloudVmClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.computeModel">computeModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference">OdbCloudVmClusterDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodes">dbNodes</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList">OdbCloudVmClusterDbNodesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.diskRedundancy">diskRedundancy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.iamRoles">iamRoles</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList">OdbCloudVmClusterIamRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.listenerPort">listenerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.ociResourceAnchorName">ociResourceAnchorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.ociUrl">ociUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanDnsName">scanDnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanIpIds">scanIpIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.storageSizeInGBs">storageSizeInGBs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList">OdbCloudVmClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.vipIds">vipIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudExadataInfrastructureIdInput">cloudExadataInfrastructureIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cpuCoreCountInput">cpuCoreCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataCollectionOptionsInput">dataCollectionOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataStorageSizeInTBsInput">dataStorageSizeInTBsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodesInput">dbNodesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodeStorageSizeInGBsInput">dbNodeStorageSizeInGBsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbServersInput">dbServersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.giVersionInput">giVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.iamRolesInput">iamRolesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isLocalBackupEnabledInput">isLocalBackupEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isSparseDiskgroupEnabledInput">isSparseDiskgroupEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.licenseModelInput">licenseModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.memorySizeInGBsInput">memorySizeInGBsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.odbNetworkIdInput">odbNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanListenerPortTcpInput">scanListenerPortTcpInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.sshPublicKeysInput">sshPublicKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.systemVersionInput">systemVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataStorageSizeInTBs">dataStorageSizeInTBs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodeStorageSizeInGBs">dbNodeStorageSizeInGBs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbServers">dbServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.giVersion">giVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isLocalBackupEnabled">isLocalBackupEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isSparseDiskgroupEnabled">isSparseDiskgroupEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.memorySizeInGBs">memorySizeInGBs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.odbNetworkId">odbNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.systemVersion">systemVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudVmClusterArn`<sup>Required</sup> <a name="cloudVmClusterArn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudVmClusterArn"></a>

```java
public java.lang.String getCloudVmClusterArn();
```

- *Type:* java.lang.String

---

##### `cloudVmClusterId`<sup>Required</sup> <a name="cloudVmClusterId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudVmClusterId"></a>

```java
public java.lang.String getCloudVmClusterId();
```

- *Type:* java.lang.String

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.computeModel"></a>

```java
public java.lang.String getComputeModel();
```

- *Type:* java.lang.String

---

##### `dataCollectionOptions`<sup>Required</sup> <a name="dataCollectionOptions" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataCollectionOptions"></a>

```java
public OdbCloudVmClusterDataCollectionOptionsOutputReference getDataCollectionOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference">OdbCloudVmClusterDataCollectionOptionsOutputReference</a>

---

##### `dbNodes`<sup>Required</sup> <a name="dbNodes" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodes"></a>

```java
public OdbCloudVmClusterDbNodesList getDbNodes();
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList">OdbCloudVmClusterDbNodesList</a>

---

##### `diskRedundancy`<sup>Required</sup> <a name="diskRedundancy" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.diskRedundancy"></a>

```java
public java.lang.String getDiskRedundancy();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `iamRoles`<sup>Required</sup> <a name="iamRoles" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.iamRoles"></a>

```java
public OdbCloudVmClusterIamRolesList getIamRoles();
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList">OdbCloudVmClusterIamRolesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `listenerPort`<sup>Required</sup> <a name="listenerPort" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.listenerPort"></a>

```java
public java.lang.Number getListenerPort();
```

- *Type:* java.lang.Number

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ociResourceAnchorName`<sup>Required</sup> <a name="ociResourceAnchorName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.ociResourceAnchorName"></a>

```java
public java.lang.String getOciResourceAnchorName();
```

- *Type:* java.lang.String

---

##### `ociUrl`<sup>Required</sup> <a name="ociUrl" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.ociUrl"></a>

```java
public java.lang.String getOciUrl();
```

- *Type:* java.lang.String

---

##### `scanDnsName`<sup>Required</sup> <a name="scanDnsName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanDnsName"></a>

```java
public java.lang.String getScanDnsName();
```

- *Type:* java.lang.String

---

##### `scanIpIds`<sup>Required</sup> <a name="scanIpIds" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanIpIds"></a>

```java
public java.util.List<java.lang.String> getScanIpIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `storageSizeInGBs`<sup>Required</sup> <a name="storageSizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.storageSizeInGBs"></a>

```java
public java.lang.Number getStorageSizeInGBs();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.tags"></a>

```java
public OdbCloudVmClusterTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList">OdbCloudVmClusterTagsList</a>

---

##### `vipIds`<sup>Required</sup> <a name="vipIds" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.vipIds"></a>

```java
public java.util.List<java.lang.String> getVipIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cloudExadataInfrastructureIdInput`<sup>Optional</sup> <a name="cloudExadataInfrastructureIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudExadataInfrastructureIdInput"></a>

```java
public java.lang.String getCloudExadataInfrastructureIdInput();
```

- *Type:* java.lang.String

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `cpuCoreCountInput`<sup>Optional</sup> <a name="cpuCoreCountInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cpuCoreCountInput"></a>

```java
public java.lang.Number getCpuCoreCountInput();
```

- *Type:* java.lang.Number

---

##### `dataCollectionOptionsInput`<sup>Optional</sup> <a name="dataCollectionOptionsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataCollectionOptionsInput"></a>

```java
public IResolvable|OdbCloudVmClusterDataCollectionOptions getDataCollectionOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a>

---

##### `dataStorageSizeInTBsInput`<sup>Optional</sup> <a name="dataStorageSizeInTBsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataStorageSizeInTBsInput"></a>

```java
public java.lang.Number getDataStorageSizeInTBsInput();
```

- *Type:* java.lang.Number

---

##### `dbNodesInput`<sup>Optional</sup> <a name="dbNodesInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodesInput"></a>

```java
public IResolvable|java.util.List<OdbCloudVmClusterDbNodes> getDbNodesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>>

---

##### `dbNodeStorageSizeInGBsInput`<sup>Optional</sup> <a name="dbNodeStorageSizeInGBsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodeStorageSizeInGBsInput"></a>

```java
public java.lang.Number getDbNodeStorageSizeInGBsInput();
```

- *Type:* java.lang.Number

---

##### `dbServersInput`<sup>Optional</sup> <a name="dbServersInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbServersInput"></a>

```java
public java.util.List<java.lang.String> getDbServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `giVersionInput`<sup>Optional</sup> <a name="giVersionInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.giVersionInput"></a>

```java
public java.lang.String getGiVersionInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `iamRolesInput`<sup>Optional</sup> <a name="iamRolesInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.iamRolesInput"></a>

```java
public IResolvable|java.util.List<OdbCloudVmClusterIamRoles> getIamRolesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>>

---

##### `isLocalBackupEnabledInput`<sup>Optional</sup> <a name="isLocalBackupEnabledInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isLocalBackupEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsLocalBackupEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isSparseDiskgroupEnabledInput`<sup>Optional</sup> <a name="isSparseDiskgroupEnabledInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isSparseDiskgroupEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsSparseDiskgroupEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.licenseModelInput"></a>

```java
public java.lang.String getLicenseModelInput();
```

- *Type:* java.lang.String

---

##### `memorySizeInGBsInput`<sup>Optional</sup> <a name="memorySizeInGBsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.memorySizeInGBsInput"></a>

```java
public java.lang.Number getMemorySizeInGBsInput();
```

- *Type:* java.lang.Number

---

##### `odbNetworkIdInput`<sup>Optional</sup> <a name="odbNetworkIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.odbNetworkIdInput"></a>

```java
public java.lang.String getOdbNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `scanListenerPortTcpInput`<sup>Optional</sup> <a name="scanListenerPortTcpInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanListenerPortTcpInput"></a>

```java
public java.lang.Number getScanListenerPortTcpInput();
```

- *Type:* java.lang.Number

---

##### `sshPublicKeysInput`<sup>Optional</sup> <a name="sshPublicKeysInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.sshPublicKeysInput"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `systemVersionInput`<sup>Optional</sup> <a name="systemVersionInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.systemVersionInput"></a>

```java
public java.lang.String getSystemVersionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.tagsInput"></a>

```java
public IResolvable|java.util.List<OdbCloudVmClusterTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudExadataInfrastructureId"></a>

```java
public java.lang.String getCloudExadataInfrastructureId();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeInTBs`<sup>Required</sup> <a name="dataStorageSizeInTBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataStorageSizeInTBs"></a>

```java
public java.lang.Number getDataStorageSizeInTBs();
```

- *Type:* java.lang.Number

---

##### `dbNodeStorageSizeInGBs`<sup>Required</sup> <a name="dbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodeStorageSizeInGBs"></a>

```java
public java.lang.Number getDbNodeStorageSizeInGBs();
```

- *Type:* java.lang.Number

---

##### `dbServers`<sup>Required</sup> <a name="dbServers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbServers"></a>

```java
public java.util.List<java.lang.String> getDbServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `giVersion`<sup>Required</sup> <a name="giVersion" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.giVersion"></a>

```java
public java.lang.String getGiVersion();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `isLocalBackupEnabled`<sup>Required</sup> <a name="isLocalBackupEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isLocalBackupEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsLocalBackupEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isSparseDiskgroupEnabled`<sup>Required</sup> <a name="isSparseDiskgroupEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isSparseDiskgroupEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsSparseDiskgroupEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `memorySizeInGBs`<sup>Required</sup> <a name="memorySizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.memorySizeInGBs"></a>

```java
public java.lang.Number getMemorySizeInGBs();
```

- *Type:* java.lang.Number

---

##### `odbNetworkId`<sup>Required</sup> <a name="odbNetworkId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.odbNetworkId"></a>

```java
public java.lang.String getOdbNetworkId();
```

- *Type:* java.lang.String

---

##### `scanListenerPortTcp`<sup>Required</sup> <a name="scanListenerPortTcp" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanListenerPortTcp"></a>

```java
public java.lang.Number getScanListenerPortTcp();
```

- *Type:* java.lang.Number

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.sshPublicKeys"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `systemVersion`<sup>Required</sup> <a name="systemVersion" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.systemVersion"></a>

```java
public java.lang.String getSystemVersion();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OdbCloudVmClusterConfig <a name="OdbCloudVmClusterConfig" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_vm_cluster.OdbCloudVmClusterConfig;

OdbCloudVmClusterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .cloudExadataInfrastructureId(java.lang.String)
//  .clusterName(java.lang.String)
//  .cpuCoreCount(java.lang.Number)
//  .dataCollectionOptions(OdbCloudVmClusterDataCollectionOptions)
//  .dataStorageSizeInTBs(java.lang.Number)
//  .dbNodes(IResolvable|java.util.List<OdbCloudVmClusterDbNodes>)
//  .dbNodeStorageSizeInGBs(java.lang.Number)
//  .dbServers(java.util.List<java.lang.String>)
//  .displayName(java.lang.String)
//  .giVersion(java.lang.String)
//  .hostname(java.lang.String)
//  .iamRoles(IResolvable|java.util.List<OdbCloudVmClusterIamRoles>)
//  .isLocalBackupEnabled(java.lang.Boolean|IResolvable)
//  .isSparseDiskgroupEnabled(java.lang.Boolean|IResolvable)
//  .licenseModel(java.lang.String)
//  .memorySizeInGBs(java.lang.Number)
//  .odbNetworkId(java.lang.String)
//  .scanListenerPortTcp(java.lang.Number)
//  .sshPublicKeys(java.util.List<java.lang.String>)
//  .systemVersion(java.lang.String)
//  .tags(IResolvable|java.util.List<OdbCloudVmClusterTags>)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>java.lang.String</code> | The unique identifier of the Exadata infrastructure that this VM cluster belongs to. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | The name of the Grid Infrastructure (GI) cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | The number of CPU cores enabled on the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a></code> | The set of diagnostic collection options enabled for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dataStorageSizeInTBs">dataStorageSizeInTBs</a></code> | <code>java.lang.Number</code> | The size of the data disk group, in terabytes (TB), that's allocated for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dbNodes">dbNodes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>></code> | The DB nodes that are implicitly created and managed as part of this VM Cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dbNodeStorageSizeInGBs">dbNodeStorageSizeInGBs</a></code> | <code>java.lang.Number</code> | The amount of local node storage, in gigabytes (GB), that's allocated for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dbServers">dbServers</a></code> | <code>java.util.List<java.lang.String></code> | The list of database servers for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The user-friendly name for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.giVersion">giVersion</a></code> | <code>java.lang.String</code> | The software version of the Oracle Grid Infrastructure (GI) for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.hostname">hostname</a></code> | <code>java.lang.String</code> | The host name for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.iamRoles">iamRoles</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>></code> | The AWS Identity and Access Management (IAM) service roles associated with the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.isLocalBackupEnabled">isLocalBackupEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether database backups to local Exadata storage is enabled for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.isSparseDiskgroupEnabled">isSparseDiskgroupEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the VM cluster is configured with a sparse disk group. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | The Oracle license model applied to the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.memorySizeInGBs">memorySizeInGBs</a></code> | <code>java.lang.Number</code> | The amount of memory, in gigabytes (GB), that's allocated for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.odbNetworkId">odbNetworkId</a></code> | <code>java.lang.String</code> | The unique identifier of the ODB network for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>java.lang.Number</code> | Property description not available. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | The public key portion of one or more key pairs used for SSH access to the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.systemVersion">systemVersion</a></code> | <code>java.lang.String</code> | The operating system version of the image chosen for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>></code> | Tags to assign to the Vm Cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | The time zone of the VM cluster. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudExadataInfrastructureId`<sup>Optional</sup> <a name="cloudExadataInfrastructureId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.cloudExadataInfrastructureId"></a>

```java
public java.lang.String getCloudExadataInfrastructureId();
```

- *Type:* java.lang.String

The unique identifier of the Exadata infrastructure that this VM cluster belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#cloud_exadata_infrastructure_id OdbCloudVmCluster#cloud_exadata_infrastructure_id}

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

The name of the Grid Infrastructure (GI) cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#cluster_name OdbCloudVmCluster#cluster_name}

---

##### `cpuCoreCount`<sup>Optional</sup> <a name="cpuCoreCount" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

The number of CPU cores enabled on the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#cpu_core_count OdbCloudVmCluster#cpu_core_count}

---

##### `dataCollectionOptions`<sup>Optional</sup> <a name="dataCollectionOptions" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dataCollectionOptions"></a>

```java
public OdbCloudVmClusterDataCollectionOptions getDataCollectionOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a>

The set of diagnostic collection options enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#data_collection_options OdbCloudVmCluster#data_collection_options}

---

##### `dataStorageSizeInTBs`<sup>Optional</sup> <a name="dataStorageSizeInTBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dataStorageSizeInTBs"></a>

```java
public java.lang.Number getDataStorageSizeInTBs();
```

- *Type:* java.lang.Number

The size of the data disk group, in terabytes (TB), that's allocated for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#data_storage_size_in_t_bs OdbCloudVmCluster#data_storage_size_in_t_bs}

---

##### `dbNodes`<sup>Optional</sup> <a name="dbNodes" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dbNodes"></a>

```java
public IResolvable|java.util.List<OdbCloudVmClusterDbNodes> getDbNodes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>>

The DB nodes that are implicitly created and managed as part of this VM Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#db_nodes OdbCloudVmCluster#db_nodes}

---

##### `dbNodeStorageSizeInGBs`<sup>Optional</sup> <a name="dbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dbNodeStorageSizeInGBs"></a>

```java
public java.lang.Number getDbNodeStorageSizeInGBs();
```

- *Type:* java.lang.Number

The amount of local node storage, in gigabytes (GB), that's allocated for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#db_node_storage_size_in_g_bs OdbCloudVmCluster#db_node_storage_size_in_g_bs}

---

##### `dbServers`<sup>Optional</sup> <a name="dbServers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dbServers"></a>

```java
public java.util.List<java.lang.String> getDbServers();
```

- *Type:* java.util.List<java.lang.String>

The list of database servers for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#db_servers OdbCloudVmCluster#db_servers}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The user-friendly name for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#display_name OdbCloudVmCluster#display_name}

---

##### `giVersion`<sup>Optional</sup> <a name="giVersion" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.giVersion"></a>

```java
public java.lang.String getGiVersion();
```

- *Type:* java.lang.String

The software version of the Oracle Grid Infrastructure (GI) for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#gi_version OdbCloudVmCluster#gi_version}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

The host name for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#hostname OdbCloudVmCluster#hostname}

---

##### `iamRoles`<sup>Optional</sup> <a name="iamRoles" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.iamRoles"></a>

```java
public IResolvable|java.util.List<OdbCloudVmClusterIamRoles> getIamRoles();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>>

The AWS Identity and Access Management (IAM) service roles associated with the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#iam_roles OdbCloudVmCluster#iam_roles}

---

##### `isLocalBackupEnabled`<sup>Optional</sup> <a name="isLocalBackupEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.isLocalBackupEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsLocalBackupEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether database backups to local Exadata storage is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#is_local_backup_enabled OdbCloudVmCluster#is_local_backup_enabled}

---

##### `isSparseDiskgroupEnabled`<sup>Optional</sup> <a name="isSparseDiskgroupEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.isSparseDiskgroupEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsSparseDiskgroupEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the VM cluster is configured with a sparse disk group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#is_sparse_diskgroup_enabled OdbCloudVmCluster#is_sparse_diskgroup_enabled}

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

The Oracle license model applied to the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#license_model OdbCloudVmCluster#license_model}

---

##### `memorySizeInGBs`<sup>Optional</sup> <a name="memorySizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.memorySizeInGBs"></a>

```java
public java.lang.Number getMemorySizeInGBs();
```

- *Type:* java.lang.Number

The amount of memory, in gigabytes (GB), that's allocated for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#memory_size_in_g_bs OdbCloudVmCluster#memory_size_in_g_bs}

---

##### `odbNetworkId`<sup>Optional</sup> <a name="odbNetworkId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.odbNetworkId"></a>

```java
public java.lang.String getOdbNetworkId();
```

- *Type:* java.lang.String

The unique identifier of the ODB network for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#odb_network_id OdbCloudVmCluster#odb_network_id}

---

##### `scanListenerPortTcp`<sup>Optional</sup> <a name="scanListenerPortTcp" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.scanListenerPortTcp"></a>

```java
public java.lang.Number getScanListenerPortTcp();
```

- *Type:* java.lang.Number

Property description not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#scan_listener_port_tcp OdbCloudVmCluster#scan_listener_port_tcp}

---

##### `sshPublicKeys`<sup>Optional</sup> <a name="sshPublicKeys" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.sshPublicKeys"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeys();
```

- *Type:* java.util.List<java.lang.String>

The public key portion of one or more key pairs used for SSH access to the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#ssh_public_keys OdbCloudVmCluster#ssh_public_keys}

---

##### `systemVersion`<sup>Optional</sup> <a name="systemVersion" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.systemVersion"></a>

```java
public java.lang.String getSystemVersion();
```

- *Type:* java.lang.String

The operating system version of the image chosen for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#system_version OdbCloudVmCluster#system_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.tags"></a>

```java
public IResolvable|java.util.List<OdbCloudVmClusterTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>>

Tags to assign to the Vm Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#tags OdbCloudVmCluster#tags}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

The time zone of the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#time_zone OdbCloudVmCluster#time_zone}

---

### OdbCloudVmClusterDataCollectionOptions <a name="OdbCloudVmClusterDataCollectionOptions" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_vm_cluster.OdbCloudVmClusterDataCollectionOptions;

OdbCloudVmClusterDataCollectionOptions.builder()
//  .isDiagnosticsEventsEnabled(java.lang.Boolean|IResolvable)
//  .isHealthMonitoringEnabled(java.lang.Boolean|IResolvable)
//  .isIncidentLogsEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether diagnostic collection is enabled for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.property.isHealthMonitoringEnabled">isHealthMonitoringEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether health monitoring is enabled for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether incident logs are enabled for the cloud VM cluster. |

---

##### `isDiagnosticsEventsEnabled`<sup>Optional</sup> <a name="isDiagnosticsEventsEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsDiagnosticsEventsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether diagnostic collection is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#is_diagnostics_events_enabled OdbCloudVmCluster#is_diagnostics_events_enabled}

---

##### `isHealthMonitoringEnabled`<sup>Optional</sup> <a name="isHealthMonitoringEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.property.isHealthMonitoringEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsHealthMonitoringEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether health monitoring is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#is_health_monitoring_enabled OdbCloudVmCluster#is_health_monitoring_enabled}

---

##### `isIncidentLogsEnabled`<sup>Optional</sup> <a name="isIncidentLogsEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsIncidentLogsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether incident logs are enabled for the cloud VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#is_incident_logs_enabled OdbCloudVmCluster#is_incident_logs_enabled}

---

### OdbCloudVmClusterDbNodes <a name="OdbCloudVmClusterDbNodes" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_vm_cluster.OdbCloudVmClusterDbNodes;

OdbCloudVmClusterDbNodes.builder()
//  .backupIpId(java.lang.String)
//  .backupVnic2Id(java.lang.String)
//  .cpuCoreCount(java.lang.Number)
//  .dbNodeArn(java.lang.String)
//  .dbNodeId(java.lang.String)
//  .dbNodeStorageSizeInGBs(java.lang.Number)
//  .dbServerId(java.lang.String)
//  .dbSystemId(java.lang.String)
//  .hostIpId(java.lang.String)
//  .hostname(java.lang.String)
//  .memorySizeInGBs(java.lang.Number)
//  .ocid(java.lang.String)
//  .status(java.lang.String)
//  .tags(IResolvable|java.util.List<OdbCloudVmClusterDbNodesTags>)
//  .vnic2Id(java.lang.String)
//  .vnicId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.backupIpId">backupIpId</a></code> | <code>java.lang.String</code> | The Oracle Cloud ID (OCID) of the backup IP address that's associated with the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.backupVnic2Id">backupVnic2Id</a></code> | <code>java.lang.String</code> | The OCID of the second backup virtual network interface card (VNIC) for the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | The number of CPU cores enabled on the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbNodeArn">dbNodeArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbNodeId">dbNodeId</a></code> | <code>java.lang.String</code> | The unique identifier of the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbNodeStorageSizeInGBs">dbNodeStorageSizeInGBs</a></code> | <code>java.lang.Number</code> | The amount of local node storage, in gigabytes (GB), that's allocated on the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbServerId">dbServerId</a></code> | <code>java.lang.String</code> | The unique identifier of the database server that's associated with the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | The OCID of the DB system. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.hostIpId">hostIpId</a></code> | <code>java.lang.String</code> | The OCID of the host IP address that's associated with the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.hostname">hostname</a></code> | <code>java.lang.String</code> | The host name for the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.memorySizeInGBs">memorySizeInGBs</a></code> | <code>java.lang.Number</code> | The amount of memory, in gigabytes (GB), that allocated on the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.ocid">ocid</a></code> | <code>java.lang.String</code> | The OCID of the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.status">status</a></code> | <code>java.lang.String</code> | The current status of the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#tags OdbCloudVmCluster#tags}. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.vnic2Id">vnic2Id</a></code> | <code>java.lang.String</code> | The OCID of the second VNIC. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.vnicId">vnicId</a></code> | <code>java.lang.String</code> | The OCID of the VNIC. |

---

##### `backupIpId`<sup>Optional</sup> <a name="backupIpId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.backupIpId"></a>

```java
public java.lang.String getBackupIpId();
```

- *Type:* java.lang.String

The Oracle Cloud ID (OCID) of the backup IP address that's associated with the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#backup_ip_id OdbCloudVmCluster#backup_ip_id}

---

##### `backupVnic2Id`<sup>Optional</sup> <a name="backupVnic2Id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.backupVnic2Id"></a>

```java
public java.lang.String getBackupVnic2Id();
```

- *Type:* java.lang.String

The OCID of the second backup virtual network interface card (VNIC) for the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#backup_vnic_2_id OdbCloudVmCluster#backup_vnic_2_id}

---

##### `cpuCoreCount`<sup>Optional</sup> <a name="cpuCoreCount" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

The number of CPU cores enabled on the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#cpu_core_count OdbCloudVmCluster#cpu_core_count}

---

##### `dbNodeArn`<sup>Optional</sup> <a name="dbNodeArn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbNodeArn"></a>

```java
public java.lang.String getDbNodeArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#db_node_arn OdbCloudVmCluster#db_node_arn}

---

##### `dbNodeId`<sup>Optional</sup> <a name="dbNodeId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbNodeId"></a>

```java
public java.lang.String getDbNodeId();
```

- *Type:* java.lang.String

The unique identifier of the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#db_node_id OdbCloudVmCluster#db_node_id}

---

##### `dbNodeStorageSizeInGBs`<sup>Optional</sup> <a name="dbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbNodeStorageSizeInGBs"></a>

```java
public java.lang.Number getDbNodeStorageSizeInGBs();
```

- *Type:* java.lang.Number

The amount of local node storage, in gigabytes (GB), that's allocated on the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#db_node_storage_size_in_g_bs OdbCloudVmCluster#db_node_storage_size_in_g_bs}

---

##### `dbServerId`<sup>Optional</sup> <a name="dbServerId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbServerId"></a>

```java
public java.lang.String getDbServerId();
```

- *Type:* java.lang.String

The unique identifier of the database server that's associated with the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#db_server_id OdbCloudVmCluster#db_server_id}

---

##### `dbSystemId`<sup>Optional</sup> <a name="dbSystemId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

The OCID of the DB system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#db_system_id OdbCloudVmCluster#db_system_id}

---

##### `hostIpId`<sup>Optional</sup> <a name="hostIpId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.hostIpId"></a>

```java
public java.lang.String getHostIpId();
```

- *Type:* java.lang.String

The OCID of the host IP address that's associated with the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#host_ip_id OdbCloudVmCluster#host_ip_id}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

The host name for the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#hostname OdbCloudVmCluster#hostname}

---

##### `memorySizeInGBs`<sup>Optional</sup> <a name="memorySizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.memorySizeInGBs"></a>

```java
public java.lang.Number getMemorySizeInGBs();
```

- *Type:* java.lang.Number

The amount of memory, in gigabytes (GB), that allocated on the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#memory_size_in_g_bs OdbCloudVmCluster#memory_size_in_g_bs}

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

The OCID of the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#ocid OdbCloudVmCluster#ocid}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

The current status of the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#status OdbCloudVmCluster#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.tags"></a>

```java
public IResolvable|java.util.List<OdbCloudVmClusterDbNodesTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#tags OdbCloudVmCluster#tags}.

---

##### `vnic2Id`<sup>Optional</sup> <a name="vnic2Id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.vnic2Id"></a>

```java
public java.lang.String getVnic2Id();
```

- *Type:* java.lang.String

The OCID of the second VNIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#vnic_2_id OdbCloudVmCluster#vnic_2_id}

---

##### `vnicId`<sup>Optional</sup> <a name="vnicId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.vnicId"></a>

```java
public java.lang.String getVnicId();
```

- *Type:* java.lang.String

The OCID of the VNIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#vnic_id OdbCloudVmCluster#vnic_id}

---

### OdbCloudVmClusterDbNodesTags <a name="OdbCloudVmClusterDbNodesTags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_vm_cluster.OdbCloudVmClusterDbNodesTags;

OdbCloudVmClusterDbNodesTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +,

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#value OdbCloudVmCluster#value}

---

### OdbCloudVmClusterIamRoles <a name="OdbCloudVmClusterIamRoles" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_vm_cluster.OdbCloudVmClusterIamRoles;

OdbCloudVmClusterIamRoles.builder()
//  .awsIntegration(java.lang.String)
//  .iamRoleArn(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.property.awsIntegration">awsIntegration</a></code> | <code>java.lang.String</code> | The AWS integration configuration settings for the AWS Identity and Access Management (IAM) service role. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) service role. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.property.status">status</a></code> | <code>java.lang.String</code> | The current status of the AWS Identity and Access Management (IAM) service role. |

---

##### `awsIntegration`<sup>Optional</sup> <a name="awsIntegration" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.property.awsIntegration"></a>

```java
public java.lang.String getAwsIntegration();
```

- *Type:* java.lang.String

The AWS integration configuration settings for the AWS Identity and Access Management (IAM) service role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#aws_integration OdbCloudVmCluster#aws_integration}

---

##### `iamRoleArn`<sup>Optional</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) service role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#iam_role_arn OdbCloudVmCluster#iam_role_arn}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

The current status of the AWS Identity and Access Management (IAM) service role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#status OdbCloudVmCluster#status}

---

### OdbCloudVmClusterTags <a name="OdbCloudVmClusterTags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_vm_cluster.OdbCloudVmClusterTags;

OdbCloudVmClusterTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +,

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#value OdbCloudVmCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbCloudVmClusterDataCollectionOptionsOutputReference <a name="OdbCloudVmClusterDataCollectionOptionsOutputReference" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_vm_cluster.OdbCloudVmClusterDataCollectionOptionsOutputReference;

new OdbCloudVmClusterDataCollectionOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">resetIsDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled">resetIsHealthMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">resetIsIncidentLogsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsDiagnosticsEventsEnabled` <a name="resetIsDiagnosticsEventsEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```java
public void resetIsDiagnosticsEventsEnabled()
```

##### `resetIsHealthMonitoringEnabled` <a name="resetIsHealthMonitoringEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled"></a>

```java
public void resetIsHealthMonitoringEnabled()
```

##### `resetIsIncidentLogsEnabled` <a name="resetIsIncidentLogsEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```java
public void resetIsIncidentLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">isDiagnosticsEventsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput">isHealthMonitoringEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">isIncidentLogsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">isHealthMonitoringEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isDiagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="isDiagnosticsEventsEnabledInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsDiagnosticsEventsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isHealthMonitoringEnabledInput`<sup>Optional</sup> <a name="isHealthMonitoringEnabledInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsHealthMonitoringEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isIncidentLogsEnabledInput`<sup>Optional</sup> <a name="isIncidentLogsEnabledInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsIncidentLogsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isDiagnosticsEventsEnabled`<sup>Required</sup> <a name="isDiagnosticsEventsEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsDiagnosticsEventsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isHealthMonitoringEnabled`<sup>Required</sup> <a name="isHealthMonitoringEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsHealthMonitoringEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isIncidentLogsEnabled`<sup>Required</sup> <a name="isIncidentLogsEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsIncidentLogsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OdbCloudVmClusterDataCollectionOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a>

---


### OdbCloudVmClusterDbNodesList <a name="OdbCloudVmClusterDbNodesList" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_vm_cluster.OdbCloudVmClusterDbNodesList;

new OdbCloudVmClusterDbNodesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.get"></a>

```java
public OdbCloudVmClusterDbNodesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OdbCloudVmClusterDbNodes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>>

---


### OdbCloudVmClusterDbNodesOutputReference <a name="OdbCloudVmClusterDbNodesOutputReference" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_vm_cluster.OdbCloudVmClusterDbNodesOutputReference;

new OdbCloudVmClusterDbNodesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetBackupIpId">resetBackupIpId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetBackupVnic2Id">resetBackupVnic2Id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetCpuCoreCount">resetCpuCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbNodeArn">resetDbNodeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbNodeId">resetDbNodeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbNodeStorageSizeInGBs">resetDbNodeStorageSizeInGBs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbServerId">resetDbServerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbSystemId">resetDbSystemId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetHostIpId">resetHostIpId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetMemorySizeInGBs">resetMemorySizeInGBs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetOcid">resetOcid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetVnic2Id">resetVnic2Id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetVnicId">resetVnicId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<OdbCloudVmClusterDbNodesTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>>

---

##### `resetBackupIpId` <a name="resetBackupIpId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetBackupIpId"></a>

```java
public void resetBackupIpId()
```

##### `resetBackupVnic2Id` <a name="resetBackupVnic2Id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetBackupVnic2Id"></a>

```java
public void resetBackupVnic2Id()
```

##### `resetCpuCoreCount` <a name="resetCpuCoreCount" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetCpuCoreCount"></a>

```java
public void resetCpuCoreCount()
```

##### `resetDbNodeArn` <a name="resetDbNodeArn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbNodeArn"></a>

```java
public void resetDbNodeArn()
```

##### `resetDbNodeId` <a name="resetDbNodeId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbNodeId"></a>

```java
public void resetDbNodeId()
```

##### `resetDbNodeStorageSizeInGBs` <a name="resetDbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbNodeStorageSizeInGBs"></a>

```java
public void resetDbNodeStorageSizeInGBs()
```

##### `resetDbServerId` <a name="resetDbServerId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbServerId"></a>

```java
public void resetDbServerId()
```

##### `resetDbSystemId` <a name="resetDbSystemId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbSystemId"></a>

```java
public void resetDbSystemId()
```

##### `resetHostIpId` <a name="resetHostIpId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetHostIpId"></a>

```java
public void resetHostIpId()
```

##### `resetHostname` <a name="resetHostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetMemorySizeInGBs` <a name="resetMemorySizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetMemorySizeInGBs"></a>

```java
public void resetMemorySizeInGBs()
```

##### `resetOcid` <a name="resetOcid" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetOcid"></a>

```java
public void resetOcid()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetTags"></a>

```java
public void resetTags()
```

##### `resetVnic2Id` <a name="resetVnic2Id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetVnic2Id"></a>

```java
public void resetVnic2Id()
```

##### `resetVnicId` <a name="resetVnicId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetVnicId"></a>

```java
public void resetVnicId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList">OdbCloudVmClusterDbNodesTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupIpIdInput">backupIpIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupVnic2IdInput">backupVnic2IdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.cpuCoreCountInput">cpuCoreCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeArnInput">dbNodeArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeIdInput">dbNodeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeStorageSizeInGBsInput">dbNodeStorageSizeInGBsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbServerIdInput">dbServerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbSystemIdInput">dbSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostIpIdInput">hostIpIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.memorySizeInGBsInput">memorySizeInGBsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.ocidInput">ocidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnic2IdInput">vnic2IdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnicIdInput">vnicIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupIpId">backupIpId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupVnic2Id">backupVnic2Id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeArn">dbNodeArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeId">dbNodeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeStorageSizeInGBs">dbNodeStorageSizeInGBs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbServerId">dbServerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostIpId">hostIpId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.memorySizeInGBs">memorySizeInGBs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnic2Id">vnic2Id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnicId">vnicId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.tags"></a>

```java
public OdbCloudVmClusterDbNodesTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList">OdbCloudVmClusterDbNodesTagsList</a>

---

##### `backupIpIdInput`<sup>Optional</sup> <a name="backupIpIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupIpIdInput"></a>

```java
public java.lang.String getBackupIpIdInput();
```

- *Type:* java.lang.String

---

##### `backupVnic2IdInput`<sup>Optional</sup> <a name="backupVnic2IdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupVnic2IdInput"></a>

```java
public java.lang.String getBackupVnic2IdInput();
```

- *Type:* java.lang.String

---

##### `cpuCoreCountInput`<sup>Optional</sup> <a name="cpuCoreCountInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.cpuCoreCountInput"></a>

```java
public java.lang.Number getCpuCoreCountInput();
```

- *Type:* java.lang.Number

---

##### `dbNodeArnInput`<sup>Optional</sup> <a name="dbNodeArnInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeArnInput"></a>

```java
public java.lang.String getDbNodeArnInput();
```

- *Type:* java.lang.String

---

##### `dbNodeIdInput`<sup>Optional</sup> <a name="dbNodeIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeIdInput"></a>

```java
public java.lang.String getDbNodeIdInput();
```

- *Type:* java.lang.String

---

##### `dbNodeStorageSizeInGBsInput`<sup>Optional</sup> <a name="dbNodeStorageSizeInGBsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeStorageSizeInGBsInput"></a>

```java
public java.lang.Number getDbNodeStorageSizeInGBsInput();
```

- *Type:* java.lang.Number

---

##### `dbServerIdInput`<sup>Optional</sup> <a name="dbServerIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbServerIdInput"></a>

```java
public java.lang.String getDbServerIdInput();
```

- *Type:* java.lang.String

---

##### `dbSystemIdInput`<sup>Optional</sup> <a name="dbSystemIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbSystemIdInput"></a>

```java
public java.lang.String getDbSystemIdInput();
```

- *Type:* java.lang.String

---

##### `hostIpIdInput`<sup>Optional</sup> <a name="hostIpIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostIpIdInput"></a>

```java
public java.lang.String getHostIpIdInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `memorySizeInGBsInput`<sup>Optional</sup> <a name="memorySizeInGBsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.memorySizeInGBsInput"></a>

```java
public java.lang.Number getMemorySizeInGBsInput();
```

- *Type:* java.lang.Number

---

##### `ocidInput`<sup>Optional</sup> <a name="ocidInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.ocidInput"></a>

```java
public java.lang.String getOcidInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.tagsInput"></a>

```java
public IResolvable|java.util.List<OdbCloudVmClusterDbNodesTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>>

---

##### `vnic2IdInput`<sup>Optional</sup> <a name="vnic2IdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnic2IdInput"></a>

```java
public java.lang.String getVnic2IdInput();
```

- *Type:* java.lang.String

---

##### `vnicIdInput`<sup>Optional</sup> <a name="vnicIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnicIdInput"></a>

```java
public java.lang.String getVnicIdInput();
```

- *Type:* java.lang.String

---

##### `backupIpId`<sup>Required</sup> <a name="backupIpId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupIpId"></a>

```java
public java.lang.String getBackupIpId();
```

- *Type:* java.lang.String

---

##### `backupVnic2Id`<sup>Required</sup> <a name="backupVnic2Id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupVnic2Id"></a>

```java
public java.lang.String getBackupVnic2Id();
```

- *Type:* java.lang.String

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

---

##### `dbNodeArn`<sup>Required</sup> <a name="dbNodeArn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeArn"></a>

```java
public java.lang.String getDbNodeArn();
```

- *Type:* java.lang.String

---

##### `dbNodeId`<sup>Required</sup> <a name="dbNodeId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeId"></a>

```java
public java.lang.String getDbNodeId();
```

- *Type:* java.lang.String

---

##### `dbNodeStorageSizeInGBs`<sup>Required</sup> <a name="dbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeStorageSizeInGBs"></a>

```java
public java.lang.Number getDbNodeStorageSizeInGBs();
```

- *Type:* java.lang.Number

---

##### `dbServerId`<sup>Required</sup> <a name="dbServerId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbServerId"></a>

```java
public java.lang.String getDbServerId();
```

- *Type:* java.lang.String

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

---

##### `hostIpId`<sup>Required</sup> <a name="hostIpId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostIpId"></a>

```java
public java.lang.String getHostIpId();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `memorySizeInGBs`<sup>Required</sup> <a name="memorySizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.memorySizeInGBs"></a>

```java
public java.lang.Number getMemorySizeInGBs();
```

- *Type:* java.lang.Number

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `vnic2Id`<sup>Required</sup> <a name="vnic2Id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnic2Id"></a>

```java
public java.lang.String getVnic2Id();
```

- *Type:* java.lang.String

---

##### `vnicId`<sup>Required</sup> <a name="vnicId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnicId"></a>

```java
public java.lang.String getVnicId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.internalValue"></a>

```java
public IResolvable|OdbCloudVmClusterDbNodes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>

---


### OdbCloudVmClusterDbNodesTagsList <a name="OdbCloudVmClusterDbNodesTagsList" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_vm_cluster.OdbCloudVmClusterDbNodesTagsList;

new OdbCloudVmClusterDbNodesTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.get"></a>

```java
public OdbCloudVmClusterDbNodesTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OdbCloudVmClusterDbNodesTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>>

---


### OdbCloudVmClusterDbNodesTagsOutputReference <a name="OdbCloudVmClusterDbNodesTagsOutputReference" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_vm_cluster.OdbCloudVmClusterDbNodesTagsOutputReference;

new OdbCloudVmClusterDbNodesTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|OdbCloudVmClusterDbNodesTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>

---


### OdbCloudVmClusterIamRolesList <a name="OdbCloudVmClusterIamRolesList" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_vm_cluster.OdbCloudVmClusterIamRolesList;

new OdbCloudVmClusterIamRolesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.get"></a>

```java
public OdbCloudVmClusterIamRolesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OdbCloudVmClusterIamRoles> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>>

---


### OdbCloudVmClusterIamRolesOutputReference <a name="OdbCloudVmClusterIamRolesOutputReference" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_vm_cluster.OdbCloudVmClusterIamRolesOutputReference;

new OdbCloudVmClusterIamRolesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resetAwsIntegration">resetAwsIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resetIamRoleArn">resetIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsIntegration` <a name="resetAwsIntegration" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resetAwsIntegration"></a>

```java
public void resetAwsIntegration()
```

##### `resetIamRoleArn` <a name="resetIamRoleArn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resetIamRoleArn"></a>

```java
public void resetIamRoleArn()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.awsIntegrationInput">awsIntegrationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.awsIntegration">awsIntegration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsIntegrationInput`<sup>Optional</sup> <a name="awsIntegrationInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.awsIntegrationInput"></a>

```java
public java.lang.String getAwsIntegrationInput();
```

- *Type:* java.lang.String

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.iamRoleArnInput"></a>

```java
public java.lang.String getIamRoleArnInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `awsIntegration`<sup>Required</sup> <a name="awsIntegration" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.awsIntegration"></a>

```java
public java.lang.String getAwsIntegration();
```

- *Type:* java.lang.String

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.internalValue"></a>

```java
public IResolvable|OdbCloudVmClusterIamRoles getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>

---


### OdbCloudVmClusterTagsList <a name="OdbCloudVmClusterTagsList" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_vm_cluster.OdbCloudVmClusterTagsList;

new OdbCloudVmClusterTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.get"></a>

```java
public OdbCloudVmClusterTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OdbCloudVmClusterTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>>

---


### OdbCloudVmClusterTagsOutputReference <a name="OdbCloudVmClusterTagsOutputReference" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_vm_cluster.OdbCloudVmClusterTagsOutputReference;

new OdbCloudVmClusterTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|OdbCloudVmClusterTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>

---



