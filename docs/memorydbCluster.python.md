# `memorydbCluster` Submodule <a name="`memorydbCluster` Submodule" id="@cdktn/provider-awscc.memorydbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MemorydbCluster <a name="MemorydbCluster" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster awscc_memorydb_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer"></a>

```python
from cdktn_provider_awscc import memorydb_cluster

memorydbCluster.MemorydbCluster(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  acl_name: str,
  cluster_name: str,
  node_type: str,
  auto_minor_version_upgrade: bool | IResolvable = None,
  cluster_endpoint: MemorydbClusterClusterEndpoint = None,
  data_tiering: str = None,
  description: str = None,
  engine: str = None,
  engine_version: str = None,
  final_snapshot_name: str = None,
  ip_discovery: str = None,
  kms_key_id: str = None,
  maintenance_window: str = None,
  multi_region_cluster_name: str = None,
  network_type: str = None,
  num_replicas_per_shard: typing.Union[int, float] = None,
  num_shards: typing.Union[int, float] = None,
  parameter_group_name: str = None,
  port: typing.Union[int, float] = None,
  security_group_ids: typing.List[str] = None,
  snapshot_arns: typing.List[str] = None,
  snapshot_name: str = None,
  snapshot_retention_limit: typing.Union[int, float] = None,
  snapshot_window: str = None,
  sns_topic_arn: str = None,
  sns_topic_status: str = None,
  subnet_group_name: str = None,
  tags: IResolvable | typing.List[MemorydbClusterTags] = None,
  tls_enabled: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.aclName">acl_name</a></code> | <code>str</code> | The name of the Access Control List to associate with the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | The name of the cluster. This value must be unique as it also serves as the cluster identifier. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.nodeType">node_type</a></code> | <code>str</code> | The compute and memory capacity of the nodes in the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>bool \| cdktn.IResolvable</code> | A flag that enables automatic minor version upgrade when set to true. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.clusterEndpoint">cluster_endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a></code> | The cluster endpoint. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.dataTiering">data_tiering</a></code> | <code>str</code> | Enables data tiering. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.engine">engine</a></code> | <code>str</code> | The engine type used by the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.engineVersion">engine_version</a></code> | <code>str</code> | The Redis engine version used by the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.finalSnapshotName">final_snapshot_name</a></code> | <code>str</code> | The user-supplied name of a final cluster snapshot. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.ipDiscovery">ip_discovery</a></code> | <code>str</code> | For clusters wth dual stack NetworkType, IpDiscovery controls the Ip protocol (ipv4 or ipv6) returned by the engine commands such as `cluster info` and `cluster nodes` which are used by clients to connect to the nodes in the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The ID of the KMS key used to encrypt the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.maintenanceWindow">maintenance_window</a></code> | <code>str</code> | Specifies the weekly time range during which maintenance on the cluster is performed. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.multiRegionClusterName">multi_region_cluster_name</a></code> | <code>str</code> | The name of the Global Datastore, it is generated by MemoryDB adding a prefix to MultiRegionClusterNameSuffix. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.networkType">network_type</a></code> | <code>str</code> | Must be either ipv4 \| ipv6 \| dual_stack. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.numReplicasPerShard">num_replicas_per_shard</a></code> | <code>typing.Union[int, float]</code> | The number of replicas to apply to each shard. The limit is 5. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.numShards">num_shards</a></code> | <code>typing.Union[int, float]</code> | The number of shards the cluster will contain. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.parameterGroupName">parameter_group_name</a></code> | <code>str</code> | The name of the parameter group associated with the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | The port number on which each member of the cluster accepts connections. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | One or more Amazon VPC security groups associated with this cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.snapshotArns">snapshot_arns</a></code> | <code>typing.List[str]</code> | A list of Amazon Resource Names (ARN) that uniquely identify the RDB snapshot files stored in Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.snapshotName">snapshot_name</a></code> | <code>str</code> | The name of a snapshot from which to restore data into the new cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.snapshotRetentionLimit">snapshot_retention_limit</a></code> | <code>typing.Union[int, float]</code> | The number of days for which MemoryDB retains automatic snapshots before deleting them. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.snapshotWindow">snapshot_window</a></code> | <code>str</code> | The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.snsTopicStatus">sns_topic_status</a></code> | <code>str</code> | The status of the Amazon SNS notification topic. Notifications are sent only if the status is enabled. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.subnetGroupName">subnet_group_name</a></code> | <code>str</code> | The name of the subnet group to be used for the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>]</code> | An array of key-value pairs to apply to this cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.tlsEnabled">tls_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | A flag that enables in-transit encryption when set to true. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `acl_name`<sup>Required</sup> <a name="acl_name" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.aclName"></a>

- *Type:* str

The name of the Access Control List to associate with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#acl_name MemorydbCluster#acl_name}

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.clusterName"></a>

- *Type:* str

The name of the cluster. This value must be unique as it also serves as the cluster identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#cluster_name MemorydbCluster#cluster_name}

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.nodeType"></a>

- *Type:* str

The compute and memory capacity of the nodes in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#node_type MemorydbCluster#node_type}

---

##### `auto_minor_version_upgrade`<sup>Optional</sup> <a name="auto_minor_version_upgrade" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.autoMinorVersionUpgrade"></a>

- *Type:* bool | cdktn.IResolvable

A flag that enables automatic minor version upgrade when set to true.

You cannot modify the value of AutoMinorVersionUpgrade after the cluster is created. To enable AutoMinorVersionUpgrade on a cluster you must set AutoMinorVersionUpgrade to true when you create a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#auto_minor_version_upgrade MemorydbCluster#auto_minor_version_upgrade}

---

##### `cluster_endpoint`<sup>Optional</sup> <a name="cluster_endpoint" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.clusterEndpoint"></a>

- *Type:* <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a>

The cluster endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#cluster_endpoint MemorydbCluster#cluster_endpoint}

---

##### `data_tiering`<sup>Optional</sup> <a name="data_tiering" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.dataTiering"></a>

- *Type:* str

Enables data tiering.

Data tiering is only supported for clusters using the r6gd node type. This parameter must be set when using r6gd nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#data_tiering MemorydbCluster#data_tiering}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.description"></a>

- *Type:* str

An optional description of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#description MemorydbCluster#description}

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.engine"></a>

- *Type:* str

The engine type used by the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#engine MemorydbCluster#engine}

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.engineVersion"></a>

- *Type:* str

The Redis engine version used by the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#engine_version MemorydbCluster#engine_version}

---

##### `final_snapshot_name`<sup>Optional</sup> <a name="final_snapshot_name" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.finalSnapshotName"></a>

- *Type:* str

The user-supplied name of a final cluster snapshot.

This is the unique name that identifies the snapshot. MemoryDB creates the snapshot, and then deletes the cluster immediately afterward.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#final_snapshot_name MemorydbCluster#final_snapshot_name}

---

##### `ip_discovery`<sup>Optional</sup> <a name="ip_discovery" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.ipDiscovery"></a>

- *Type:* str

For clusters wth dual stack NetworkType, IpDiscovery controls the Ip protocol (ipv4 or ipv6) returned by the engine commands such as `cluster info` and `cluster nodes` which are used by clients to connect to the nodes in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#ip_discovery MemorydbCluster#ip_discovery}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

The ID of the KMS key used to encrypt the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#kms_key_id MemorydbCluster#kms_key_id}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.maintenanceWindow"></a>

- *Type:* str

Specifies the weekly time range during which maintenance on the cluster is performed.

It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#maintenance_window MemorydbCluster#maintenance_window}

---

##### `multi_region_cluster_name`<sup>Optional</sup> <a name="multi_region_cluster_name" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.multiRegionClusterName"></a>

- *Type:* str

The name of the Global Datastore, it is generated by MemoryDB adding a prefix to MultiRegionClusterNameSuffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#multi_region_cluster_name MemorydbCluster#multi_region_cluster_name}

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.networkType"></a>

- *Type:* str

Must be either ipv4 | ipv6 | dual_stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#network_type MemorydbCluster#network_type}

---

##### `num_replicas_per_shard`<sup>Optional</sup> <a name="num_replicas_per_shard" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.numReplicasPerShard"></a>

- *Type:* typing.Union[int, float]

The number of replicas to apply to each shard. The limit is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#num_replicas_per_shard MemorydbCluster#num_replicas_per_shard}

---

##### `num_shards`<sup>Optional</sup> <a name="num_shards" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.numShards"></a>

- *Type:* typing.Union[int, float]

The number of shards the cluster will contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#num_shards MemorydbCluster#num_shards}

---

##### `parameter_group_name`<sup>Optional</sup> <a name="parameter_group_name" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.parameterGroupName"></a>

- *Type:* str

The name of the parameter group associated with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#parameter_group_name MemorydbCluster#parameter_group_name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

The port number on which each member of the cluster accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#port MemorydbCluster#port}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

One or more Amazon VPC security groups associated with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#security_group_ids MemorydbCluster#security_group_ids}

---

##### `snapshot_arns`<sup>Optional</sup> <a name="snapshot_arns" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.snapshotArns"></a>

- *Type:* typing.List[str]

A list of Amazon Resource Names (ARN) that uniquely identify the RDB snapshot files stored in Amazon S3.

The snapshot files are used to populate the new cluster. The Amazon S3 object name in the ARN cannot contain any commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#snapshot_arns MemorydbCluster#snapshot_arns}

---

##### `snapshot_name`<sup>Optional</sup> <a name="snapshot_name" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.snapshotName"></a>

- *Type:* str

The name of a snapshot from which to restore data into the new cluster.

The snapshot status changes to restoring while the new cluster is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#snapshot_name MemorydbCluster#snapshot_name}

---

##### `snapshot_retention_limit`<sup>Optional</sup> <a name="snapshot_retention_limit" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.snapshotRetentionLimit"></a>

- *Type:* typing.Union[int, float]

The number of days for which MemoryDB retains automatic snapshots before deleting them.

For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#snapshot_retention_limit MemorydbCluster#snapshot_retention_limit}

---

##### `snapshot_window`<sup>Optional</sup> <a name="snapshot_window" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.snapshotWindow"></a>

- *Type:* str

The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#snapshot_window MemorydbCluster#snapshot_window}

---

##### `sns_topic_arn`<sup>Optional</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.snsTopicArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#sns_topic_arn MemorydbCluster#sns_topic_arn}

---

##### `sns_topic_status`<sup>Optional</sup> <a name="sns_topic_status" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.snsTopicStatus"></a>

- *Type:* str

The status of the Amazon SNS notification topic. Notifications are sent only if the status is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#sns_topic_status MemorydbCluster#sns_topic_status}

---

##### `subnet_group_name`<sup>Optional</sup> <a name="subnet_group_name" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.subnetGroupName"></a>

- *Type:* str

The name of the subnet group to be used for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#subnet_group_name MemorydbCluster#subnet_group_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>]

An array of key-value pairs to apply to this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#tags MemorydbCluster#tags}

---

##### `tls_enabled`<sup>Optional</sup> <a name="tls_enabled" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.Initializer.parameter.tlsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

A flag that enables in-transit encryption when set to true.

You cannot modify the value of TransitEncryptionEnabled after the cluster is created. To enable in-transit encryption on a cluster you must set TransitEncryptionEnabled to true when you create a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#tls_enabled MemorydbCluster#tls_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.putClusterEndpoint">put_cluster_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetAutoMinorVersionUpgrade">reset_auto_minor_version_upgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetClusterEndpoint">reset_cluster_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetDataTiering">reset_data_tiering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetEngine">reset_engine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetEngineVersion">reset_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetFinalSnapshotName">reset_final_snapshot_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetIpDiscovery">reset_ip_discovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetMultiRegionClusterName">reset_multi_region_cluster_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetNetworkType">reset_network_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetNumReplicasPerShard">reset_num_replicas_per_shard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetNumShards">reset_num_shards</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetParameterGroupName">reset_parameter_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotArns">reset_snapshot_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotName">reset_snapshot_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotRetentionLimit">reset_snapshot_retention_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotWindow">reset_snapshot_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnsTopicArn">reset_sns_topic_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnsTopicStatus">reset_sns_topic_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSubnetGroupName">reset_subnet_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetTlsEnabled">reset_tls_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cluster_endpoint` <a name="put_cluster_endpoint" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.putClusterEndpoint"></a>

