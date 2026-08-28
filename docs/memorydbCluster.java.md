# `memorydbCluster` Submodule <a name="`memorydbCluster` Submodule" id="@cdktn/provider-awscc.memorydbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MemorydbCluster <a name="MemorydbCluster" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster awscc_memorydb_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer"></a>

```java
import io.cdktn.providers.awscc.memorydb_cluster.MemorydbCluster;

MemorydbCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .aclName(java.lang.String)
    .clusterName(java.lang.String)
    .nodeType(java.lang.String)
//  .autoMinorVersionUpgrade(java.lang.Boolean|IResolvable)
//  .clusterEndpoint(MemorydbClusterClusterEndpoint)
//  .dataTiering(java.lang.String)
//  .description(java.lang.String)
//  .engine(java.lang.String)
//  .engineVersion(java.lang.String)
//  .finalSnapshotName(java.lang.String)
//  .ipDiscovery(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .maintenanceWindow(java.lang.String)
//  .multiRegionClusterName(java.lang.String)
//  .networkType(java.lang.String)
//  .numReplicasPerShard(java.lang.Number)
//  .numShards(java.lang.Number)
//  .parameterGroupName(java.lang.String)
//  .port(java.lang.Number)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .snapshotArns(java.util.List<java.lang.String>)
//  .snapshotName(java.lang.String)
//  .snapshotRetentionLimit(java.lang.Number)
//  .snapshotWindow(java.lang.String)
//  .snsTopicArn(java.lang.String)
//  .snsTopicStatus(java.lang.String)
//  .subnetGroupName(java.lang.String)
//  .tags(IResolvable|java.util.List<MemorydbClusterTags>)
//  .tlsEnabled(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.aclName">aclName</a></code> | <code>java.lang.String</code> | The name of the Access Control List to associate with the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | The name of the cluster. This value must be unique as it also serves as the cluster identifier. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.nodeType">nodeType</a></code> | <code>java.lang.String</code> | The compute and memory capacity of the nodes in the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A flag that enables automatic minor version upgrade when set to true. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.clusterEndpoint">clusterEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a></code> | The cluster endpoint. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.dataTiering">dataTiering</a></code> | <code>java.lang.String</code> | Enables data tiering. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.engine">engine</a></code> | <code>java.lang.String</code> | The engine type used by the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | The Redis engine version used by the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.finalSnapshotName">finalSnapshotName</a></code> | <code>java.lang.String</code> | The user-supplied name of a final cluster snapshot. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.ipDiscovery">ipDiscovery</a></code> | <code>java.lang.String</code> | For clusters wth dual stack NetworkType, IpDiscovery controls the Ip protocol (ipv4 or ipv6) returned by the engine commands such as `cluster info` and `cluster nodes` which are used by clients to connect to the nodes in the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The ID of the KMS key used to encrypt the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.maintenanceWindow">maintenanceWindow</a></code> | <code>java.lang.String</code> | Specifies the weekly time range during which maintenance on the cluster is performed. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.multiRegionClusterName">multiRegionClusterName</a></code> | <code>java.lang.String</code> | The name of the Global Datastore, it is generated by MemoryDB adding a prefix to MultiRegionClusterNameSuffix. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.networkType">networkType</a></code> | <code>java.lang.String</code> | Must be either ipv4 \| ipv6 \| dual_stack. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.numReplicasPerShard">numReplicasPerShard</a></code> | <code>java.lang.Number</code> | The number of replicas to apply to each shard. The limit is 5. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.numShards">numShards</a></code> | <code>java.lang.Number</code> | The number of shards the cluster will contain. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.parameterGroupName">parameterGroupName</a></code> | <code>java.lang.String</code> | The name of the parameter group associated with the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | The port number on which each member of the cluster accepts connections. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | One or more Amazon VPC security groups associated with this cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.snapshotArns">snapshotArns</a></code> | <code>java.util.List<java.lang.String></code> | A list of Amazon Resource Names (ARN) that uniquely identify the RDB snapshot files stored in Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | The name of a snapshot from which to restore data into the new cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | <code>java.lang.Number</code> | The number of days for which MemoryDB retains automatic snapshots before deleting them. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.snapshotWindow">snapshotWindow</a></code> | <code>java.lang.String</code> | The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.snsTopicStatus">snsTopicStatus</a></code> | <code>java.lang.String</code> | The status of the Amazon SNS notification topic. Notifications are sent only if the status is enabled. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.subnetGroupName">subnetGroupName</a></code> | <code>java.lang.String</code> | The name of the subnet group to be used for the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>></code> | An array of key-value pairs to apply to this cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.tlsEnabled">tlsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A flag that enables in-transit encryption when set to true. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `aclName`<sup>Required</sup> <a name="aclName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.aclName"></a>

- *Type:* java.lang.String

The name of the Access Control List to associate with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#acl_name MemorydbCluster#acl_name}

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

The name of the cluster. This value must be unique as it also serves as the cluster identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#cluster_name MemorydbCluster#cluster_name}

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.nodeType"></a>

- *Type:* java.lang.String

The compute and memory capacity of the nodes in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#node_type MemorydbCluster#node_type}

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.autoMinorVersionUpgrade"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A flag that enables automatic minor version upgrade when set to true.

You cannot modify the value of AutoMinorVersionUpgrade after the cluster is created. To enable AutoMinorVersionUpgrade on a cluster you must set AutoMinorVersionUpgrade to true when you create a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#auto_minor_version_upgrade MemorydbCluster#auto_minor_version_upgrade}

---

##### `clusterEndpoint`<sup>Optional</sup> <a name="clusterEndpoint" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.clusterEndpoint"></a>

- *Type:* <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a>

The cluster endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#cluster_endpoint MemorydbCluster#cluster_endpoint}

---

##### `dataTiering`<sup>Optional</sup> <a name="dataTiering" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.dataTiering"></a>

- *Type:* java.lang.String

Enables data tiering.

Data tiering is only supported for clusters using the r6gd node type. This parameter must be set when using r6gd nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#data_tiering MemorydbCluster#data_tiering}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#description MemorydbCluster#description}

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.engine"></a>

- *Type:* java.lang.String

The engine type used by the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#engine MemorydbCluster#engine}

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.engineVersion"></a>

- *Type:* java.lang.String

The Redis engine version used by the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#engine_version MemorydbCluster#engine_version}

---

##### `finalSnapshotName`<sup>Optional</sup> <a name="finalSnapshotName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.finalSnapshotName"></a>

- *Type:* java.lang.String

The user-supplied name of a final cluster snapshot.

This is the unique name that identifies the snapshot. MemoryDB creates the snapshot, and then deletes the cluster immediately afterward.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#final_snapshot_name MemorydbCluster#final_snapshot_name}

---

##### `ipDiscovery`<sup>Optional</sup> <a name="ipDiscovery" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.ipDiscovery"></a>

- *Type:* java.lang.String

For clusters wth dual stack NetworkType, IpDiscovery controls the Ip protocol (ipv4 or ipv6) returned by the engine commands such as `cluster info` and `cluster nodes` which are used by clients to connect to the nodes in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#ip_discovery MemorydbCluster#ip_discovery}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

The ID of the KMS key used to encrypt the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#kms_key_id MemorydbCluster#kms_key_id}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.maintenanceWindow"></a>

- *Type:* java.lang.String

Specifies the weekly time range during which maintenance on the cluster is performed.

It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#maintenance_window MemorydbCluster#maintenance_window}

---

##### `multiRegionClusterName`<sup>Optional</sup> <a name="multiRegionClusterName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.multiRegionClusterName"></a>

- *Type:* java.lang.String

The name of the Global Datastore, it is generated by MemoryDB adding a prefix to MultiRegionClusterNameSuffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#multi_region_cluster_name MemorydbCluster#multi_region_cluster_name}

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.networkType"></a>

- *Type:* java.lang.String

Must be either ipv4 | ipv6 | dual_stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#network_type MemorydbCluster#network_type}

---

##### `numReplicasPerShard`<sup>Optional</sup> <a name="numReplicasPerShard" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.numReplicasPerShard"></a>

- *Type:* java.lang.Number

The number of replicas to apply to each shard. The limit is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#num_replicas_per_shard MemorydbCluster#num_replicas_per_shard}

---

##### `numShards`<sup>Optional</sup> <a name="numShards" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.numShards"></a>

- *Type:* java.lang.Number

The number of shards the cluster will contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#num_shards MemorydbCluster#num_shards}

---

##### `parameterGroupName`<sup>Optional</sup> <a name="parameterGroupName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.parameterGroupName"></a>

- *Type:* java.lang.String

The name of the parameter group associated with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#parameter_group_name MemorydbCluster#parameter_group_name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

The port number on which each member of the cluster accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#port MemorydbCluster#port}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.securityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

One or more Amazon VPC security groups associated with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#security_group_ids MemorydbCluster#security_group_ids}

---

##### `snapshotArns`<sup>Optional</sup> <a name="snapshotArns" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.snapshotArns"></a>

- *Type:* java.util.List<java.lang.String>

A list of Amazon Resource Names (ARN) that uniquely identify the RDB snapshot files stored in Amazon S3.

The snapshot files are used to populate the new cluster. The Amazon S3 object name in the ARN cannot contain any commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#snapshot_arns MemorydbCluster#snapshot_arns}

---

##### `snapshotName`<sup>Optional</sup> <a name="snapshotName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.snapshotName"></a>

- *Type:* java.lang.String

The name of a snapshot from which to restore data into the new cluster.

The snapshot status changes to restoring while the new cluster is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#snapshot_name MemorydbCluster#snapshot_name}

---

##### `snapshotRetentionLimit`<sup>Optional</sup> <a name="snapshotRetentionLimit" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.snapshotRetentionLimit"></a>

- *Type:* java.lang.Number

The number of days for which MemoryDB retains automatic snapshots before deleting them.

For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#snapshot_retention_limit MemorydbCluster#snapshot_retention_limit}

---

##### `snapshotWindow`<sup>Optional</sup> <a name="snapshotWindow" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.snapshotWindow"></a>

- *Type:* java.lang.String

The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#snapshot_window MemorydbCluster#snapshot_window}

---

##### `snsTopicArn`<sup>Optional</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.snsTopicArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#sns_topic_arn MemorydbCluster#sns_topic_arn}

---

##### `snsTopicStatus`<sup>Optional</sup> <a name="snsTopicStatus" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.snsTopicStatus"></a>

- *Type:* java.lang.String

The status of the Amazon SNS notification topic. Notifications are sent only if the status is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#sns_topic_status MemorydbCluster#sns_topic_status}

---

##### `subnetGroupName`<sup>Optional</sup> <a name="subnetGroupName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.subnetGroupName"></a>

- *Type:* java.lang.String

The name of the subnet group to be used for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#subnet_group_name MemorydbCluster#subnet_group_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>>

An array of key-value pairs to apply to this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#tags MemorydbCluster#tags}

---

##### `tlsEnabled`<sup>Optional</sup> <a name="tlsEnabled" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.tlsEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A flag that enables in-transit encryption when set to true.

You cannot modify the value of TransitEncryptionEnabled after the cluster is created. To enable in-transit encryption on a cluster you must set TransitEncryptionEnabled to true when you create a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#tls_enabled MemorydbCluster#tls_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.putClusterEndpoint">putClusterEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetAutoMinorVersionUpgrade">resetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetClusterEndpoint">resetClusterEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetDataTiering">resetDataTiering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetFinalSnapshotName">resetFinalSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetIpDiscovery">resetIpDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetMultiRegionClusterName">resetMultiRegionClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetNumReplicasPerShard">resetNumReplicasPerShard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetNumShards">resetNumShards</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetParameterGroupName">resetParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotArns">resetSnapshotArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotName">resetSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotRetentionLimit">resetSnapshotRetentionLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotWindow">resetSnapshotWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnsTopicArn">resetSnsTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnsTopicStatus">resetSnsTopicStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSubnetGroupName">resetSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetTlsEnabled">resetTlsEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClusterEndpoint` <a name="putClusterEndpoint" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.putClusterEndpoint"></a>

