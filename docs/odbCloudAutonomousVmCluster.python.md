# `odbCloudAutonomousVmCluster` Submodule <a name="`odbCloudAutonomousVmCluster` Submodule" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbCloudAutonomousVmCluster <a name="OdbCloudAutonomousVmCluster" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster awscc_odb_cloud_autonomous_vm_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer"></a>

```python
from cdktn_provider_awscc import odb_cloud_autonomous_vm_cluster

odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  autonomous_data_storage_size_in_t_bs: typing.Union[int, float] = None,
  cloud_exadata_infrastructure_id: str = None,
  cpu_core_count_per_node: typing.Union[int, float] = None,
  db_servers: typing.List[str] = None,
  description: str = None,
  display_name: str = None,
  iam_roles: IResolvable | typing.List[OdbCloudAutonomousVmClusterIamRoles] = None,
  is_mtls_enabled_vm_cluster: bool | IResolvable = None,
  license_model: str = None,
  maintenance_window: OdbCloudAutonomousVmClusterMaintenanceWindow = None,
  memory_per_oracle_compute_unit_in_g_bs: typing.Union[int, float] = None,
  odb_network_id: str = None,
  scan_listener_port_non_tls: typing.Union[int, float] = None,
  scan_listener_port_tls: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[OdbCloudAutonomousVmClusterTags] = None,
  time_zone: str = None,
  total_container_databases: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.autonomousDataStorageSizeInTBs">autonomous_data_storage_size_in_t_bs</a></code> | <code>typing.Union[int, float]</code> | The data storage size allocated for Autonomous Databases in the Autonomous VM cluster, in TB. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.cloudExadataInfrastructureId">cloud_exadata_infrastructure_id</a></code> | <code>str</code> | The unique identifier of the Cloud Exadata Infrastructure containing this Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.cpuCoreCountPerNode">cpu_core_count_per_node</a></code> | <code>typing.Union[int, float]</code> | The number of CPU cores enabled per node in the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.dbServers">db_servers</a></code> | <code>typing.List[str]</code> | The list of database servers associated with the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.description">description</a></code> | <code>str</code> | The user-provided description of the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.iamRoles">iam_roles</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles">OdbCloudAutonomousVmClusterIamRoles</a>]</code> | The AWS Identity and Access Management (IAM) service roles associated with the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.isMtlsEnabledVmCluster">is_mtls_enabled_vm_cluster</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether mutual TLS (mTLS) authentication is enabled for the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.licenseModel">license_model</a></code> | <code>str</code> | The Oracle license model that applies to the Autonomous VM cluster. Valid values are LICENSE_INCLUDED or BRING_YOUR_OWN_LICENSE. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow">OdbCloudAutonomousVmClusterMaintenanceWindow</a></code> | The scheduling details for the maintenance window. Patching and system updates take place during the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.memoryPerOracleComputeUnitInGBs">memory_per_oracle_compute_unit_in_g_bs</a></code> | <code>typing.Union[int, float]</code> | The amount of memory allocated per Oracle Compute Unit, in GB. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.odbNetworkId">odb_network_id</a></code> | <code>str</code> | The unique identifier of the ODB network associated with this Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.scanListenerPortNonTls">scan_listener_port_non_tls</a></code> | <code>typing.Union[int, float]</code> | The SCAN listener port for non-TLS (TCP) protocol. The default is 1521. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.scanListenerPortTls">scan_listener_port_tls</a></code> | <code>typing.Union[int, float]</code> | The SCAN listener port for TLS (TCP) protocol. The default is 2484. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags">OdbCloudAutonomousVmClusterTags</a>]</code> | The tags associated with the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | The time zone of the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.totalContainerDatabases">total_container_databases</a></code> | <code>typing.Union[int, float]</code> | The total number of Autonomous Container Databases that can be created with the allocated local storage. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `autonomous_data_storage_size_in_t_bs`<sup>Optional</sup> <a name="autonomous_data_storage_size_in_t_bs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.autonomousDataStorageSizeInTBs"></a>

- *Type:* typing.Union[int, float]

The data storage size allocated for Autonomous Databases in the Autonomous VM cluster, in TB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#autonomous_data_storage_size_in_t_bs OdbCloudAutonomousVmCluster#autonomous_data_storage_size_in_t_bs}

---

##### `cloud_exadata_infrastructure_id`<sup>Optional</sup> <a name="cloud_exadata_infrastructure_id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.cloudExadataInfrastructureId"></a>

- *Type:* str

The unique identifier of the Cloud Exadata Infrastructure containing this Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#cloud_exadata_infrastructure_id OdbCloudAutonomousVmCluster#cloud_exadata_infrastructure_id}

---

##### `cpu_core_count_per_node`<sup>Optional</sup> <a name="cpu_core_count_per_node" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.cpuCoreCountPerNode"></a>

- *Type:* typing.Union[int, float]

The number of CPU cores enabled per node in the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#cpu_core_count_per_node OdbCloudAutonomousVmCluster#cpu_core_count_per_node}

---

##### `db_servers`<sup>Optional</sup> <a name="db_servers" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.dbServers"></a>

- *Type:* typing.List[str]

The list of database servers associated with the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#db_servers OdbCloudAutonomousVmCluster#db_servers}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.description"></a>

- *Type:* str

The user-provided description of the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#description OdbCloudAutonomousVmCluster#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#display_name OdbCloudAutonomousVmCluster#display_name}

---

##### `iam_roles`<sup>Optional</sup> <a name="iam_roles" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.iamRoles"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles">OdbCloudAutonomousVmClusterIamRoles</a>]

The AWS Identity and Access Management (IAM) service roles associated with the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#iam_roles OdbCloudAutonomousVmCluster#iam_roles}

---

##### `is_mtls_enabled_vm_cluster`<sup>Optional</sup> <a name="is_mtls_enabled_vm_cluster" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.isMtlsEnabledVmCluster"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether mutual TLS (mTLS) authentication is enabled for the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#is_mtls_enabled_vm_cluster OdbCloudAutonomousVmCluster#is_mtls_enabled_vm_cluster}

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.licenseModel"></a>

- *Type:* str

The Oracle license model that applies to the Autonomous VM cluster. Valid values are LICENSE_INCLUDED or BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#license_model OdbCloudAutonomousVmCluster#license_model}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow">OdbCloudAutonomousVmClusterMaintenanceWindow</a>

The scheduling details for the maintenance window. Patching and system updates take place during the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#maintenance_window OdbCloudAutonomousVmCluster#maintenance_window}

---

##### `memory_per_oracle_compute_unit_in_g_bs`<sup>Optional</sup> <a name="memory_per_oracle_compute_unit_in_g_bs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.memoryPerOracleComputeUnitInGBs"></a>

- *Type:* typing.Union[int, float]

The amount of memory allocated per Oracle Compute Unit, in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#memory_per_oracle_compute_unit_in_g_bs OdbCloudAutonomousVmCluster#memory_per_oracle_compute_unit_in_g_bs}

---

##### `odb_network_id`<sup>Optional</sup> <a name="odb_network_id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.odbNetworkId"></a>

- *Type:* str

The unique identifier of the ODB network associated with this Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#odb_network_id OdbCloudAutonomousVmCluster#odb_network_id}

---

##### `scan_listener_port_non_tls`<sup>Optional</sup> <a name="scan_listener_port_non_tls" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.scanListenerPortNonTls"></a>

- *Type:* typing.Union[int, float]

The SCAN listener port for non-TLS (TCP) protocol. The default is 1521.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#scan_listener_port_non_tls OdbCloudAutonomousVmCluster#scan_listener_port_non_tls}

---

##### `scan_listener_port_tls`<sup>Optional</sup> <a name="scan_listener_port_tls" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.scanListenerPortTls"></a>

- *Type:* typing.Union[int, float]

The SCAN listener port for TLS (TCP) protocol. The default is 2484.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#scan_listener_port_tls OdbCloudAutonomousVmCluster#scan_listener_port_tls}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags">OdbCloudAutonomousVmClusterTags</a>]

The tags associated with the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#tags OdbCloudAutonomousVmCluster#tags}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.timeZone"></a>

- *Type:* str

The time zone of the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#time_zone OdbCloudAutonomousVmCluster#time_zone}

---

##### `total_container_databases`<sup>Optional</sup> <a name="total_container_databases" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.totalContainerDatabases"></a>

- *Type:* typing.Union[int, float]

The total number of Autonomous Container Databases that can be created with the allocated local storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#total_container_databases OdbCloudAutonomousVmCluster#total_container_databases}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putIamRoles">put_iam_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putMaintenanceWindow">put_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetAutonomousDataStorageSizeInTBs">reset_autonomous_data_storage_size_in_t_bs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetCloudExadataInfrastructureId">reset_cloud_exadata_infrastructure_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetCpuCoreCountPerNode">reset_cpu_core_count_per_node</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetDbServers">reset_db_servers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetIamRoles">reset_iam_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetIsMtlsEnabledVmCluster">reset_is_mtls_enabled_vm_cluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetLicenseModel">reset_license_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetMemoryPerOracleComputeUnitInGBs">reset_memory_per_oracle_compute_unit_in_g_bs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetOdbNetworkId">reset_odb_network_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetScanListenerPortNonTls">reset_scan_listener_port_non_tls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetScanListenerPortTls">reset_scan_listener_port_tls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetTimeZone">reset_time_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetTotalContainerDatabases">reset_total_container_databases</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_iam_roles` <a name="put_iam_roles" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putIamRoles"></a>