```python
def put_cluster_endpoint() -> None
```

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[MemorydbClusterTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>]

---

##### `reset_auto_minor_version_upgrade` <a name="reset_auto_minor_version_upgrade" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetAutoMinorVersionUpgrade"></a>

```python
def reset_auto_minor_version_upgrade() -> None
```

##### `reset_cluster_endpoint` <a name="reset_cluster_endpoint" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetClusterEndpoint"></a>

```python
def reset_cluster_endpoint() -> None
```

##### `reset_data_tiering` <a name="reset_data_tiering" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetDataTiering"></a>

```python
def reset_data_tiering() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_engine` <a name="reset_engine" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetEngine"></a>

```python
def reset_engine() -> None
```

##### `reset_engine_version` <a name="reset_engine_version" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetEngineVersion"></a>

```python
def reset_engine_version() -> None
```

##### `reset_final_snapshot_name` <a name="reset_final_snapshot_name" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetFinalSnapshotName"></a>

```python
def reset_final_snapshot_name() -> None
```

##### `reset_ip_discovery` <a name="reset_ip_discovery" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetIpDiscovery"></a>

```python
def reset_ip_discovery() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_multi_region_cluster_name` <a name="reset_multi_region_cluster_name" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetMultiRegionClusterName"></a>

```python
def reset_multi_region_cluster_name() -> None
```