```java
public void putClusterEndpoint(MemorydbClusterClusterEndpoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.putClusterEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<MemorydbClusterTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>>

---

##### `resetAutoMinorVersionUpgrade` <a name="resetAutoMinorVersionUpgrade" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetAutoMinorVersionUpgrade"></a>

```java
public void resetAutoMinorVersionUpgrade()
```

##### `resetClusterEndpoint` <a name="resetClusterEndpoint" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetClusterEndpoint"></a>

```java
public void resetClusterEndpoint()
```

##### `resetDataTiering` <a name="resetDataTiering" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetDataTiering"></a>

```java
public void resetDataTiering()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEngine` <a name="resetEngine" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetEngine"></a>

```java
public void resetEngine()
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetEngineVersion"></a>

```java
public void resetEngineVersion()
```

##### `resetFinalSnapshotName` <a name="resetFinalSnapshotName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetFinalSnapshotName"></a>

```java
public void resetFinalSnapshotName()
```

##### `resetIpDiscovery` <a name="resetIpDiscovery" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetIpDiscovery"></a>

```java
public void resetIpDiscovery()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetMaintenanceWindow"></a>

```java
public void resetMaintenanceWindow()
```

##### `resetMultiRegionClusterName` <a name="resetMultiRegionClusterName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetMultiRegionClusterName"></a>

```java
public void resetMultiRegionClusterName()
```

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetNetworkType"></a>

```java
public void resetNetworkType()
```

##### `resetNumReplicasPerShard` <a name="resetNumReplicasPerShard" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetNumReplicasPerShard"></a>

```java
public void resetNumReplicasPerShard()
```

##### `resetNumShards` <a name="resetNumShards" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetNumShards"></a>

```java
public void resetNumShards()
```

##### `resetParameterGroupName` <a name="resetParameterGroupName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetParameterGroupName"></a>

```java
public void resetParameterGroupName()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetPort"></a>