```python
def put_iam_roles(
  value: IResolvable | typing.List[OdbCloudAutonomousVmClusterIamRoles]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putIamRoles.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles">OdbCloudAutonomousVmClusterIamRoles</a>]

---

##### `put_maintenance_window` <a name="put_maintenance_window" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putMaintenanceWindow"></a>

```python
def put_maintenance_window(
  days_of_week: typing.List[str] = None,
  hours_of_day: typing.List[typing.Union[int, float]] = None,
  lead_time_in_weeks: typing.Union[int, float] = None,
  months: typing.List[str] = None,
  preference: str = None,
  weeks_of_month: typing.List[typing.Union[int, float]] = None
) -> None
```

###### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putMaintenanceWindow.parameter.daysOfWeek"></a>

- *Type:* typing.List[str]

The days of the week when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#days_of_week OdbCloudAutonomousVmCluster#days_of_week}

---

###### `hours_of_day`<sup>Optional</sup> <a name="hours_of_day" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putMaintenanceWindow.parameter.hoursOfDay"></a>

- *Type:* typing.List[typing.Union[int, float]]

The hours of the day when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#hours_of_day OdbCloudAutonomousVmCluster#hours_of_day}

---

###### `lead_time_in_weeks`<sup>Optional</sup> <a name="lead_time_in_weeks" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putMaintenanceWindow.parameter.leadTimeInWeeks"></a>

- *Type:* typing.Union[int, float]

The lead time in weeks before the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#lead_time_in_weeks OdbCloudAutonomousVmCluster#lead_time_in_weeks}

---

###### `months`<sup>Optional</sup> <a name="months" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putMaintenanceWindow.parameter.months"></a>

- *Type:* typing.List[str]

The months when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#months OdbCloudAutonomousVmCluster#months}

---

###### `preference`<sup>Optional</sup> <a name="preference" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putMaintenanceWindow.parameter.preference"></a>

- *Type:* str

The preference for the maintenance window scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#preference OdbCloudAutonomousVmCluster#preference}

---

###### `weeks_of_month`<sup>Optional</sup> <a name="weeks_of_month" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putMaintenanceWindow.parameter.weeksOfMonth"></a>

- *Type:* typing.List[typing.Union[int, float]]

The weeks of the month when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#weeks_of_month OdbCloudAutonomousVmCluster#weeks_of_month}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[OdbCloudAutonomousVmClusterTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags">OdbCloudAutonomousVmClusterTags</a>]

---

##### `reset_autonomous_data_storage_size_in_t_bs` <a name="reset_autonomous_data_storage_size_in_t_bs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetAutonomousDataStorageSizeInTBs"></a>

```python
def reset_autonomous_data_storage_size_in_t_bs() -> None
```

##### `reset_cloud_exadata_infrastructure_id` <a name="reset_cloud_exadata_infrastructure_id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetCloudExadataInfrastructureId"></a>

```python
def reset_cloud_exadata_infrastructure_id() -> None
```

##### `reset_cpu_core_count_per_node` <a name="reset_cpu_core_count_per_node" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetCpuCoreCountPerNode"></a>

```python
def reset_cpu_core_count_per_node() -> None
```

##### `reset_db_servers` <a name="reset_db_servers" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetDbServers"></a>

```python
def reset_db_servers() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_iam_roles` <a name="reset_iam_roles" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetIamRoles"></a>

```python
def reset_iam_roles() -> None
```

##### `reset_is_mtls_enabled_vm_cluster` <a name="reset_is_mtls_enabled_vm_cluster" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetIsMtlsEnabledVmCluster"></a>

```python
def reset_is_mtls_enabled_vm_cluster() -> None
```

##### `reset_license_model` <a name="reset_license_model" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetLicenseModel"></a>

```python
def reset_license_model() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_memory_per_oracle_compute_unit_in_g_bs` <a name="reset_memory_per_oracle_compute_unit_in_g_bs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetMemoryPerOracleComputeUnitInGBs"></a>

```python
def reset_memory_per_oracle_compute_unit_in_g_bs() -> None
```

##### `reset_odb_network_id` <a name="reset_odb_network_id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetOdbNetworkId"></a>

```python
def reset_odb_network_id() -> None
```

##### `reset_scan_listener_port_non_tls` <a name="reset_scan_listener_port_non_tls" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetScanListenerPortNonTls"></a>

```python
def reset_scan_listener_port_non_tls() -> None
```

##### `reset_scan_listener_port_tls` <a name="reset_scan_listener_port_tls" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetScanListenerPortTls"></a>

```python
def reset_scan_listener_port_tls() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```

##### `reset_total_container_databases` <a name="reset_total_container_databases" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetTotalContainerDatabases"></a>

```python
def reset_total_container_databases() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OdbCloudAutonomousVmCluster resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isConstruct"></a>