##### `reset_network_type` <a name="reset_network_type" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetNetworkType"></a>

```python
def reset_network_type() -> None
```

##### `reset_num_replicas_per_shard` <a name="reset_num_replicas_per_shard" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetNumReplicasPerShard"></a>

```python
def reset_num_replicas_per_shard() -> None
```

##### `reset_num_shards` <a name="reset_num_shards" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetNumShards"></a>

```python
def reset_num_shards() -> None
```

##### `reset_parameter_group_name` <a name="reset_parameter_group_name" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetParameterGroupName"></a>

```python
def reset_parameter_group_name() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_snapshot_arns` <a name="reset_snapshot_arns" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotArns"></a>

```python
def reset_snapshot_arns() -> None
```

##### `reset_snapshot_name` <a name="reset_snapshot_name" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotName"></a>

```python
def reset_snapshot_name() -> None
```

##### `reset_snapshot_retention_limit` <a name="reset_snapshot_retention_limit" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotRetentionLimit"></a>

```python
def reset_snapshot_retention_limit() -> None
```

##### `reset_snapshot_window` <a name="reset_snapshot_window" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnapshotWindow"></a>

```python
def reset_snapshot_window() -> None
```

##### `reset_sns_topic_arn` <a name="reset_sns_topic_arn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnsTopicArn"></a>