```java
public void resetPort()
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSnapshotArns` <a name="resetSnapshotArns" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotArns"></a>

```java
public void resetSnapshotArns()
```

##### `resetSnapshotName` <a name="resetSnapshotName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotName"></a>

```java
public void resetSnapshotName()
```

##### `resetSnapshotRetentionLimit` <a name="resetSnapshotRetentionLimit" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotRetentionLimit"></a>

```java
public void resetSnapshotRetentionLimit()
```

##### `resetSnapshotWindow` <a name="resetSnapshotWindow" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotWindow"></a>

```java
public void resetSnapshotWindow()
```

##### `resetSnsTopicArn` <a name="resetSnsTopicArn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnsTopicArn"></a>

```java
public void resetSnsTopicArn()
```

##### `resetSnsTopicStatus` <a name="resetSnsTopicStatus" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnsTopicStatus"></a>

```java
public void resetSnsTopicStatus()
```

##### `resetSubnetGroupName` <a name="resetSubnetGroupName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSubnetGroupName"></a>

```java
public void resetSubnetGroupName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetTlsEnabled` <a name="resetTlsEnabled" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetTlsEnabled"></a>

```java
public void resetTlsEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MemorydbCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isConstruct"></a>

```java
import io.cdktn.providers.awscc.memorydb_cluster.MemorydbCluster;

MemorydbCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.memorydb_cluster.MemorydbCluster;

MemorydbCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.memorydb_cluster.MemorydbCluster;

MemorydbCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.memorydb_cluster.MemorydbCluster;

MemorydbCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MemorydbCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MemorydbCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MemorydbCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MemorydbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MemorydbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterEndpoint">clusterEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference">MemorydbClusterClusterEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.parameterGroupStatus">parameterGroupStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList">MemorydbClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.aclNameInput">aclNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.autoMinorVersionUpgradeInput">autoMinorVersionUpgradeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterEndpointInput">clusterEndpointInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.dataTieringInput">dataTieringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engineInput">engineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engineVersionInput">engineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.finalSnapshotNameInput">finalSnapshotNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.ipDiscoveryInput">ipDiscoveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.multiRegionClusterNameInput">multiRegionClusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.networkTypeInput">networkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.nodeTypeInput">nodeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numReplicasPerShardInput">numReplicasPerShardInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numShardsInput">numShardsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.parameterGroupNameInput">parameterGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotArnsInput">snapshotArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotNameInput">snapshotNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotRetentionLimitInput">snapshotRetentionLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotWindowInput">snapshotWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicArnInput">snsTopicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicStatusInput">snsTopicStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.subnetGroupNameInput">subnetGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tlsEnabledInput">tlsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.aclName">aclName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.dataTiering">dataTiering</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engine">engine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.finalSnapshotName">finalSnapshotName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.ipDiscovery">ipDiscovery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.maintenanceWindow">maintenanceWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.multiRegionClusterName">multiRegionClusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.networkType">networkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numReplicasPerShard">numReplicasPerShard</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numShards">numShards</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.parameterGroupName">parameterGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotArns">snapshotArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotWindow">snapshotWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicStatus">snsTopicStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.subnetGroupName">subnetGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tlsEnabled">tlsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `clusterEndpoint`<sup>Required</sup> <a name="clusterEndpoint" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterEndpoint"></a>

```java
public MemorydbClusterClusterEndpointOutputReference getClusterEndpoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference">MemorydbClusterClusterEndpointOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `parameterGroupStatus`<sup>Required</sup> <a name="parameterGroupStatus" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.parameterGroupStatus"></a>

```java
public java.lang.String getParameterGroupStatus();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tags"></a>

```java
public MemorydbClusterTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList">MemorydbClusterTagsList</a>

---

##### `aclNameInput`<sup>Optional</sup> <a name="aclNameInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.aclNameInput"></a>

```java
public java.lang.String getAclNameInput();
```

- *Type:* java.lang.String

---

##### `autoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="autoMinorVersionUpgradeInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.autoMinorVersionUpgradeInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoMinorVersionUpgradeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `clusterEndpointInput`<sup>Optional</sup> <a name="clusterEndpointInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterEndpointInput"></a>

```java
public IResolvable|MemorydbClusterClusterEndpoint getClusterEndpointInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a>

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `dataTieringInput`<sup>Optional</sup> <a name="dataTieringInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.dataTieringInput"></a>

```java
public java.lang.String getDataTieringInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engineInput"></a>

```java
public java.lang.String getEngineInput();
```

- *Type:* java.lang.String

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engineVersionInput"></a>

```java
public java.lang.String getEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `finalSnapshotNameInput`<sup>Optional</sup> <a name="finalSnapshotNameInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.finalSnapshotNameInput"></a>

```java
public java.lang.String getFinalSnapshotNameInput();
```

- *Type:* java.lang.String

---

##### `ipDiscoveryInput`<sup>Optional</sup> <a name="ipDiscoveryInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.ipDiscoveryInput"></a>

```java
public java.lang.String getIpDiscoveryInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.maintenanceWindowInput"></a>

```java
public java.lang.String getMaintenanceWindowInput();
```

- *Type:* java.lang.String

---