```python
from cdktn_provider_awscc import odb_cloud_autonomous_vm_cluster

odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isTerraformElement"></a>

```python
from cdktn_provider_awscc import odb_cloud_autonomous_vm_cluster

odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isTerraformResource"></a>

```python
from cdktn_provider_awscc import odb_cloud_autonomous_vm_cluster

odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import odb_cloud_autonomous_vm_cluster

odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OdbCloudAutonomousVmCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OdbCloudAutonomousVmCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OdbCloudAutonomousVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OdbCloudAutonomousVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.autonomousDataStoragePercentage">autonomous_data_storage_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.availableAutonomousDataStorageSizeInTBs">available_autonomous_data_storage_size_in_t_bs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.availableContainerDatabases">available_container_databases</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.availableCpus">available_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cloudAutonomousVmClusterArn">cloud_autonomous_vm_cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cloudAutonomousVmClusterId">cloud_autonomous_vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.computeModel">compute_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuPercentage">cpu_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dataStorageSizeInGBs">data_storage_size_in_g_bs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dataStorageSizeInTBs">data_storage_size_in_t_bs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dbNodeStorageSizeInGBs">db_node_storage_size_in_g_bs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.exadataStorageInTBsLowestScaledValue">exadata_storage_in_t_bs_lowest_scaled_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.iamRoles">iam_roles</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList">OdbCloudAutonomousVmClusterIamRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference">OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.maxAcdsLowestScaledValue">max_acds_lowest_scaled_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.memorySizeInGBs">memory_size_in_g_bs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.nonProvisionableAutonomousContainerDatabases">non_provisionable_autonomous_container_databases</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.ociResourceAnchorName">oci_resource_anchor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.ociUrl">oci_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisionableAutonomousContainerDatabases">provisionable_autonomous_container_databases</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisionedAutonomousContainerDatabases">provisioned_autonomous_container_databases</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisionedCpus">provisioned_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.reclaimableCpus">reclaimable_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.reservedCpus">reserved_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList">OdbCloudAutonomousVmClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.autonomousDataStorageSizeInTBsInput">autonomous_data_storage_size_in_t_bs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cloudExadataInfrastructureIdInput">cloud_exadata_infrastructure_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuCoreCountPerNodeInput">cpu_core_count_per_node_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dbServersInput">db_servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.iamRolesInput">iam_roles_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles">OdbCloudAutonomousVmClusterIamRoles</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.isMtlsEnabledVmClusterInput">is_mtls_enabled_vm_cluster_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.licenseModelInput">license_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow">OdbCloudAutonomousVmClusterMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.memoryPerOracleComputeUnitInGBsInput">memory_per_oracle_compute_unit_in_g_bs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.odbNetworkIdInput">odb_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortNonTlsInput">scan_listener_port_non_tls_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortTlsInput">scan_listener_port_tls_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags">OdbCloudAutonomousVmClusterTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.totalContainerDatabasesInput">total_container_databases_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.autonomousDataStorageSizeInTBs">autonomous_data_storage_size_in_t_bs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cloudExadataInfrastructureId">cloud_exadata_infrastructure_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuCoreCountPerNode">cpu_core_count_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dbServers">db_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.isMtlsEnabledVmCluster">is_mtls_enabled_vm_cluster</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.memoryPerOracleComputeUnitInGBs">memory_per_oracle_compute_unit_in_g_bs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.odbNetworkId">odb_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortNonTls">scan_listener_port_non_tls</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortTls">scan_listener_port_tls</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.totalContainerDatabases">total_container_databases</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `autonomous_data_storage_percentage`<sup>Required</sup> <a name="autonomous_data_storage_percentage" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.autonomousDataStoragePercentage"></a>

```python
autonomous_data_storage_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `available_autonomous_data_storage_size_in_t_bs`<sup>Required</sup> <a name="available_autonomous_data_storage_size_in_t_bs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.availableAutonomousDataStorageSizeInTBs"></a>