```python
def reset_sns_topic_arn() -> None
```

##### `reset_sns_topic_status` <a name="reset_sns_topic_status" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSnsTopicStatus"></a>

```python
def reset_sns_topic_status() -> None
```

##### `reset_subnet_group_name` <a name="reset_subnet_group_name" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetSubnetGroupName"></a>

```python
def reset_subnet_group_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tls_enabled` <a name="reset_tls_enabled" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.resetTlsEnabled"></a>

```python
def reset_tls_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MemorydbCluster resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isConstruct"></a>

```python
from cdktn_provider_awscc import memorydb_cluster

memorydbCluster.MemorydbCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isTerraformElement"></a>

```python
from cdktn_provider_awscc import memorydb_cluster

memorydbCluster.MemorydbCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isTerraformResource"></a>

```python
from cdktn_provider_awscc import memorydb_cluster

memorydbCluster.MemorydbCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import memorydb_cluster

memorydbCluster.MemorydbCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MemorydbCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MemorydbCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MemorydbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MemorydbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterEndpoint">cluster_endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference">MemorydbClusterClusterEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.parameterGroupStatus">parameter_group_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList">MemorydbClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.aclNameInput">acl_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.autoMinorVersionUpgradeInput">auto_minor_version_upgrade_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterEndpointInput">cluster_endpoint_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.dataTieringInput">data_tiering_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engineVersionInput">engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.finalSnapshotNameInput">final_snapshot_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.ipDiscoveryInput">ip_discovery_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.multiRegionClusterNameInput">multi_region_cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.networkTypeInput">network_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.nodeTypeInput">node_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numReplicasPerShardInput">num_replicas_per_shard_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numShardsInput">num_shards_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.parameterGroupNameInput">parameter_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotArnsInput">snapshot_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotNameInput">snapshot_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotRetentionLimitInput">snapshot_retention_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotWindowInput">snapshot_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicArnInput">sns_topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicStatusInput">sns_topic_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.subnetGroupNameInput">subnet_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tlsEnabledInput">tls_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.aclName">acl_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.dataTiering">data_tiering</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.finalSnapshotName">final_snapshot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.ipDiscovery">ip_discovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.maintenanceWindow">maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.multiRegionClusterName">multi_region_cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numReplicasPerShard">num_replicas_per_shard</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numShards">num_shards</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.parameterGroupName">parameter_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotArns">snapshot_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotName">snapshot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotRetentionLimit">snapshot_retention_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotWindow">snapshot_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicStatus">sns_topic_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.subnetGroupName">subnet_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tlsEnabled">tls_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cluster_endpoint`<sup>Required</sup> <a name="cluster_endpoint" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterEndpoint"></a>

```python
cluster_endpoint: MemorydbClusterClusterEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference">MemorydbClusterClusterEndpointOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parameter_group_status`<sup>Required</sup> <a name="parameter_group_status" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.parameterGroupStatus"></a>

```python
parameter_group_status: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tags"></a>

```python
tags: MemorydbClusterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList">MemorydbClusterTagsList</a>

---

##### `acl_name_input`<sup>Optional</sup> <a name="acl_name_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.aclNameInput"></a>

```python
acl_name_input: str
```

- *Type:* str

---

##### `auto_minor_version_upgrade_input`<sup>Optional</sup> <a name="auto_minor_version_upgrade_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.autoMinorVersionUpgradeInput"></a>

```python
auto_minor_version_upgrade_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cluster_endpoint_input`<sup>Optional</sup> <a name="cluster_endpoint_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterEndpointInput"></a>