##### `multiRegionClusterNameInput`<sup>Optional</sup> <a name="multiRegionClusterNameInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.multiRegionClusterNameInput"></a>

```java
public java.lang.String getMultiRegionClusterNameInput();
```

- *Type:* java.lang.String

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.networkTypeInput"></a>

```java
public java.lang.String getNetworkTypeInput();
```

- *Type:* java.lang.String

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.nodeTypeInput"></a>

```java
public java.lang.String getNodeTypeInput();
```

- *Type:* java.lang.String

---

##### `numReplicasPerShardInput`<sup>Optional</sup> <a name="numReplicasPerShardInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numReplicasPerShardInput"></a>

```java
public java.lang.Number getNumReplicasPerShardInput();
```

- *Type:* java.lang.Number

---

##### `numShardsInput`<sup>Optional</sup> <a name="numShardsInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numShardsInput"></a>

```java
public java.lang.Number getNumShardsInput();
```

- *Type:* java.lang.Number

---

##### `parameterGroupNameInput`<sup>Optional</sup> <a name="parameterGroupNameInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.parameterGroupNameInput"></a>

```java
public java.lang.String getParameterGroupNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snapshotArnsInput`<sup>Optional</sup> <a name="snapshotArnsInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotArnsInput"></a>

```java
public java.util.List<java.lang.String> getSnapshotArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snapshotNameInput`<sup>Optional</sup> <a name="snapshotNameInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotNameInput"></a>

```java
public java.lang.String getSnapshotNameInput();
```

- *Type:* java.lang.String

---

##### `snapshotRetentionLimitInput`<sup>Optional</sup> <a name="snapshotRetentionLimitInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotRetentionLimitInput"></a>

```java
public java.lang.Number getSnapshotRetentionLimitInput();
```

- *Type:* java.lang.Number

---

##### `snapshotWindowInput`<sup>Optional</sup> <a name="snapshotWindowInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotWindowInput"></a>

```java
public java.lang.String getSnapshotWindowInput();
```

- *Type:* java.lang.String

---

##### `snsTopicArnInput`<sup>Optional</sup> <a name="snsTopicArnInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicArnInput"></a>

```java
public java.lang.String getSnsTopicArnInput();
```

- *Type:* java.lang.String

---

##### `snsTopicStatusInput`<sup>Optional</sup> <a name="snsTopicStatusInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicStatusInput"></a>

```java
public java.lang.String getSnsTopicStatusInput();
```

- *Type:* java.lang.String

---

##### `subnetGroupNameInput`<sup>Optional</sup> <a name="subnetGroupNameInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.subnetGroupNameInput"></a>

```java
public java.lang.String getSubnetGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tagsInput"></a>

```java
public IResolvable|java.util.List<MemorydbClusterTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>>

---

##### `tlsEnabledInput`<sup>Optional</sup> <a name="tlsEnabledInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tlsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getTlsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `aclName`<sup>Required</sup> <a name="aclName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.aclName"></a>

```java
public java.lang.String getAclName();
```

- *Type:* java.lang.String

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.autoMinorVersionUpgrade"></a>

```java
public java.lang.Boolean|IResolvable getAutoMinorVersionUpgrade();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `dataTiering`<sup>Required</sup> <a name="dataTiering" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.dataTiering"></a>

```java
public java.lang.String getDataTiering();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `finalSnapshotName`<sup>Required</sup> <a name="finalSnapshotName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.finalSnapshotName"></a>

```java
public java.lang.String getFinalSnapshotName();
```

- *Type:* java.lang.String

---

##### `ipDiscovery`<sup>Required</sup> <a name="ipDiscovery" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.ipDiscovery"></a>

```java
public java.lang.String getIpDiscovery();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.maintenanceWindow"></a>

```java
public java.lang.String getMaintenanceWindow();
```

- *Type:* java.lang.String

---

##### `multiRegionClusterName`<sup>Required</sup> <a name="multiRegionClusterName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.multiRegionClusterName"></a>

```java
public java.lang.String getMultiRegionClusterName();
```

- *Type:* java.lang.String

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

---

##### `numReplicasPerShard`<sup>Required</sup> <a name="numReplicasPerShard" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numReplicasPerShard"></a>

```java
public java.lang.Number getNumReplicasPerShard();
```

- *Type:* java.lang.Number

---

##### `numShards`<sup>Required</sup> <a name="numShards" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numShards"></a>

```java
public java.lang.Number getNumShards();
```

- *Type:* java.lang.Number

---

##### `parameterGroupName`<sup>Required</sup> <a name="parameterGroupName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.parameterGroupName"></a>

```java
public java.lang.String getParameterGroupName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snapshotArns`<sup>Required</sup> <a name="snapshotArns" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotArns"></a>

```java
public java.util.List<java.lang.String> getSnapshotArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotName"></a>

```java
public java.lang.String getSnapshotName();
```