```python
available_autonomous_data_storage_size_in_t_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `available_container_databases`<sup>Required</sup> <a name="available_container_databases" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.availableContainerDatabases"></a>

```python
available_container_databases: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `available_cpus`<sup>Required</sup> <a name="available_cpus" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.availableCpus"></a>

```python
available_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cloud_autonomous_vm_cluster_arn`<sup>Required</sup> <a name="cloud_autonomous_vm_cluster_arn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cloudAutonomousVmClusterArn"></a>

```python
cloud_autonomous_vm_cluster_arn: str
```

- *Type:* str

---

##### `cloud_autonomous_vm_cluster_id`<sup>Required</sup> <a name="cloud_autonomous_vm_cluster_id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cloudAutonomousVmClusterId"></a>

```python
cloud_autonomous_vm_cluster_id: str
```

- *Type:* str

---

##### `compute_model`<sup>Required</sup> <a name="compute_model" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.computeModel"></a>

```python
compute_model: str
```

- *Type:* str

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_percentage`<sup>Required</sup> <a name="cpu_percentage" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuPercentage"></a>

```python
cpu_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_g_bs`<sup>Required</sup> <a name="data_storage_size_in_g_bs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dataStorageSizeInGBs"></a>

```python
data_storage_size_in_g_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_t_bs`<sup>Required</sup> <a name="data_storage_size_in_t_bs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dataStorageSizeInTBs"></a>

```python
data_storage_size_in_t_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_node_storage_size_in_g_bs`<sup>Required</sup> <a name="db_node_storage_size_in_g_bs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dbNodeStorageSizeInGBs"></a>

```python
db_node_storage_size_in_g_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `exadata_storage_in_t_bs_lowest_scaled_value`<sup>Required</sup> <a name="exadata_storage_in_t_bs_lowest_scaled_value" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.exadataStorageInTBsLowestScaledValue"></a>

```python
exadata_storage_in_t_bs_lowest_scaled_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `iam_roles`<sup>Required</sup> <a name="iam_roles" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.iamRoles"></a>

```python
iam_roles: OdbCloudAutonomousVmClusterIamRolesList
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList">OdbCloudAutonomousVmClusterIamRolesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.maintenanceWindow"></a>

```python
maintenance_window: OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference">OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference</a>

---

##### `max_acds_lowest_scaled_value`<sup>Required</sup> <a name="max_acds_lowest_scaled_value" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.maxAcdsLowestScaledValue"></a>

```python
max_acds_lowest_scaled_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_size_in_g_bs`<sup>Required</sup> <a name="memory_size_in_g_bs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.memorySizeInGBs"></a>

```python
memory_size_in_g_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `non_provisionable_autonomous_container_databases`<sup>Required</sup> <a name="non_provisionable_autonomous_container_databases" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.nonProvisionableAutonomousContainerDatabases"></a>

```python
non_provisionable_autonomous_container_databases: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `oci_resource_anchor_name`<sup>Required</sup> <a name="oci_resource_anchor_name" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.ociResourceAnchorName"></a>

```python
oci_resource_anchor_name: str
```

- *Type:* str

---

##### `oci_url`<sup>Required</sup> <a name="oci_url" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.ociUrl"></a>

```python
oci_url: str
```

- *Type:* str

---

##### `provisionable_autonomous_container_databases`<sup>Required</sup> <a name="provisionable_autonomous_container_databases" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisionableAutonomousContainerDatabases"></a>

```python
provisionable_autonomous_container_databases: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_autonomous_container_databases`<sup>Required</sup> <a name="provisioned_autonomous_container_databases" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisionedAutonomousContainerDatabases"></a>

```python
provisioned_autonomous_container_databases: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_cpus`<sup>Required</sup> <a name="provisioned_cpus" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisionedCpus"></a>

```python
provisioned_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reclaimable_cpus`<sup>Required</sup> <a name="reclaimable_cpus" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.reclaimableCpus"></a>

```python
reclaimable_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reserved_cpus`<sup>Required</sup> <a name="reserved_cpus" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.reservedCpus"></a>

```python
reserved_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.tags"></a>

```python
tags: OdbCloudAutonomousVmClusterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList">OdbCloudAutonomousVmClusterTagsList</a>

---

##### `autonomous_data_storage_size_in_t_bs_input`<sup>Optional</sup> <a name="autonomous_data_storage_size_in_t_bs_input" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.autonomousDataStorageSizeInTBsInput"></a>

```python
autonomous_data_storage_size_in_t_bs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cloud_exadata_infrastructure_id_input`<sup>Optional</sup> <a name="cloud_exadata_infrastructure_id_input" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cloudExadataInfrastructureIdInput"></a>

```python
cloud_exadata_infrastructure_id_input: str
```

- *Type:* str

---

##### `cpu_core_count_per_node_input`<sup>Optional</sup> <a name="cpu_core_count_per_node_input" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuCoreCountPerNodeInput"></a>

```python
cpu_core_count_per_node_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_servers_input`<sup>Optional</sup> <a name="db_servers_input" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dbServersInput"></a>

```python
db_servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `iam_roles_input`<sup>Optional</sup> <a name="iam_roles_input" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.iamRolesInput"></a>