```python
cluster_endpoint_input: IResolvable | MemorydbClusterClusterEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a>

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `data_tiering_input`<sup>Optional</sup> <a name="data_tiering_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.dataTieringInput"></a>

```python
data_tiering_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engineVersionInput"></a>

```python
engine_version_input: str
```

- *Type:* str

---

##### `final_snapshot_name_input`<sup>Optional</sup> <a name="final_snapshot_name_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.finalSnapshotNameInput"></a>

```python
final_snapshot_name_input: str
```

- *Type:* str

---

##### `ip_discovery_input`<sup>Optional</sup> <a name="ip_discovery_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.ipDiscoveryInput"></a>

```python
ip_discovery_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: str
```

- *Type:* str

---

##### `multi_region_cluster_name_input`<sup>Optional</sup> <a name="multi_region_cluster_name_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.multiRegionClusterNameInput"></a>

```python
multi_region_cluster_name_input: str
```

- *Type:* str

---

##### `network_type_input`<sup>Optional</sup> <a name="network_type_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.networkTypeInput"></a>

```python
network_type_input: str
```

- *Type:* str

---

##### `node_type_input`<sup>Optional</sup> <a name="node_type_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.nodeTypeInput"></a>

```python
node_type_input: str
```

- *Type:* str

---

##### `num_replicas_per_shard_input`<sup>Optional</sup> <a name="num_replicas_per_shard_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numReplicasPerShardInput"></a>

```python
num_replicas_per_shard_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_shards_input`<sup>Optional</sup> <a name="num_shards_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numShardsInput"></a>

```python
num_shards_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parameter_group_name_input`<sup>Optional</sup> <a name="parameter_group_name_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.parameterGroupNameInput"></a>

```python
parameter_group_name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `snapshot_arns_input`<sup>Optional</sup> <a name="snapshot_arns_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotArnsInput"></a>

```python
snapshot_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `snapshot_name_input`<sup>Optional</sup> <a name="snapshot_name_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotNameInput"></a>

```python
snapshot_name_input: str
```

- *Type:* str

---

##### `snapshot_retention_limit_input`<sup>Optional</sup> <a name="snapshot_retention_limit_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotRetentionLimitInput"></a>

```python
snapshot_retention_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_window_input`<sup>Optional</sup> <a name="snapshot_window_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotWindowInput"></a>

```python
snapshot_window_input: str
```

- *Type:* str

---

##### `sns_topic_arn_input`<sup>Optional</sup> <a name="sns_topic_arn_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicArnInput"></a>

```python
sns_topic_arn_input: str
```

- *Type:* str

---

##### `sns_topic_status_input`<sup>Optional</sup> <a name="sns_topic_status_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicStatusInput"></a>

```python
sns_topic_status_input: str
```

- *Type:* str

---

##### `subnet_group_name_input`<sup>Optional</sup> <a name="subnet_group_name_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.subnetGroupNameInput"></a>

```python
subnet_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[MemorydbClusterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>]

---

##### `tls_enabled_input`<sup>Optional</sup> <a name="tls_enabled_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tlsEnabledInput"></a>

```python
tls_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `acl_name`<sup>Required</sup> <a name="acl_name" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.aclName"></a>

```python
acl_name: str
```

- *Type:* str

---

##### `auto_minor_version_upgrade`<sup>Required</sup> <a name="auto_minor_version_upgrade" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.autoMinorVersionUpgrade"></a>

```python
auto_minor_version_upgrade: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `data_tiering`<sup>Required</sup> <a name="data_tiering" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.dataTiering"></a>

```python
data_tiering: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `final_snapshot_name`<sup>Required</sup> <a name="final_snapshot_name" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.finalSnapshotName"></a>

```python
final_snapshot_name: str
```

- *Type:* str

---

##### `ip_discovery`<sup>Required</sup> <a name="ip_discovery" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.ipDiscovery"></a>

```python
ip_discovery: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.maintenanceWindow"></a>

```python
maintenance_window: str
```

- *Type:* str

---

##### `multi_region_cluster_name`<sup>Required</sup> <a name="multi_region_cluster_name" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.multiRegionClusterName"></a>

```python
multi_region_cluster_name: str
```

- *Type:* str

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `num_replicas_per_shard`<sup>Required</sup> <a name="num_replicas_per_shard" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numReplicasPerShard"></a>

```python
num_replicas_per_shard: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_shards`<sup>Required</sup> <a name="num_shards" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.numShards"></a>

```python
num_shards: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parameter_group_name`<sup>Required</sup> <a name="parameter_group_name" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.parameterGroupName"></a>

```python
parameter_group_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `snapshot_arns`<sup>Required</sup> <a name="snapshot_arns" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotArns"></a>