- *Type:* java.lang.String

---

##### `snapshotRetentionLimit`<sup>Required</sup> <a name="snapshotRetentionLimit" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotRetentionLimit"></a>

```java
public java.lang.Number getSnapshotRetentionLimit();
```

- *Type:* java.lang.Number

---

##### `snapshotWindow`<sup>Required</sup> <a name="snapshotWindow" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotWindow"></a>

```java
public java.lang.String getSnapshotWindow();
```

- *Type:* java.lang.String

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicArn"></a>

```java
public java.lang.String getSnsTopicArn();
```

- *Type:* java.lang.String

---

##### `snsTopicStatus`<sup>Required</sup> <a name="snsTopicStatus" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicStatus"></a>

```java
public java.lang.String getSnsTopicStatus();
```

- *Type:* java.lang.String

---

##### `subnetGroupName`<sup>Required</sup> <a name="subnetGroupName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.subnetGroupName"></a>

```java
public java.lang.String getSubnetGroupName();
```

- *Type:* java.lang.String

---

##### `tlsEnabled`<sup>Required</sup> <a name="tlsEnabled" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tlsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getTlsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MemorydbClusterClusterEndpoint <a name="MemorydbClusterClusterEndpoint" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.memorydb_cluster.MemorydbClusterClusterEndpoint;

MemorydbClusterClusterEndpoint.builder()
    .build();
```


### MemorydbClusterConfig <a name="MemorydbClusterConfig" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.memorydb_cluster.MemorydbClusterConfig;

MemorydbClusterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .aclName(java.lang.String)
    .clusterName(java.lang.String)
    .nodeType(java.lang.String)
//  .autoMinorVersionUpgrade(java.lang.Boolean|IResolvable)
//  .clusterEndpoint(MemorydbClusterClusterEndpoint)
//  .dataTiering(java.lang.String)
//  .description(java.lang.String)
//  .engine(java.lang.String)
//  .engineVersion(java.lang.String)
//  .finalSnapshotName(java.lang.String)
//  .ipDiscovery(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .maintenanceWindow(java.lang.String)
//  .multiRegionClusterName(java.lang.String)
//  .networkType(java.lang.String)
//  .numReplicasPerShard(java.lang.Number)
//  .numShards(java.lang.Number)
//  .parameterGroupName(java.lang.String)
//  .port(java.lang.Number)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .snapshotArns(java.util.List<java.lang.String>)
//  .snapshotName(java.lang.String)
//  .snapshotRetentionLimit(java.lang.Number)
//  .snapshotWindow(java.lang.String)
//  .snsTopicArn(java.lang.String)
//  .snsTopicStatus(java.lang.String)
//  .subnetGroupName(java.lang.String)
//  .tags(IResolvable|java.util.List<MemorydbClusterTags>)
//  .tlsEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.aclName">aclName</a></code> | <code>java.lang.String</code> | The name of the Access Control List to associate with the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | The name of the cluster. This value must be unique as it also serves as the cluster identifier. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | The compute and memory capacity of the nodes in the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A flag that enables automatic minor version upgrade when set to true. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.clusterEndpoint">clusterEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a></code> | The cluster endpoint. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.dataTiering">dataTiering</a></code> | <code>java.lang.String</code> | Enables data tiering. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.engine">engine</a></code> | <code>java.lang.String</code> | The engine type used by the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | The Redis engine version used by the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.finalSnapshotName">finalSnapshotName</a></code> | <code>java.lang.String</code> | The user-supplied name of a final cluster snapshot. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.ipDiscovery">ipDiscovery</a></code> | <code>java.lang.String</code> | For clusters wth dual stack NetworkType, IpDiscovery controls the Ip protocol (ipv4 or ipv6) returned by the engine commands such as `cluster info` and `cluster nodes` which are used by clients to connect to the nodes in the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The ID of the KMS key used to encrypt the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code>java.lang.String</code> | Specifies the weekly time range during which maintenance on the cluster is performed. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.multiRegionClusterName">multiRegionClusterName</a></code> | <code>java.lang.String</code> | The name of the Global Datastore, it is generated by MemoryDB adding a prefix to MultiRegionClusterNameSuffix. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.networkType">networkType</a></code> | <code>java.lang.String</code> | Must be either ipv4 \| ipv6 \| dual_stack. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.numReplicasPerShard">numReplicasPerShard</a></code> | <code>java.lang.Number</code> | The number of replicas to apply to each shard. The limit is 5. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.numShards">numShards</a></code> | <code>java.lang.Number</code> | The number of shards the cluster will contain. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.parameterGroupName">parameterGroupName</a></code> | <code>java.lang.String</code> | The name of the parameter group associated with the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.port">port</a></code> | <code>java.lang.Number</code> | The port number on which each member of the cluster accepts connections. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | One or more Amazon VPC security groups associated with this cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotArns">snapshotArns</a></code> | <code>java.util.List<java.lang.String></code> | A list of Amazon Resource Names (ARN) that uniquely identify the RDB snapshot files stored in Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | The name of a snapshot from which to restore data into the new cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | <code>java.lang.Number</code> | The number of days for which MemoryDB retains automatic snapshots before deleting them. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotWindow">snapshotWindow</a></code> | <code>java.lang.String</code> | The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snsTopicStatus">snsTopicStatus</a></code> | <code>java.lang.String</code> | The status of the Amazon SNS notification topic. Notifications are sent only if the status is enabled. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.subnetGroupName">subnetGroupName</a></code> | <code>java.lang.String</code> | The name of the subnet group to be used for the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>></code> | An array of key-value pairs to apply to this cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.tlsEnabled">tlsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A flag that enables in-transit encryption when set to true. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `aclName`<sup>Required</sup> <a name="aclName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.aclName"></a>

```java
public java.lang.String getAclName();
```

- *Type:* java.lang.String

The name of the Access Control List to associate with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#acl_name MemorydbCluster#acl_name}

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

The name of the cluster. This value must be unique as it also serves as the cluster identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#cluster_name MemorydbCluster#cluster_name}

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

The compute and memory capacity of the nodes in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#node_type MemorydbCluster#node_type}

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.autoMinorVersionUpgrade"></a>

```java
public java.lang.Boolean|IResolvable getAutoMinorVersionUpgrade();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A flag that enables automatic minor version upgrade when set to true.