```python
iam_roles_input: IResolvable | typing.List[OdbCloudAutonomousVmClusterIamRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles">OdbCloudAutonomousVmClusterIamRoles</a>]

---

##### `is_mtls_enabled_vm_cluster_input`<sup>Optional</sup> <a name="is_mtls_enabled_vm_cluster_input" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.isMtlsEnabledVmClusterInput"></a>

```python
is_mtls_enabled_vm_cluster_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `license_model_input`<sup>Optional</sup> <a name="license_model_input" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.licenseModelInput"></a>

```python
license_model_input: str
```

- *Type:* str

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: IResolvable | OdbCloudAutonomousVmClusterMaintenanceWindow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow">OdbCloudAutonomousVmClusterMaintenanceWindow</a>

---

##### `memory_per_oracle_compute_unit_in_g_bs_input`<sup>Optional</sup> <a name="memory_per_oracle_compute_unit_in_g_bs_input" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.memoryPerOracleComputeUnitInGBsInput"></a>

```python
memory_per_oracle_compute_unit_in_g_bs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `odb_network_id_input`<sup>Optional</sup> <a name="odb_network_id_input" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.odbNetworkIdInput"></a>

```python
odb_network_id_input: str
```

- *Type:* str

---

##### `scan_listener_port_non_tls_input`<sup>Optional</sup> <a name="scan_listener_port_non_tls_input" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortNonTlsInput"></a>

```python
scan_listener_port_non_tls_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_tls_input`<sup>Optional</sup> <a name="scan_listener_port_tls_input" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortTlsInput"></a>

```python
scan_listener_port_tls_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[OdbCloudAutonomousVmClusterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags">OdbCloudAutonomousVmClusterTags</a>]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `total_container_databases_input`<sup>Optional</sup> <a name="total_container_databases_input" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.totalContainerDatabasesInput"></a>

```python
total_container_databases_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autonomous_data_storage_size_in_t_bs`<sup>Required</sup> <a name="autonomous_data_storage_size_in_t_bs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.autonomousDataStorageSizeInTBs"></a>

```python
autonomous_data_storage_size_in_t_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cloud_exadata_infrastructure_id`<sup>Required</sup> <a name="cloud_exadata_infrastructure_id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cloudExadataInfrastructureId"></a>

```python
cloud_exadata_infrastructure_id: str
```

- *Type:* str

---

##### `cpu_core_count_per_node`<sup>Required</sup> <a name="cpu_core_count_per_node" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuCoreCountPerNode"></a>

```python
cpu_core_count_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_servers`<sup>Required</sup> <a name="db_servers" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dbServers"></a>

```python
db_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `is_mtls_enabled_vm_cluster`<sup>Required</sup> <a name="is_mtls_enabled_vm_cluster" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.isMtlsEnabledVmCluster"></a>

```python
is_mtls_enabled_vm_cluster: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `memory_per_oracle_compute_unit_in_g_bs`<sup>Required</sup> <a name="memory_per_oracle_compute_unit_in_g_bs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.memoryPerOracleComputeUnitInGBs"></a>

```python
memory_per_oracle_compute_unit_in_g_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `odb_network_id`<sup>Required</sup> <a name="odb_network_id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.odbNetworkId"></a>

```python
odb_network_id: str
```

- *Type:* str

---

##### `scan_listener_port_non_tls`<sup>Required</sup> <a name="scan_listener_port_non_tls" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortNonTls"></a>

```python
scan_listener_port_non_tls: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_tls`<sup>Required</sup> <a name="scan_listener_port_tls" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortTls"></a>

```python
scan_listener_port_tls: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `total_container_databases`<sup>Required</sup> <a name="total_container_databases" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.totalContainerDatabases"></a>

```python
total_container_databases: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OdbCloudAutonomousVmClusterConfig <a name="OdbCloudAutonomousVmClusterConfig" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import odb_cloud_autonomous_vm_cluster

odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  autonomous_data_storage_size_in_t_bs: typing.Union[int, float] = None,
  cloud_exadata_infrastructure_id: str = None,
  cpu_core_count_per_node: typing.Union[int, float] = None,
  db_servers: typing.List[str] = None,
  description: str = None,
  display_name: str = None,
  iam_roles: IResolvable | typing.List[OdbCloudAutonomousVmClusterIamRoles] = None,
  is_mtls_enabled_vm_cluster: bool | IResolvable = None,
  license_model: str = None,
  maintenance_window: OdbCloudAutonomousVmClusterMaintenanceWindow = None,
  memory_per_oracle_compute_unit_in_g_bs: typing.Union[int, float] = None,
  odb_network_id: str = None,
  scan_listener_port_non_tls: typing.Union[int, float] = None,
  scan_listener_port_tls: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[OdbCloudAutonomousVmClusterTags] = None,
  time_zone: str = None,
  total_container_databases: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.autonomousDataStorageSizeInTBs">autonomous_data_storage_size_in_t_bs</a></code> | <code>typing.Union[int, float]</code> | The data storage size allocated for Autonomous Databases in the Autonomous VM cluster, in TB. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.cloudExadataInfrastructureId">cloud_exadata_infrastructure_id</a></code> | <code>str</code> | The unique identifier of the Cloud Exadata Infrastructure containing this Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.cpuCoreCountPerNode">cpu_core_count_per_node</a></code> | <code>typing.Union[int, float]</code> | The number of CPU cores enabled per node in the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.dbServers">db_servers</a></code> | <code>typing.List[str]</code> | The list of database servers associated with the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.description">description</a></code> | <code>str</code> | The user-provided description of the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.iamRoles">iam_roles</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles">OdbCloudAutonomousVmClusterIamRoles</a>]</code> | The AWS Identity and Access Management (IAM) service roles associated with the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.isMtlsEnabledVmCluster">is_mtls_enabled_vm_cluster</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether mutual TLS (mTLS) authentication is enabled for the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.licenseModel">license_model</a></code> | <code>str</code> | The Oracle license model that applies to the Autonomous VM cluster. Valid values are LICENSE_INCLUDED or BRING_YOUR_OWN_LICENSE. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow">OdbCloudAutonomousVmClusterMaintenanceWindow</a></code> | The scheduling details for the maintenance window. Patching and system updates take place during the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.memoryPerOracleComputeUnitInGBs">memory_per_oracle_compute_unit_in_g_bs</a></code> | <code>typing.Union[int, float]</code> | The amount of memory allocated per Oracle Compute Unit, in GB. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.odbNetworkId">odb_network_id</a></code> | <code>str</code> | The unique identifier of the ODB network associated with this Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.scanListenerPortNonTls">scan_listener_port_non_tls</a></code> | <code>typing.Union[int, float]</code> | The SCAN listener port for non-TLS (TCP) protocol. The default is 1521. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.scanListenerPortTls">scan_listener_port_tls</a></code> | <code>typing.Union[int, float]</code> | The SCAN listener port for TLS (TCP) protocol. The default is 2484. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags">OdbCloudAutonomousVmClusterTags</a>]</code> | The tags associated with the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.timeZone">time_zone</a></code> | <code>str</code> | The time zone of the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.totalContainerDatabases">total_container_databases</a></code> | <code>typing.Union[int, float]</code> | The total number of Autonomous Container Databases that can be created with the allocated local storage. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `autonomous_data_storage_size_in_t_bs`<sup>Optional</sup> <a name="autonomous_data_storage_size_in_t_bs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.autonomousDataStorageSizeInTBs"></a>

```python
autonomous_data_storage_size_in_t_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data storage size allocated for Autonomous Databases in the Autonomous VM cluster, in TB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#autonomous_data_storage_size_in_t_bs OdbCloudAutonomousVmCluster#autonomous_data_storage_size_in_t_bs}

---

##### `cloud_exadata_infrastructure_id`<sup>Optional</sup> <a name="cloud_exadata_infrastructure_id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.cloudExadataInfrastructureId"></a>

```python
cloud_exadata_infrastructure_id: str
```

- *Type:* str

The unique identifier of the Cloud Exadata Infrastructure containing this Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#cloud_exadata_infrastructure_id OdbCloudAutonomousVmCluster#cloud_exadata_infrastructure_id}

---

##### `cpu_core_count_per_node`<sup>Optional</sup> <a name="cpu_core_count_per_node" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.cpuCoreCountPerNode"></a>

```python
cpu_core_count_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of CPU cores enabled per node in the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#cpu_core_count_per_node OdbCloudAutonomousVmCluster#cpu_core_count_per_node}

---

##### `db_servers`<sup>Optional</sup> <a name="db_servers" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.dbServers"></a>

```python
db_servers: typing.List[str]
```

- *Type:* typing.List[str]

The list of database servers associated with the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#db_servers OdbCloudAutonomousVmCluster#db_servers}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The user-provided description of the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#description OdbCloudAutonomousVmCluster#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#display_name OdbCloudAutonomousVmCluster#display_name}

---

##### `iam_roles`<sup>Optional</sup> <a name="iam_roles" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.iamRoles"></a>

```python
iam_roles: IResolvable | typing.List[OdbCloudAutonomousVmClusterIamRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles">OdbCloudAutonomousVmClusterIamRoles</a>]

The AWS Identity and Access Management (IAM) service roles associated with the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#iam_roles OdbCloudAutonomousVmCluster#iam_roles}

---

##### `is_mtls_enabled_vm_cluster`<sup>Optional</sup> <a name="is_mtls_enabled_vm_cluster" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.isMtlsEnabledVmCluster"></a>

```python
is_mtls_enabled_vm_cluster: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether mutual TLS (mTLS) authentication is enabled for the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#is_mtls_enabled_vm_cluster OdbCloudAutonomousVmCluster#is_mtls_enabled_vm_cluster}

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

The Oracle license model that applies to the Autonomous VM cluster. Valid values are LICENSE_INCLUDED or BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#license_model OdbCloudAutonomousVmCluster#license_model}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.maintenanceWindow"></a>

```python
maintenance_window: OdbCloudAutonomousVmClusterMaintenanceWindow
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow">OdbCloudAutonomousVmClusterMaintenanceWindow</a>

The scheduling details for the maintenance window. Patching and system updates take place during the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#maintenance_window OdbCloudAutonomousVmCluster#maintenance_window}

---

##### `memory_per_oracle_compute_unit_in_g_bs`<sup>Optional</sup> <a name="memory_per_oracle_compute_unit_in_g_bs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.memoryPerOracleComputeUnitInGBs"></a>

```python
memory_per_oracle_compute_unit_in_g_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of memory allocated per Oracle Compute Unit, in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#memory_per_oracle_compute_unit_in_g_bs OdbCloudAutonomousVmCluster#memory_per_oracle_compute_unit_in_g_bs}

---

##### `odb_network_id`<sup>Optional</sup> <a name="odb_network_id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.odbNetworkId"></a>

```python
odb_network_id: str
```

- *Type:* str

The unique identifier of the ODB network associated with this Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#odb_network_id OdbCloudAutonomousVmCluster#odb_network_id}

---

##### `scan_listener_port_non_tls`<sup>Optional</sup> <a name="scan_listener_port_non_tls" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.scanListenerPortNonTls"></a>

```python
scan_listener_port_non_tls: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The SCAN listener port for non-TLS (TCP) protocol. The default is 1521.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#scan_listener_port_non_tls OdbCloudAutonomousVmCluster#scan_listener_port_non_tls}

---

##### `scan_listener_port_tls`<sup>Optional</sup> <a name="scan_listener_port_tls" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.scanListenerPortTls"></a>

```python
scan_listener_port_tls: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The SCAN listener port for TLS (TCP) protocol. The default is 2484.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#scan_listener_port_tls OdbCloudAutonomousVmCluster#scan_listener_port_tls}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[OdbCloudAutonomousVmClusterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags">OdbCloudAutonomousVmClusterTags</a>]

The tags associated with the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#tags OdbCloudAutonomousVmCluster#tags}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

The time zone of the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#time_zone OdbCloudAutonomousVmCluster#time_zone}

---

##### `total_container_databases`<sup>Optional</sup> <a name="total_container_databases" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.totalContainerDatabases"></a>

```python
total_container_databases: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The total number of Autonomous Container Databases that can be created with the allocated local storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#total_container_databases OdbCloudAutonomousVmCluster#total_container_databases}

---

### OdbCloudAutonomousVmClusterIamRoles <a name="OdbCloudAutonomousVmClusterIamRoles" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles.Initializer"></a>

```python
from cdktn_provider_awscc import odb_cloud_autonomous_vm_cluster

odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles(
  aws_integration: str = None,
  iam_role_arn: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles.property.awsIntegration">aws_integration</a></code> | <code>str</code> | The AWS integration configuration settings for the AWS Identity and Access Management (IAM) service role. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) service role. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles.property.status">status</a></code> | <code>str</code> | The current status of the AWS Identity and Access Management (IAM) service role. |

---

##### `aws_integration`<sup>Optional</sup> <a name="aws_integration" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles.property.awsIntegration"></a>

```python
aws_integration: str
```

- *Type:* str

The AWS integration configuration settings for the AWS Identity and Access Management (IAM) service role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#aws_integration OdbCloudAutonomousVmCluster#aws_integration}

---

##### `iam_role_arn`<sup>Optional</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) service role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#iam_role_arn OdbCloudAutonomousVmCluster#iam_role_arn}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles.property.status"></a>

```python
status: str
```

- *Type:* str

The current status of the AWS Identity and Access Management (IAM) service role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#status OdbCloudAutonomousVmCluster#status}

---

### OdbCloudAutonomousVmClusterMaintenanceWindow <a name="OdbCloudAutonomousVmClusterMaintenanceWindow" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.Initializer"></a>

```python
from cdktn_provider_awscc import odb_cloud_autonomous_vm_cluster

odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow(
  days_of_week: typing.List[str] = None,
  hours_of_day: typing.List[typing.Union[int, float]] = None,
  lead_time_in_weeks: typing.Union[int, float] = None,
  months: typing.List[str] = None,
  preference: str = None,
  weeks_of_month: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[str]</code> | The days of the week when maintenance can be performed. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.hoursOfDay">hours_of_day</a></code> | <code>typing.List[typing.Union[int, float]]</code> | The hours of the day when maintenance can be performed. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.leadTimeInWeeks">lead_time_in_weeks</a></code> | <code>typing.Union[int, float]</code> | The lead time in weeks before the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.months">months</a></code> | <code>typing.List[str]</code> | The months when maintenance can be performed. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.preference">preference</a></code> | <code>str</code> | The preference for the maintenance window scheduling. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.weeksOfMonth">weeks_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | The weeks of the month when maintenance can be performed. |

---

##### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.daysOfWeek"></a>

```python
days_of_week: typing.List[str]
```

- *Type:* typing.List[str]

The days of the week when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#days_of_week OdbCloudAutonomousVmCluster#days_of_week}

---

##### `hours_of_day`<sup>Optional</sup> <a name="hours_of_day" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.hoursOfDay"></a>

```python
hours_of_day: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

The hours of the day when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#hours_of_day OdbCloudAutonomousVmCluster#hours_of_day}

---

##### `lead_time_in_weeks`<sup>Optional</sup> <a name="lead_time_in_weeks" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.leadTimeInWeeks"></a>

```python
lead_time_in_weeks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The lead time in weeks before the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#lead_time_in_weeks OdbCloudAutonomousVmCluster#lead_time_in_weeks}

---

##### `months`<sup>Optional</sup> <a name="months" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.months"></a>

```python
months: typing.List[str]
```

- *Type:* typing.List[str]

The months when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#months OdbCloudAutonomousVmCluster#months}

---

##### `preference`<sup>Optional</sup> <a name="preference" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.preference"></a>

```python
preference: str
```

- *Type:* str

The preference for the maintenance window scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#preference OdbCloudAutonomousVmCluster#preference}

---

##### `weeks_of_month`<sup>Optional</sup> <a name="weeks_of_month" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.weeksOfMonth"></a>

```python
weeks_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

The weeks of the month when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#weeks_of_month OdbCloudAutonomousVmCluster#weeks_of_month}

---

### OdbCloudAutonomousVmClusterTags <a name="OdbCloudAutonomousVmClusterTags" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags.Initializer"></a>

```python
from cdktn_provider_awscc import odb_cloud_autonomous_vm_cluster

odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +,

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#value OdbCloudAutonomousVmCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbCloudAutonomousVmClusterIamRolesList <a name="OdbCloudAutonomousVmClusterIamRolesList" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.Initializer"></a>

```python
from cdktn_provider_awscc import odb_cloud_autonomous_vm_cluster

odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbCloudAutonomousVmClusterIamRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles">OdbCloudAutonomousVmClusterIamRoles</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OdbCloudAutonomousVmClusterIamRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles">OdbCloudAutonomousVmClusterIamRoles</a>]

---


### OdbCloudAutonomousVmClusterIamRolesOutputReference <a name="OdbCloudAutonomousVmClusterIamRolesOutputReference" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import odb_cloud_autonomous_vm_cluster

odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.resetAwsIntegration">reset_aws_integration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.resetIamRoleArn">reset_iam_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_integration` <a name="reset_aws_integration" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.resetAwsIntegration"></a>

```python
def reset_aws_integration() -> None
```

##### `reset_iam_role_arn` <a name="reset_iam_role_arn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.resetIamRoleArn"></a>

```python
def reset_iam_role_arn() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.awsIntegrationInput">aws_integration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.iamRoleArnInput">iam_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.awsIntegration">aws_integration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles">OdbCloudAutonomousVmClusterIamRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_integration_input`<sup>Optional</sup> <a name="aws_integration_input" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.awsIntegrationInput"></a>

```python
aws_integration_input: str
```

- *Type:* str

---

##### `iam_role_arn_input`<sup>Optional</sup> <a name="iam_role_arn_input" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.iamRoleArnInput"></a>

```python
iam_role_arn_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `aws_integration`<sup>Required</sup> <a name="aws_integration" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.awsIntegration"></a>

```python
aws_integration: str
```

- *Type:* str

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OdbCloudAutonomousVmClusterIamRoles
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles">OdbCloudAutonomousVmClusterIamRoles</a>

---


### OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference <a name="OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import odb_cloud_autonomous_vm_cluster

odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetDaysOfWeek">reset_days_of_week</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetHoursOfDay">reset_hours_of_day</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetLeadTimeInWeeks">reset_lead_time_in_weeks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetMonths">reset_months</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetPreference">reset_preference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetWeeksOfMonth">reset_weeks_of_month</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_days_of_week` <a name="reset_days_of_week" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetDaysOfWeek"></a>

```python
def reset_days_of_week() -> None
```

##### `reset_hours_of_day` <a name="reset_hours_of_day" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetHoursOfDay"></a>

```python
def reset_hours_of_day() -> None
```

##### `reset_lead_time_in_weeks` <a name="reset_lead_time_in_weeks" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetLeadTimeInWeeks"></a>

```python
def reset_lead_time_in_weeks() -> None
```

##### `reset_months` <a name="reset_months" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetMonths"></a>

```python
def reset_months() -> None
```

##### `reset_preference` <a name="reset_preference" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetPreference"></a>

```python
def reset_preference() -> None
```

##### `reset_weeks_of_month` <a name="reset_weeks_of_month" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetWeeksOfMonth"></a>

```python
def reset_weeks_of_month() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.daysOfWeekInput">days_of_week_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.hoursOfDayInput">hours_of_day_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.leadTimeInWeeksInput">lead_time_in_weeks_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.monthsInput">months_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.preferenceInput">preference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.weeksOfMonthInput">weeks_of_month_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.hoursOfDay">hours_of_day</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.leadTimeInWeeks">lead_time_in_weeks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.months">months</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.weeksOfMonth">weeks_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow">OdbCloudAutonomousVmClusterMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_of_week_input`<sup>Optional</sup> <a name="days_of_week_input" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.daysOfWeekInput"></a>

```python
days_of_week_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hours_of_day_input`<sup>Optional</sup> <a name="hours_of_day_input" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.hoursOfDayInput"></a>

```python
hours_of_day_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `lead_time_in_weeks_input`<sup>Optional</sup> <a name="lead_time_in_weeks_input" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.leadTimeInWeeksInput"></a>

```python
lead_time_in_weeks_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `months_input`<sup>Optional</sup> <a name="months_input" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.monthsInput"></a>

```python
months_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preference_input`<sup>Optional</sup> <a name="preference_input" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.preferenceInput"></a>

```python
preference_input: str
```

- *Type:* str

---

##### `weeks_of_month_input`<sup>Optional</sup> <a name="weeks_of_month_input" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.weeksOfMonthInput"></a>

```python
weeks_of_month_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```python
days_of_week: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hours_of_day`<sup>Required</sup> <a name="hours_of_day" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```python
hours_of_day: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `lead_time_in_weeks`<sup>Required</sup> <a name="lead_time_in_weeks" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```python
lead_time_in_weeks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.months"></a>

```python
months: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.preference"></a>

```python
preference: str
```

- *Type:* str

---

##### `weeks_of_month`<sup>Required</sup> <a name="weeks_of_month" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```python
weeks_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OdbCloudAutonomousVmClusterMaintenanceWindow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow">OdbCloudAutonomousVmClusterMaintenanceWindow</a>

---


### OdbCloudAutonomousVmClusterTagsList <a name="OdbCloudAutonomousVmClusterTagsList" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import odb_cloud_autonomous_vm_cluster

odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbCloudAutonomousVmClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags">OdbCloudAutonomousVmClusterTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OdbCloudAutonomousVmClusterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags">OdbCloudAutonomousVmClusterTags</a>]

---


### OdbCloudAutonomousVmClusterTagsOutputReference <a name="OdbCloudAutonomousVmClusterTagsOutputReference" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import odb_cloud_autonomous_vm_cluster

odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags">OdbCloudAutonomousVmClusterTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OdbCloudAutonomousVmClusterTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags">OdbCloudAutonomousVmClusterTags</a>

---