```python
snapshot_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `snapshot_name`<sup>Required</sup> <a name="snapshot_name" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotName"></a>

```python
snapshot_name: str
```

- *Type:* str

---

##### `snapshot_retention_limit`<sup>Required</sup> <a name="snapshot_retention_limit" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotRetentionLimit"></a>

```python
snapshot_retention_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_window`<sup>Required</sup> <a name="snapshot_window" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snapshotWindow"></a>

```python
snapshot_window: str
```

- *Type:* str

---

##### `sns_topic_arn`<sup>Required</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

---

##### `sns_topic_status`<sup>Required</sup> <a name="sns_topic_status" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.snsTopicStatus"></a>

```python
sns_topic_status: str
```

- *Type:* str

---

##### `subnet_group_name`<sup>Required</sup> <a name="subnet_group_name" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.subnetGroupName"></a>

```python
subnet_group_name: str
```

- *Type:* str

---

##### `tls_enabled`<sup>Required</sup> <a name="tls_enabled" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tlsEnabled"></a>

```python
tls_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.memorydbCluster.MemorydbCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MemorydbClusterClusterEndpoint <a name="MemorydbClusterClusterEndpoint" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import memorydb_cluster

memorydbCluster.MemorydbClusterClusterEndpoint()
```


### MemorydbClusterConfig <a name="MemorydbClusterConfig" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import memorydb_cluster

memorydbCluster.MemorydbClusterConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  acl_name: str,
  cluster_name: str,
  node_type: str,
  auto_minor_version_upgrade: bool | IResolvable = None,
  cluster_endpoint: MemorydbClusterClusterEndpoint = None,
  data_tiering: str = None,
  description: str = None,
  engine: str = None,
  engine_version: str = None,
  final_snapshot_name: str = None,
  ip_discovery: str = None,
  kms_key_id: str = None,
  maintenance_window: str = None,
  multi_region_cluster_name: str = None,
  network_type: str = None,
  num_replicas_per_shard: typing.Union[int, float] = None,
  num_shards: typing.Union[int, float] = None,
  parameter_group_name: str = None,
  port: typing.Union[int, float] = None,
  security_group_ids: typing.List[str] = None,
  snapshot_arns: typing.List[str] = None,
  snapshot_name: str = None,
  snapshot_retention_limit: typing.Union[int, float] = None,
  snapshot_window: str = None,
  sns_topic_arn: str = None,
  sns_topic_status: str = None,
  subnet_group_name: str = None,
  tags: IResolvable | typing.List[MemorydbClusterTags] = None,
  tls_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.aclName">acl_name</a></code> | <code>str</code> | The name of the Access Control List to associate with the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | The name of the cluster. This value must be unique as it also serves as the cluster identifier. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.nodeType">node_type</a></code> | <code>str</code> | The compute and memory capacity of the nodes in the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>bool \| cdktn.IResolvable</code> | A flag that enables automatic minor version upgrade when set to true. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.clusterEndpoint">cluster_endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a></code> | The cluster endpoint. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.dataTiering">data_tiering</a></code> | <code>str</code> | Enables data tiering. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.description">description</a></code> | <code>str</code> | An optional description of the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.engine">engine</a></code> | <code>str</code> | The engine type used by the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.engineVersion">engine_version</a></code> | <code>str</code> | The Redis engine version used by the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.finalSnapshotName">final_snapshot_name</a></code> | <code>str</code> | The user-supplied name of a final cluster snapshot. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.ipDiscovery">ip_discovery</a></code> | <code>str</code> | For clusters wth dual stack NetworkType, IpDiscovery controls the Ip protocol (ipv4 or ipv6) returned by the engine commands such as `cluster info` and `cluster nodes` which are used by clients to connect to the nodes in the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The ID of the KMS key used to encrypt the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.maintenanceWindow">maintenance_window</a></code> | <code>str</code> | Specifies the weekly time range during which maintenance on the cluster is performed. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.multiRegionClusterName">multi_region_cluster_name</a></code> | <code>str</code> | The name of the Global Datastore, it is generated by MemoryDB adding a prefix to MultiRegionClusterNameSuffix. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.networkType">network_type</a></code> | <code>str</code> | Must be either ipv4 \| ipv6 \| dual_stack. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.numReplicasPerShard">num_replicas_per_shard</a></code> | <code>typing.Union[int, float]</code> | The number of replicas to apply to each shard. The limit is 5. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.numShards">num_shards</a></code> | <code>typing.Union[int, float]</code> | The number of shards the cluster will contain. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.parameterGroupName">parameter_group_name</a></code> | <code>str</code> | The name of the parameter group associated with the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port number on which each member of the cluster accepts connections. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | One or more Amazon VPC security groups associated with this cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotArns">snapshot_arns</a></code> | <code>typing.List[str]</code> | A list of Amazon Resource Names (ARN) that uniquely identify the RDB snapshot files stored in Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotName">snapshot_name</a></code> | <code>str</code> | The name of a snapshot from which to restore data into the new cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotRetentionLimit">snapshot_retention_limit</a></code> | <code>typing.Union[int, float]</code> | The number of days for which MemoryDB retains automatic snapshots before deleting them. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotWindow">snapshot_window</a></code> | <code>str</code> | The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snsTopicStatus">sns_topic_status</a></code> | <code>str</code> | The status of the Amazon SNS notification topic. Notifications are sent only if the status is enabled. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.subnetGroupName">subnet_group_name</a></code> | <code>str</code> | The name of the subnet group to be used for the cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>]</code> | An array of key-value pairs to apply to this cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.tlsEnabled">tls_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | A flag that enables in-transit encryption when set to true. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `acl_name`<sup>Required</sup> <a name="acl_name" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.aclName"></a>

```python
acl_name: str
```

- *Type:* str

The name of the Access Control List to associate with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#acl_name MemorydbCluster#acl_name}

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

The name of the cluster. This value must be unique as it also serves as the cluster identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#cluster_name MemorydbCluster#cluster_name}

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

The compute and memory capacity of the nodes in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#node_type MemorydbCluster#node_type}

---

##### `auto_minor_version_upgrade`<sup>Optional</sup> <a name="auto_minor_version_upgrade" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.autoMinorVersionUpgrade"></a>

```python
auto_minor_version_upgrade: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A flag that enables automatic minor version upgrade when set to true.