You cannot modify the value of AutoMinorVersionUpgrade after the cluster is created. To enable AutoMinorVersionUpgrade on a cluster you must set AutoMinorVersionUpgrade to true when you create a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#auto_minor_version_upgrade MemorydbCluster#auto_minor_version_upgrade}

---

##### `clusterEndpoint`<sup>Optional</sup> <a name="clusterEndpoint" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.clusterEndpoint"></a>

```java
public MemorydbClusterClusterEndpoint getClusterEndpoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a>

The cluster endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#cluster_endpoint MemorydbCluster#cluster_endpoint}

---

##### `dataTiering`<sup>Optional</sup> <a name="dataTiering" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.dataTiering"></a>

```java
public java.lang.String getDataTiering();
```

- *Type:* java.lang.String

Enables data tiering.

Data tiering is only supported for clusters using the r6gd node type. This parameter must be set when using r6gd nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#data_tiering MemorydbCluster#data_tiering}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#description MemorydbCluster#description}

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

The engine type used by the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#engine MemorydbCluster#engine}

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

The Redis engine version used by the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#engine_version MemorydbCluster#engine_version}

---

##### `finalSnapshotName`<sup>Optional</sup> <a name="finalSnapshotName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.finalSnapshotName"></a>

```java
public java.lang.String getFinalSnapshotName();
```

- *Type:* java.lang.String

The user-supplied name of a final cluster snapshot.

This is the unique name that identifies the snapshot. MemoryDB creates the snapshot, and then deletes the cluster immediately afterward.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#final_snapshot_name MemorydbCluster#final_snapshot_name}

---

##### `ipDiscovery`<sup>Optional</sup> <a name="ipDiscovery" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.ipDiscovery"></a>

```java
public java.lang.String getIpDiscovery();
```

- *Type:* java.lang.String

For clusters wth dual stack NetworkType, IpDiscovery controls the Ip protocol (ipv4 or ipv6) returned by the engine commands such as `cluster info` and `cluster nodes` which are used by clients to connect to the nodes in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#ip_discovery MemorydbCluster#ip_discovery}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The ID of the KMS key used to encrypt the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#kms_key_id MemorydbCluster#kms_key_id}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.maintenanceWindow"></a>

```java
public java.lang.String getMaintenanceWindow();
```

- *Type:* java.lang.String

Specifies the weekly time range during which maintenance on the cluster is performed.

It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#maintenance_window MemorydbCluster#maintenance_window}

---

##### `multiRegionClusterName`<sup>Optional</sup> <a name="multiRegionClusterName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.multiRegionClusterName"></a>

```java
public java.lang.String getMultiRegionClusterName();
```

- *Type:* java.lang.String

The name of the Global Datastore, it is generated by MemoryDB adding a prefix to MultiRegionClusterNameSuffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#multi_region_cluster_name MemorydbCluster#multi_region_cluster_name}

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

Must be either ipv4 | ipv6 | dual_stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#network_type MemorydbCluster#network_type}

---

##### `numReplicasPerShard`<sup>Optional</sup> <a name="numReplicasPerShard" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.numReplicasPerShard"></a>

```java
public java.lang.Number getNumReplicasPerShard();
```

- *Type:* java.lang.Number

The number of replicas to apply to each shard. The limit is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#num_replicas_per_shard MemorydbCluster#num_replicas_per_shard}

---

##### `numShards`<sup>Optional</sup> <a name="numShards" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.numShards"></a>

```java
public java.lang.Number getNumShards();
```

- *Type:* java.lang.Number

The number of shards the cluster will contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#num_shards MemorydbCluster#num_shards}

---

##### `parameterGroupName`<sup>Optional</sup> <a name="parameterGroupName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.parameterGroupName"></a>

```java
public java.lang.String getParameterGroupName();
```

- *Type:* java.lang.String

The name of the parameter group associated with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#parameter_group_name MemorydbCluster#parameter_group_name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port number on which each member of the cluster accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#port MemorydbCluster#port}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

One or more Amazon VPC security groups associated with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#security_group_ids MemorydbCluster#security_group_ids}

---

##### `snapshotArns`<sup>Optional</sup> <a name="snapshotArns" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotArns"></a>

```java
public java.util.List<java.lang.String> getSnapshotArns();
```

- *Type:* java.util.List<java.lang.String>

A list of Amazon Resource Names (ARN) that uniquely identify the RDB snapshot files stored in Amazon S3.

The snapshot files are used to populate the new cluster. The Amazon S3 object name in the ARN cannot contain any commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#snapshot_arns MemorydbCluster#snapshot_arns}

---

##### `snapshotName`<sup>Optional</sup> <a name="snapshotName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotName"></a>

```java
public java.lang.String getSnapshotName();
```

- *Type:* java.lang.String

The name of a snapshot from which to restore data into the new cluster.

The snapshot status changes to restoring while the new cluster is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#snapshot_name MemorydbCluster#snapshot_name}

---

##### `snapshotRetentionLimit`<sup>Optional</sup> <a name="snapshotRetentionLimit" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotRetentionLimit"></a>

```java
public java.lang.Number getSnapshotRetentionLimit();
```

- *Type:* java.lang.Number

The number of days for which MemoryDB retains automatic snapshots before deleting them.

For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#snapshot_retention_limit MemorydbCluster#snapshot_retention_limit}

---

##### `snapshotWindow`<sup>Optional</sup> <a name="snapshotWindow" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotWindow"></a>

```java
public java.lang.String getSnapshotWindow();
```

- *Type:* java.lang.String

The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#snapshot_window MemorydbCluster#snapshot_window}

---

##### `snsTopicArn`<sup>Optional</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snsTopicArn"></a>

```java
public java.lang.String getSnsTopicArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#sns_topic_arn MemorydbCluster#sns_topic_arn}