You cannot modify the value of AutoMinorVersionUpgrade after the cluster is created. To enable AutoMinorVersionUpgrade on a cluster you must set AutoMinorVersionUpgrade to true when you create a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#auto_minor_version_upgrade MemorydbCluster#auto_minor_version_upgrade}

---

##### `cluster_endpoint`<sup>Optional</sup> <a name="cluster_endpoint" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.clusterEndpoint"></a>

```python
cluster_endpoint: MemorydbClusterClusterEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a>

The cluster endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#cluster_endpoint MemorydbCluster#cluster_endpoint}

---

##### `data_tiering`<sup>Optional</sup> <a name="data_tiering" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.dataTiering"></a>

```python
data_tiering: str
```

- *Type:* str

Enables data tiering.

Data tiering is only supported for clusters using the r6gd node type. This parameter must be set when using r6gd nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#data_tiering MemorydbCluster#data_tiering}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#description MemorydbCluster#description}

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.engine"></a>

```python
engine: str
```

- *Type:* str

The engine type used by the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#engine MemorydbCluster#engine}

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

The Redis engine version used by the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#engine_version MemorydbCluster#engine_version}

---

##### `final_snapshot_name`<sup>Optional</sup> <a name="final_snapshot_name" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.finalSnapshotName"></a>

```python
final_snapshot_name: str
```

- *Type:* str

The user-supplied name of a final cluster snapshot.

This is the unique name that identifies the snapshot. MemoryDB creates the snapshot, and then deletes the cluster immediately afterward.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#final_snapshot_name MemorydbCluster#final_snapshot_name}

---

##### `ip_discovery`<sup>Optional</sup> <a name="ip_discovery" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.ipDiscovery"></a>

```python
ip_discovery: str
```

- *Type:* str

For clusters wth dual stack NetworkType, IpDiscovery controls the Ip protocol (ipv4 or ipv6) returned by the engine commands such as `cluster info` and `cluster nodes` which are used by clients to connect to the nodes in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#ip_discovery MemorydbCluster#ip_discovery}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The ID of the KMS key used to encrypt the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#kms_key_id MemorydbCluster#kms_key_id}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.maintenanceWindow"></a>

```python
maintenance_window: str
```

- *Type:* str

Specifies the weekly time range during which maintenance on the cluster is performed.

It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#maintenance_window MemorydbCluster#maintenance_window}

---

##### `multi_region_cluster_name`<sup>Optional</sup> <a name="multi_region_cluster_name" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.multiRegionClusterName"></a>

```python
multi_region_cluster_name: str
```

- *Type:* str

The name of the Global Datastore, it is generated by MemoryDB adding a prefix to MultiRegionClusterNameSuffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#multi_region_cluster_name MemorydbCluster#multi_region_cluster_name}

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

Must be either ipv4 | ipv6 | dual_stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#network_type MemorydbCluster#network_type}

---

##### `num_replicas_per_shard`<sup>Optional</sup> <a name="num_replicas_per_shard" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.numReplicasPerShard"></a>

```python
num_replicas_per_shard: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of replicas to apply to each shard. The limit is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#num_replicas_per_shard MemorydbCluster#num_replicas_per_shard}

---

##### `num_shards`<sup>Optional</sup> <a name="num_shards" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.numShards"></a>

```python
num_shards: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of shards the cluster will contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#num_shards MemorydbCluster#num_shards}

---

##### `parameter_group_name`<sup>Optional</sup> <a name="parameter_group_name" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.parameterGroupName"></a>

```python
parameter_group_name: str
```

- *Type:* str

The name of the parameter group associated with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#parameter_group_name MemorydbCluster#parameter_group_name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port number on which each member of the cluster accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#port MemorydbCluster#port}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

One or more Amazon VPC security groups associated with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#security_group_ids MemorydbCluster#security_group_ids}

---

##### `snapshot_arns`<sup>Optional</sup> <a name="snapshot_arns" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotArns"></a>

```python
snapshot_arns: typing.List[str]
```

- *Type:* typing.List[str]

A list of Amazon Resource Names (ARN) that uniquely identify the RDB snapshot files stored in Amazon S3.

The snapshot files are used to populate the new cluster. The Amazon S3 object name in the ARN cannot contain any commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#snapshot_arns MemorydbCluster#snapshot_arns}

---

##### `snapshot_name`<sup>Optional</sup> <a name="snapshot_name" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotName"></a>

```python
snapshot_name: str
```

- *Type:* str

The name of a snapshot from which to restore data into the new cluster.

The snapshot status changes to restoring while the new cluster is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#snapshot_name MemorydbCluster#snapshot_name}

---

##### `snapshot_retention_limit`<sup>Optional</sup> <a name="snapshot_retention_limit" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotRetentionLimit"></a>

```python
snapshot_retention_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of days for which MemoryDB retains automatic snapshots before deleting them.

For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#snapshot_retention_limit MemorydbCluster#snapshot_retention_limit}

---

##### `snapshot_window`<sup>Optional</sup> <a name="snapshot_window" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snapshotWindow"></a>

```python
snapshot_window: str
```

- *Type:* str

The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#snapshot_window MemorydbCluster#snapshot_window}

---

##### `sns_topic_arn`<sup>Optional</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#sns_topic_arn MemorydbCluster#sns_topic_arn}

---

##### `sns_topic_status`<sup>Optional</sup> <a name="sns_topic_status" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.snsTopicStatus"></a>

```python
sns_topic_status: str
```

- *Type:* str

The status of the Amazon SNS notification topic. Notifications are sent only if the status is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#sns_topic_status MemorydbCluster#sns_topic_status}

---

##### `subnet_group_name`<sup>Optional</sup> <a name="subnet_group_name" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.subnetGroupName"></a>

```python
subnet_group_name: str
```

- *Type:* str

The name of the subnet group to be used for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#subnet_group_name MemorydbCluster#subnet_group_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[MemorydbClusterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>]

An array of key-value pairs to apply to this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#tags MemorydbCluster#tags}

---

##### `tls_enabled`<sup>Optional</sup> <a name="tls_enabled" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterConfig.property.tlsEnabled"></a>

```python
tls_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A flag that enables in-transit encryption when set to true.

You cannot modify the value of TransitEncryptionEnabled after the cluster is created. To enable in-transit encryption on a cluster you must set TransitEncryptionEnabled to true when you create a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#tls_enabled MemorydbCluster#tls_enabled}

---

### MemorydbClusterTags <a name="MemorydbClusterTags" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags.Initializer"></a>

```python
from cdktn_provider_awscc import memorydb_cluster

memorydbCluster.MemorydbClusterTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags.property.key">key</a></code> | <code>str</code> | The key for the tag. May not be null. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags.property.value">value</a></code> | <code>str</code> | The tag's value. May be null. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key for the tag. May not be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#key MemorydbCluster#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag's value. May be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_cluster#value MemorydbCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### MemorydbClusterClusterEndpointOutputReference <a name="MemorydbClusterClusterEndpointOutputReference" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import memorydb_cluster

memorydbCluster.MemorydbClusterClusterEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MemorydbClusterClusterEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a>

---


### MemorydbClusterTagsList <a name="MemorydbClusterTagsList" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import memorydb_cluster

memorydbCluster.MemorydbClusterTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MemorydbClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MemorydbClusterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>]

---


### MemorydbClusterTagsOutputReference <a name="MemorydbClusterTagsOutputReference" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import memorydb_cluster

memorydbCluster.MemorydbClusterTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MemorydbClusterTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.memorydbCluster.MemorydbClusterTags">MemorydbClusterTags</a>

---