---

##### `snsTopicStatus`<sup>Optional</sup> <a name="snsTopicStatus" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snsTopicStatus"></a>

```java
public java.lang.String getSnsTopicStatus();
```

- *Type:* java.lang.String

The status of the Amazon SNS notification topic. Notifications are sent only if the status is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#sns_topic_status MemorydbCluster#sns_topic_status}

---

##### `subnetGroupName`<sup>Optional</sup> <a name="subnetGroupName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.subnetGroupName"></a>

```java
public java.lang.String getSubnetGroupName();
```

- *Type:* java.lang.String

The name of the subnet group to be used for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#subnet_group_name MemorydbCluster#subnet_group_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.tags"></a>

```java
public IResolvable|java.util.List<MemorydbClusterTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>>

An array of key-value pairs to apply to this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#tags MemorydbCluster#tags}

---

##### `tlsEnabled`<sup>Optional</sup> <a name="tlsEnabled" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.tlsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getTlsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A flag that enables in-transit encryption when set to true.

You cannot modify the value of TransitEncryptionEnabled after the cluster is created. To enable in-transit encryption on a cluster you must set TransitEncryptionEnabled to true when you create a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#tls_enabled MemorydbCluster#tls_enabled}

---

### MemorydbClusterTags <a name="MemorydbClusterTags" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.memorydb_cluster.MemorydbClusterTags;

MemorydbClusterTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags.property.key">key</a></code> | <code>java.lang.String</code> | The key for the tag. May not be null. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag's value. May be null. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key for the tag. May not be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#key MemorydbCluster#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag's value. May be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#value MemorydbCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### MemorydbClusterClusterEndpointOutputReference <a name="MemorydbClusterClusterEndpointOutputReference" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.memorydb_cluster.MemorydbClusterClusterEndpointOutputReference;

new MemorydbClusterClusterEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.internalValue"></a>

```java
public IResolvable|MemorydbClusterClusterEndpoint getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a>

---


### MemorydbClusterTagsList <a name="MemorydbClusterTagsList" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.memorydb_cluster.MemorydbClusterTagsList;

new MemorydbClusterTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.get"></a>

```java
public MemorydbClusterTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MemorydbClusterTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>>

---


### MemorydbClusterTagsOutputReference <a name="MemorydbClusterTagsOutputReference" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.memorydb_cluster.MemorydbClusterTagsOutputReference;

new MemorydbClusterTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|MemorydbClusterTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>

---



